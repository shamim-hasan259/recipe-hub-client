"use client";

import React from "react";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4 transition-colors duration-200">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/50">
        {/* Icon */}
        <div className="inline-flex p-4 bg-red-50 dark:bg-red-950/30 rounded-full text-red-500 animate-pulse">
          <ShieldAlert className="w-12 h-12" />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Access Denied
          </h1>
          <p className="text-sm text-gray-500 dark:text-slate-400 font-medium leading-relaxed">
            Oops! You don't have permission to access this page. Admin
            privileges are required.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
