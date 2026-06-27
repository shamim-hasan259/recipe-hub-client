import React from "react";
import { PlusCircle, ArrowRight } from "lucide-react";

const ChefCtaSection = () => {
  return (
    <section className="relative border-none outline- bg-[#f3f4f6] dark:bg-gradient-to-b dark:from-[#0c1017] dark:via-[#0e141f] dark:to-[#0c1017] pb-20 pt-8 px-6 md:px-12 transition-colors duration-300 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white dark:bg-[#111c2a] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-4 max-w-xl text-center md:text-left z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Share Your Passion
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight leading-tight">
              Become a Chef & Share <br className="hidden md:block" /> Your Own
              Recipes!
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              Join our global community of food lovers. Publish your signature
              dishes, get likes, and inspire thousands of home cooks everyday.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
            <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-md hover:opacity-90 active:scale-95 transition-all duration-200">
              <PlusCircle className="w-4 h-4" />
              Submit Recipe
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-50 dark:bg-[#162235] text-gray-700 dark:text-gray-300 font-semibold text-sm border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-[#1c2b42] active:scale-95 transition-all duration-200">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefCtaSection;
