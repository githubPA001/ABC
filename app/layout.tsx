import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: `${profile.name} | Full-Stack Developer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#0f172a",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="relative min-h-screen overflow-x-clip">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
