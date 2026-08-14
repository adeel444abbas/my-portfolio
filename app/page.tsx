"use client";
import { CursorGlow } from "../components/common/CursonGlow";
import { BackgroundBlobs } from "../components/common/BackgroundBlobs";
import { Navbar } from "../components/common/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "../components/common/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Loading } from "./Loading";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Loading />
      <CursorGlow />
      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Certifications /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
