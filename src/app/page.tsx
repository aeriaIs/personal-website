import { ThemeProvider } from "@/components/theme";
import AboutMe from "@/ui/home/about-me";
import Header from "@/ui/home/header";
import Navbar from "@/ui/home/navbar";

import "./styles.css";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-full min-h-screen page-scroller">
        <div className="w-full h-dvh flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Navbar />
          <Header />
        </div>
        <div className="w-full h-dvh flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <AboutMe />
        </div>
      </main>
    </ThemeProvider>
  );
}
