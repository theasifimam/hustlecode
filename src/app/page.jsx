import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>HustleCode Studio | MERN, Java, DevOps Experts</title>
        <meta
          name="description"
          content="We build scalable web and mobile applications using MERN stack, Java, React Native, and DevOps practices"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Services />
        <Technologies />
        <ProjectsShowcase />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
