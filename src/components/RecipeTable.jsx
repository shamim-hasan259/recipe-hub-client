"use client";

import React from "react";
import { Heart, Star, Trash2, ExternalLink, Pencil } from "lucide-react";
import Link from "next/link";
import { deleteRecipeAdmin, updateFeatureAdmin } from "@/lib/actions/admin";
import toast from "react-hot-toast";

export default function RecipeTable({ recipes }) {
  const handleMakeFeatured = async (id) => {
    const res = await updateFeatureAdmin(id, {});
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  // Delete বাটন হ্যান্ডলার
  const handleDeleteRecipe = async (recipeId) => {
    const res = await deleteRecipeAdmin(recipeId);
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700/60 rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-100 dark:border-slate-700/80 text-gray-400 dark:text-slate-400 font-semibold text-xs tracking-wider">
              <th className="p-4 font-medium">Recipe</th>
              <th className="p-4 font-medium">Author</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Likes</th>
              <th className="p-4 font-medium">Featured</th>
              <th className="p-4 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {recipes?.map((item) => {
              const recipeId = item._id;

              return (
                <tr
                  key={recipeId}
                  className="hover:bg-gray-50/50 dark:hover:bg-slate-700/20 transition"
                >
                  {/* Recipe Image & Name with View Link */}
                  <td className="p-4">
                    <Link
                      href={`/recipes/${recipeId}`}
                      target="_blank"
                      className="flex items-center gap-3 group"
                    >
                      <img
                        src={
                          item.recipeImage ||
                          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=100&q=80"
                        }
                        alt={item.recipeName}
                        className="w-12 h-12 rounded-xl object-cover border border-gray-100 dark:border-slate-700 group-hover:scale-105 transition duration-200 flex-shrink-0"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition flex items-center gap-1 leading-tight max-w-[180px] break-words">
                          {item.recipeName || "Untitled Recipe"}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
                        </span>
                      </div>
                    </Link>
                  </td>

                  {/* Author Name */}
                  <td className="p-4 font-medium text-gray-600 dark:text-slate-300 truncate max-w-[150px]">
                    {item.authorName ||
                      item.userEmail?.split("@")[0] ||
                      "Anonymous"}
                  </td>

                  {/* Category Badge */}
                  <td className="p-4">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 border border-orange-100/30 dark:border-transparent whitespace-nowrap">
                      {item.category || "General"}
                    </span>
                  </td>

                  {/* Likes */}
                  <td className="p-4">
                    <div className="flex items-center gap-1 font-bold text-red-500 whitespace-nowrap">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>{item.likesCount || 0}</span>
                    </div>
                  </td>

                  {/* Featured Status Badge */}
                  <td className="p-4">
                    {item.isFeatured ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-100/30 dark:border-transparent whitespace-nowrap">
                        Featured
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-50 text-gray-400 dark:bg-slate-700/60 dark:text-slate-400 whitespace-nowrap">
                        Regular
                      </span>
                    )}
                  </td>

                  {/* Action Buttons (ডিজাইন ফিক্সড স্পেস ও কম ফন্ট সাইজ) */}
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                      {/* Feature Button */}
                      <button
                        onClick={() => handleMakeFeatured(recipeId)}
                        className="flex items-center gap-1 px-2 py-1 text-[11px] font-bold rounded-md bg-amber-50 text-amber-600 border border-amber-100/50 hover:bg-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:hover:bg-amber-950/60 dark:border-transparent transition shadow-sm"
                      >
                        <Star className="w-3 h-3 fill-current" />
                        Feature
                      </button>

                      {/* Edit Button */}
                      <Link
                        href={`/dashboard/admin/manage-recipes/edit/${recipeId}`}
                        className="flex items-center gap-1 px-2 py-1 text-[11px] font-bold rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:hover:bg-blue-950/60 border border-blue-100/50 dark:border-transparent transition shadow-sm"
                      >
                        <Pencil className="w-3 h-3" />
                        Edit
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDeleteRecipe(recipeId)}
                        className="flex items-center gap-1 px-2 py-1 text-[11px] font-bold rounded-md text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/60 border border-red-100/50 dark:border-transparent transition shadow-sm"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
