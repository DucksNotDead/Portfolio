import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { themeInitScript } from "@/lib/theme-script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.holuenko.ru"),
  title: "Alexander Holuenko · Developer",
  description:
    "Портфолио Александра Холуенко: разработчик, который берётся за проблемные системы и доводит их до результата.",
  authors: [{ name: "Alexander Holuenko", url: "https://github.com/DucksNotDead" }],
  openGraph: {
    title: "Alexander Holuenko · Developer",
    description:
      "Портфолио Александра Холуенко: разработчик, который берётся за проблемные системы и доводит их до результата.",
    url: "https://dev.holuenko.ru",
    siteName: "Alexander Holuenko",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
