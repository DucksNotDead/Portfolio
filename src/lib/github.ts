const GITHUB_USERNAME = "DucksNotDead";
const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours, keeps us well within rate limits

export interface GithubProfile {
  login: string;
  name: string | null;
  publicRepos: number;
  followers: number;
  avatarUrl: string;
  htmlUrl: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stars: number;
  updatedAt: string;
}

export interface GithubData {
  profile: GithubProfile | null;
  repos: GithubRepo[];
}

async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio-site",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return null;
    }

    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGithubData(): Promise<GithubData> {
  const [profileRaw, reposRaw] = await Promise.all([
    githubFetch<Record<string, unknown>>(`/users/${GITHUB_USERNAME}`),
    githubFetch<Record<string, unknown>[]>(
      `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    ),
  ]);

  const profile: GithubProfile | null = profileRaw
    ? {
        login: String(profileRaw.login ?? GITHUB_USERNAME),
        name: (profileRaw.name as string | null) ?? null,
        publicRepos: Number(profileRaw.public_repos ?? 0),
        followers: Number(profileRaw.followers ?? 0),
        avatarUrl: String(profileRaw.avatar_url ?? ""),
        htmlUrl: String(profileRaw.html_url ?? `https://github.com/${GITHUB_USERNAME}`),
      }
    : null;

  const repos: GithubRepo[] = (reposRaw ?? [])
    .filter((repo) => !repo.fork && !repo.private)
    .sort((a, b) => {
      const starsA = Number(a.stargazers_count ?? 0);
      const starsB = Number(b.stargazers_count ?? 0);
      if (starsA !== starsB) return starsB - starsA;
      return (
        new Date(String(b.pushed_at ?? 0)).getTime() -
        new Date(String(a.pushed_at ?? 0)).getTime()
      );
    })
    .slice(0, 6)
    .map((repo) => ({
      id: Number(repo.id),
      name: String(repo.name),
      description: (repo.description as string | null) ?? null,
      htmlUrl: String(repo.html_url),
      language: (repo.language as string | null) ?? null,
      stars: Number(repo.stargazers_count ?? 0),
      updatedAt: String(repo.pushed_at ?? repo.updated_at ?? ""),
    }));

  return { profile, repos };
}
