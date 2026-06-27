import React from "react";
import { FileText, Bookmark, Heart, Plus } from "lucide-react";
import Link from "next/link";
import { getUserSession } from "@/lib/session/session";
import { findRecipe } from "@/lib/api/recipe";
import { getFavouriteRecipe } from "@/lib/api/favourite";
import { getAllRecipe } from "@/lib/core/server";

const DashBoardUserHomepage = async () => {
  const user = await getUserSession();
  const { data: recipes } = await findRecipe(user?.id);
  const { data: favourites } = await getFavouriteRecipe(user?.id);
  const { data: allrecipe } = await getAllRecipe();
  console.log(allrecipe);

  const totalLike = allrecipe.reduce(
    (total, recipe) => total + recipe.likesCount,
    0,
  );
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6 md:p-12 font-sans transition-colors duration-200">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {user.name}
            </span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Here is your command center.
          </p>
        </div>
        <button className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition">
          Full Profile
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Published Recipes
            </span>
            <FileText className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
            {recipes?.length}
          </p>
          <a
            href="#"
            className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            View details →
          </a>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Saved Favorites
            </span>
            <Bookmark className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
            {favourites?.length}
          </p>
          <a
            href="#"
            className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            View details →
          </a>
        </div>

        {/* Total Engagement */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Total Engagement
            </span>
            <Heart className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-4xl font-extrabold mb-2 text-slate-900 dark:text-white">
            {totalLike}
          </p>
          <span className="text-xs text-slate-500 dark:text-slate-500">
            Across all recipes
          </span>
        </div>
      </section>

      {/* Storage Limit Bar */}
      <section className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">
              Storage Limit: 1/2 Recipes
            </h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Basic accounts are limited to 2 recipes. Upgrade to unlock unlimited
            storage.
          </p>
        </div>
        <Link
          href="/dashboard/user/profile"
          className="px-6 py-2.5 rounded-xl font-medium shadow-lg transition-all duration-300 transform active:scale-95 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover:shadow-cyan-500/30 UI-upgrade-btn"
        >
          Upgrade Account
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent inline-block">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-5 py-3 rounded-xl font-medium shadow-md transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover:shadow-cyan-500/30 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create new recipe
          </button>
          <button className="px-5 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 transition font-medium">
            Browse gallery
          </button>
          <button className="px-5 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 transition font-medium">
            View saved items
          </button>
          <button className="px-5 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 transition font-medium">
            Account settings
          </button>
        </div>
      </section>
    </div>
  );
};

export default DashBoardUserHomepage;
