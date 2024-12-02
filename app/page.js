import { personalData } from "@/utils/data/personal-data";
import Head from 'next/head';
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// Function to fetch blog data from Dev.to API
async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

    return filtered;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
}

// Fetch data on the server-side (SSR) for better performance
export async function getServerSideProps() {
  const blogs = await getData();
  return { props: { blogs } };
}

// Home component
export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Your Portfolio - Home</title>
        <meta name="description" content="Explore my portfolio and blog posts." />
      </Head>

      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
