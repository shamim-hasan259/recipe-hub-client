"use client";

import { dismisReport, deleteRecipe } from "@/lib/actions/report";
import React from "react";
import toast from "react-hot-toast";

export default function ReportActions({ reportId, recipeId }) {
  const handleRemoveRecipe = async () => {
    const res = await deleteRecipe(recipeId);
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  const handleDismissReport = async () => {
    const res = await dismisReport(reportId);
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <button
        onClick={handleRemoveRecipe}
        className="px-3 py-1.5 rounded-xl border border-red-100 dark:border-red-950 bg-red-50 dark:bg-red-950/30 text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/50 transition-colors duration-200"
      >
        Remove Recipe
      </button>

      <button
        onClick={handleDismissReport}
        className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 shadow-sm transition-colors duration-200"
      >
        Dismiss
      </button>
    </div>
  );
}
