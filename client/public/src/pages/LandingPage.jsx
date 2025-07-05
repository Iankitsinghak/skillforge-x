import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1f1f1f] text-white flex flex-col justify-center items-center">
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Turn Your Skills Into Action 🚀
      </motion.h1>
      <motion.p
        className="text-lg max-w-xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        SkillForge X helps you find real-world projects, teammates, and build your dev portfolio — all in one dark, beautiful platform.
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl">
          Get Started
        </button>
        <button className="border border-gray-400 hover:border-white text-white px-6 py-3 rounded-2xl font-semibold">
          Learn More
        </button>
      </motion.div>
    </div>
  );
}
