import { findRecipe } from "@/lib/api/recipe";
import { getUserSession } from "@/lib/session/session";
import React from "react";
import { Eye, Edit2, Trash2, Heart, Plus, FolderHeart } from "lucide-react";
import Link from "next/link";
import DeleteRecipe from "@/components/Delete";

const MyRecipePage = async () => {
  const user = await getUserSession();
  const { data: recipes } = await findRecipe(user?.id);

  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0c1017] p-6 md:p-12 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
              <FolderHeart className="w-7 h-7 text-cyan-500" />
              My{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Recipes
              </span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              View, edit, or manage the recipes you have shared.
            </p>
          </div>

          <Link
            href="/dashboard/user/add-recipe"
            className="px-5 py-2.5 rounded-xl text-sm font-medium shadow-md transition-all duration-300 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover:shadow-cyan-500/30 flex items-center gap-2 self-start sm:self-center"
          >
            <Plus className="w-4 h-4" /> Create Recipe
          </Link>
        </div>

        <div className="bg-white dark:bg-[#111c2a] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/70 dark:bg-[#162235]/50 border-b border-gray-200 dark:border-gray-800 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <th className="px-6 py-4">Recipe</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Difficulty</th>
                  <th className="px-6 py-4">Likes</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60 text-sm text-gray-700 dark:text-gray-300">
                {recipes.map((recipe) => (
                  <tr
                    key={recipe._id}
                    className="hover:bg-gray-50/50 dark:hover:bg-[#162235]/30 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <img
                          src={
                            recipe.image ||
                            "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=150&q=80"
                          }
                          alt={recipe.title}
                          className="w-12 h-12 rounded-xl object-cover border border-gray-200 dark:border-gray-700"
                        />
                        <div>
                          <p className="font-bold text-gray-900 dark:text-gray-100">
                            {recipe.title}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            {recipe.date}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20">
                        {recipe.category}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                          recipe.difficulty === "Hard"
                            ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
                            : "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-500/20"
                        }`}
                      >
                        {recipe.difficulty}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400 font-semibold">
                        <Heart className="w-4 h-4 fill-current" />
                        <span>{recipe.likes}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        {recipe.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="inline-flex items-center gap-2">
                        <Link
                          href={`/browse-recipes/recipe/${recipe._id}`}
                          className="inline-flex items-center justify-center p-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium text-xs transition gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </Link>
                        <Link
                          href={`/dashboard/user/my-recipes/edit/${recipe._id}`}
                          className="inline-flex items-center justify-center p-2 rounded-xl border border-orange-200 dark:border-orange-900/50 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium text-xs transition gap-1"
                        >
                          <Edit2 className="w-3.5 h-3.5" /> Edit
                        </Link>
                        <DeleteRecipe id={recipe._id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipePage;
