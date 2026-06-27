"use client";

import React from "react";
import { MoveLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4 transition-colors duration-200">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Big 404 Text */}
        <div className="relative">
          <h1 className="text-9xl font-black text-gray-200 dark:text-slate-800 tracking-tighter select-none">
            404
          </h1>
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white mt-4">
            Page Not Found
          </span>
        </div>

        {/* Message */}
        <p className="text-sm text-gray-500 dark:text-slate-400 font-medium max-w-xs mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Home Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
