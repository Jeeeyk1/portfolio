/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
const Home: NextPage = () => {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title> Jake's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/*Experience*/}

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/*Skils*/}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/*Projects*/}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/*Contact me*/}
    </div>
  );
};

export default Home;
