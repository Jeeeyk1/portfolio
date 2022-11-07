/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#ff83cd] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="images/about.jpg"
        className="mt-24 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold mt-24">
          Here is a{" "}
          <span className=" underline decoration-[#ff83cd]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi!, I'm Justin Jake Almariego. You can call me Jake, I am currently a
          Back-End Developer Intern at Xurpas Inc. and aspiring to be a
          Full-Stack Developer. I want to utilize and improve my skills in
          coding by creating amazing projects and exploring other languages and
          frameworks. But I am not saying that I am an expert in coding, I'm
          still learning fyi. I was a working student at McDonald's Commerce
          Ave. Alabang for 3years. I started working there when I was in my
          first year college up to now and I learnt how to manage my time
          properly because once you are a working student you will be have a
          limited time only so you should manage and use it properly.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
