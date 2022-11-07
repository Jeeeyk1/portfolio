/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Justin Jake",
      "Aspiring Full-Stack Developer",
      "<ButAlsoALazyProgrammer/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="images/jake.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#FF83CD] pb-2 tracking-[12px] font-bold">
          Full-Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="pink" />
        </h1>
        <div className="pt-5">
          <Link href="#about" passHref>
            <button className=" px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-pink-500 transition-all hover:border-[#8bbae9]/40 hover:text-pink/40 mr-3">
              About
            </button>
          </Link>
          <Link href="#experience" passHref>
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-pink-500 transition-all hover:border-[#8bbae9]/40 hover:text-pink/40 mr-3">
              Experience
            </button>
          </Link>
          <Link href="#skills" passHref>
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-pink-500 transition-all hover:border-[#8bbae9]/40 hover:text-pink/40 mr-3">
              Skills
            </button>
          </Link>
          <Link href="#projects" passHref>
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-pink-500 transition-all hover:border-[#8bbae9]/40 hover:text-pink/40">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
