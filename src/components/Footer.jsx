import React from "react";
import { Heart, Send } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#f3f4f6] dark:bg-gradient-to-b dark:from-[#0c1017] dark:to-[#080b10] border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      {/* 🌌 ব্যাকগ্রাউন্ড সফট গ্লো */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/[0.02] dark:bg-cyan-500/[0.015] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 z-10">
        {/* ১. টপ গ্রিড সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-200 dark:border-gray-800/60 pb-12">
          {/* ব্র্যান্ড ইনফো */}
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-tight text-gray-900 dark:text-gray-100">
              Recipe
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Hub
              </span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Discover, cook, and share amazing recipes from around the world.
              Your ultimate culinary companion.
            </p>

            {/* 🌐 সোশ্যাল লিংকস (এরর এড়াতে টেক্সট/এসভিজি বেসড করা হয়েছে যা আজীবন সেফ) */}
            <div className="flex items-center gap-3 pt-2">
              {["FB", "TW", "IG", "YT"].map((name, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded-xl bg-white dark:bg-[#111c2a] border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-105 transition-all duration-200 shadow-sm flex items-center justify-center text-xs font-bold"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* কুইক লিংকস */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              {[
                "Latest Recipes",
                "Popular Dishes",
                "Our Top Chefs",
                "Trending Articles",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ক্যাটাগরি */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              {[
                "Breakfast Recipes",
                "Lunch Specials",
                "Dinner Pleasures",
                "Healthy Snacks",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* নিউজলেটার সাবস্ক্রিপশন */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Newsletter
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Subscribe to get latest food updates and premium recipes.
            </p>
            <div className="flex gap-2 w-full">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#111c2a] border border-gray-200 dark:border-gray-800 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:opacity-90 transition-opacity flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ২. বটম কপিরাইট সেকশন */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} RecipeHub. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> by{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              <Link href="https://dev-shamim-blond.vercel.app/">Shamim</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
