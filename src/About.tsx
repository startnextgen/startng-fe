import { useEffect } from "react";
import AboutView from "./AboutView";
import { PAGES, setSeo } from "./seo";
import ThemeToggle from "./ThemeToggle";

// start.ng/about: what start.ng is, what you can do on it, and the common questions. The page is in about.html already
// (written at build time, see vite.config.ts); this draws the same page again.
export default function About() {
  useEffect(() => { setSeo(PAGES.about); }, []);
  return <AboutView themeToggle={<ThemeToggle />} />;
}
