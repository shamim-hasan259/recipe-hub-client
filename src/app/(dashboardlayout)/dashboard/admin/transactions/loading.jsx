import React from "react";
import { Loader2 } from "lucide-react";

const PageLoader = ({
  message = "Loading Application...",
  description = "Please wait a moment while we set things up for you.",
}) => {
  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-[#f3f4f6]/90 dark:bg-[#0c1017]/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-colors duration-300">
      <div className="relative flex flex-col items-center max-w-sm w-full text-center space-y-6">
        <div className="absolute -inset-10 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full opacity-10 animate-ping duration-1000"></div>
          <div className="relative w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-lg bg-white dark:bg-[#111c2a]">
            <Loader2 className="w-8 h-8 text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 animate-spin stroke-[2.5]" />
          </div>
        </div>

        <div className="space-y-3 z-10">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
            {message}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[280px]">
            {description}
          </p>
        </div>

        <div className="w-40 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full animate-shimmer origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
