import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { fetctedRecipeDetails } from "@/lib/api/recipe";
import RecipeActions from "@/components/RecipeActions";
import { getUserSession } from "@/lib/session/session";

const RecipeDetailsPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  const { data: recipe } = await fetctedRecipeDetails(id);

  if (!recipe) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-slate-400">
        <p className="text-xl font-semibold">Recipe not found!</p>
        <Link
          href="/"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-slate-900 min-h-screen text-black dark:text-white transition-colors duration-300 pb-12">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* --- ব্যাক বাটন সেকশন --- */}
        <div className="mb-6">
          <Link
            href="/browse-recipes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recipes
          </Link>
        </div>

        {/* --- ১. ইমেজ এখন উপরে এবং বড় আকারে --- */}
        <div className="relative w-full h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl mb-8 group">
          <img
            src={
              recipe.recipeImage ||
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800"
            }
            alt={recipe.recipeName || recipe.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />
          {/* লেফট টপ ব্যাজ */}
          <span className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-md">
            {recipe.category}
          </span>
          {/* রাইট টপ ব্যাজ */}
          <span className="absolute top-4 right-4 bg-amber-500 text-white text-sm px-4 py-1.5 rounded-full font-bold shadow-md">
            🏷️ {recipe.category || "Food"}
          </span>
        </div>

        {/* --- ২. মেইন কন্টেন্ট ও ইনফো কার্ড --- */}
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-md space-y-6">
          {/* টাইটেল এবং প্রিপারেশন টাইম */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
              {recipe.recipeName}
            </h1>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-slate-400">
              <Clock className="w-4 h-4 text-cyan-500" />
              <span>Preparation Time: {recipe.prepTime || "30 mins"}</span>
            </div>
          </div>

          {/* ডেসক্রিপশন / ইন্সট্রাকশন */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-base">
              {recipe.instructions ||
                recipe.description ||
                "No description available."}
            </p>
          </div>

          {recipe.ingredients && (
            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Ingredients Needed
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                {recipe.ingredients.map((ing, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300 bg-gray-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl border border-gray-100 dark:border-slate-700/30"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <RecipeActions
            recipe={recipe}
            user={user}
            recipePrice={recipe.price || 15.99}
            recipeName={recipe.recipeName || recipe.title}
          />
        </div>
      </div>
    </section>
  );
};

export default RecipeDetailsPage;
