"use client";

import React from "react";
import Link from "next/link";
import { Eye, Trash2, Clock } from "lucide-react";
import { deleteFovurite } from "@/lib/actions/favourite";
import toast from "react-hot-toast";
export default function FavouriteCard({ recipe }) {
  const handleRemove = async () => {
    const res = await deleteFovurite(recipe._id);
    console.log(res);
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  return (
    <div className="group border border-gray-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl bg-white dark:bg-slate-800 transition-all duration-300 flex flex-col transform hover:-translate-y-1">
      <div className="relative w-full h-48 bg-gray-100 dark:bg-slate-700 overflow-hidden">
        <img
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-gray-900 dark:text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">
          {recipe.category || "General"}
        </span>
        <span className="absolute top-3 right-3 bg-cyan-500 text-white text-[10px] px-2.5 py-1 rounded-full font-bold shadow-sm">
          {recipe.difficultyLevel || "Easy"}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200 line-clamp-1">
            {recipe.recipeName}
          </h2>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500 mt-1 font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>{recipe.preparationTime} mins prep</span>
          </div>

          <p className="text-gray-500 dark:text-slate-400 mt-2.5 text-xs line-clamp-2 leading-relaxed">
            {recipe.instructions && recipe.instructions[0]
              ? `Step 1: ${recipe.instructions[0]}`
              : "Premium recipe details inside."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-gray-100 dark:border-slate-700/50">
          <Link
            href={`/browse-recipes/recipe/${recipe._id}`}
            className="py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            Details
          </Link>

          <button
            onClick={handleRemove}
            className="py-2.5 px-3 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 font-semibold text-xs text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/40 transition flex items-center justify-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
