import { ThemeProvider } from "@/components/theme";
import AboutMe from "@/ui/home/about-me";
import Header from "@/ui/home/header";
import Navbar from "@/ui/home/navbar";
import Skills from "@/ui/home/skills";
import CallToAction from "@/ui/home/cta";

import "./styles.css";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-screen h-full page-scroller">
        <div className="w-full h-full lg:h-screen flex flex-col items-center sm:items-start gap-8">
          <Navbar />
          <Header />
        </div>
        <div className="w-full h-full lg:h-screen flex flex-col items-center sm:items-start gap-8">
          <AboutMe />
        </div>
        <div className="mt-20 sm:mt-16 lg:mt-8 w-full h-full lg:h-screen flex flex-col items-center sm:items-start gap-8">
          <Skills />
        </div>
        <div className="mt-20 sm:mt-16 lg:mt-8 w-full h-full lg:h-screen flex flex-col items-center sm:items-start gap-8">
          <CallToAction />
        </div>
      </main>
    </ThemeProvider>
  );
}
