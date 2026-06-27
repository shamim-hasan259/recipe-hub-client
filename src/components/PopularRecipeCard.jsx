import React from "react";
import { Heart, Clock, Utensils, Flame } from "lucide-react";
import Link from "next/link";

const PopularRecipeCard = ({ recipe }) => {
  const {
    recipeName,
    recipeImage,
    category,
    cuisineType,
    difficultyLevel,
    preparationTime,
    likesCount,
    isFeatured = false,
  } = recipe || {};
  return (
    <div className="group relative w-full max-w-[360px] bg-white dark:bg-[#111c2a] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-500/5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src={recipeImage}
          alt={recipeName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

        {isFeatured && (
          <div className="absolute top-3 left-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            Popular
          </div>
        )}

        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-[#111c2a]/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 hover:scale-110 transition-all duration-200 shadow-sm">
          <Heart className="w-4 h-4" />
        </button>

        <span className="absolute bottom-3 left-3 bg-white dark:bg-[#162235] text-cyan-600 dark:text-cyan-400 text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border border-cyan-100 dark:border-cyan-950">
          {category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500">
            <span>{cuisineType}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
            <span
              className={`font-semibold ${
                difficultyLevel === "Easy"
                  ? "text-green-500"
                  : difficultyLevel === "Medium"
                    ? "text-amber-500"
                    : "text-rose-500"
              }`}
            >
              {difficultyLevel}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
            {recipeName}
          </h3>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800/60 pt-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>{preparationTime} mins</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500/10" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {likesCount} Likes
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <Link
          href={`/browse-recipes/recipe/${recipe._id}`}
          className="w-full py-2.5 rounded-xl bg-gray-50 dark:bg-[#162235] hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 text-gray-700 dark:text-gray-300 hover:text-white font-medium text-sm border border-gray-200 dark:border-gray-800 hover:border-transparent flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
        >
          <Utensils className="w-4 h-4" />
          View Recipe
        </Link>
      </div>
    </div>
  );
};
export default PopularRecipeCard;
