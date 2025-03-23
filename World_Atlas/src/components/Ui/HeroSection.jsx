import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-black min-h-screen py-12">
      <main>
        <div className="flex flex-row  gap-4 md:order-1 p-3.2">
          
          <div className="flex flex-col gap-3 mt-32 ml-24 items-start">
           
            <motion.h1
              className="font-sans text-5xl text-white font-bold tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Explore the World, One Country at a Time.
            </motion.h1>

          
            <motion.p
              className="m-3.2 text-white mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Discover the history, culture, and beauty of every nation.
              Search and filter through countries to find the details.
            </motion.p>

            {/* Animated Button */}
            <motion.button
              className="flex flex-row text-white mt-5 border-2 rounded-3xl p-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Start Exploring
              <FaLongArrowAltRight className="ml-3 mt-2" />
            </motion.button>
          </div>

          {/* Animated Image */}
          <motion.div
            className="flex w-[80%] md:order-1 justify-center items-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img src="/images/world.png" alt="World Map" />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
