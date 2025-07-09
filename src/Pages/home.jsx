import React from "react";
//import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { TbBrandGmail } from "react-icons/tb";
import {
  Smile, // For Happy Customer
  Headset, // For Ticket Solved
  Star, // For Average Rating
  Facebook,
  Instagram,
  Github,
} from "lucide-react";
import Project from "./Project";
import Navbar from "./Shared/Navbar/navbar";
import Aboutme from "./Aboutme/Aboutme";
import Skill from "./Skill/Skill";
//import { cn } from "@/lib/utils";

//text animation

const Home = () => {
  const [text] = useTypewriter({
    words: [" Am Shoib Rahman", " Am a Student"],
    loop: 0,
  });
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans"
    >
      {/* Header Section */}
      <header className="">
        <div className="sticky">
          <div></div>
          {/* Responsive Menu (simplified) */}
          <div className="md:hidden"></div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto  py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Right Column: Image */}
          <div className="md:w-1/2  flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-full w-50 h-50 md:w-90 md:h-90  overflow-hidden  shadow-2xl shadow-purple-500/30 border-4 border-purple-500/20"
            >
              <img
                src="https://i.ibb.co/SXD7hqpK/20250707-205150.jpg" // My image URL
                alt="shoib rahman image"
                className="w-full h-full  object-cover"
                style={{
                  objectPosition: "center",
                }}
              />
            </motion.div>
          </div>
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              HEY THERE !
            </motion.h2>
            <div className="text-lg sm:text-xl text-gray-300">
              <h1 className="text-3xl"> I{text}</h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-2xl font-semibold text-white"
            >
              Diploma in CST department in Feni Polytechnic Institute.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center md:justify-start gap-4"
            >
              <a
                href="https://www.facebook.com/share/18pzjf89yx/"
                target="_blank"
                className="hover:text-purple-300 transition-colors"
              >
                <Facebook className="w-6 h-6"></Facebook>
              </a>
              <a
                href="https://www.instagram.com/shoib7349/"
                target="_blank"
                className="hover:text-purple-300 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/shoyebrahman"
                target="_blank"
                className="hover:text-purple-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:imad64236@gmail.com"
                target="_blank"
                className="hover:text-purple-300 transition-colors"
              >
                <TbBrandGmail className="w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                className="btn btn-accent bg-gradient-to-r from-purple-500/20 to-pink-500/20
                                       text-white border-purple-500/30 hover:border-purple-500/50
                                       hover:from-purple-500/30 hover:to-pink-500/30
                                       shadow-lg hover:shadow-purple-500/20 transition-all duration-300
                                       px-8 py-3 rounded-full font-semibold text-lg"
              >
                <a href="#contuct">Contuct</a>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
      </main>

      {/* About Me Section (Simplified) */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* <h2 className="text-3xl font-bold text-white mb-4">ABOUT ME</h2> */}
          <p className="text-gray-400 text-lg">
            {/* This is a placeholder.  In a real app, this would come from content. */}
          </p>
          {/* <Aboutme></Aboutme> */}
          {/* Add more about me content here */}

          {/* Add my project */}

          <div>
            <div>
              <Project></Project>
            </div>
          </div>
          <div className="mt-9">
            <div className="justify-center items-center mb-9 text-2xl lg:text-3xl text-center font-bold ">
              <h1>Experienced in</h1>
            </div>
            <Skill></Skill>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
