import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of MARIGONË MUSLIU - Software Developer",
  description:
    "This is the portfolio of MARIGONË MUSLIU. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
