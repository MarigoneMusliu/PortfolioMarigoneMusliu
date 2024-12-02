"use client";
import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { useEffect, useState } from "react";

// Dynamically import the client-side component (no SSR)
const ClientSideComponent = dynamic(() => import("./useClientSide"), {
  ssr: false, // Disable SSR for this component
});

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
}

export default function HomePageComponent() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const blogsData = await getData();
      setBlogs(blogsData);
      setLoading(false);
    }

    fetchData().catch(console.error);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ClientSideComponent /> {/* Render client-side logic here */}
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
