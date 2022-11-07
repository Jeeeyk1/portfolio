import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="#8bbae9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/jaketrent"
          fgColor="#8bbae9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/jaketrent"
          fgColor="#8bbae9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/jaketrent"
          fgColor="#8bbae9"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1.5,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="curson-pointer"
          network="email"
          fgColor="#8bbae9"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-pink-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;