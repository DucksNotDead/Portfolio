import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { getGithubData } from "@/lib/github";

export default async function Home() {
  const githubData = await getGithubData();

  return (
    <>
      <Header />
      {/* Fixed header is out of flow; spacer + flex-1 hero fill min-h-dvh without calc(100dvh). */}
      <div className="flex min-h-dvh flex-col">
        <div className="h-16 shrink-0" aria-hidden="true" />
        <Hero />
      </div>
      <main>
        <About />
        <Stack />
        <Projects githubData={githubData} />
        <Education />
        <Contact />
      </main>
    </>
  );
}
