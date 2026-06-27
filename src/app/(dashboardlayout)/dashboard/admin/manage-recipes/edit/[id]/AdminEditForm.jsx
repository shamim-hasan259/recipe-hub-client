"use client";

import React, { useState } from "react";
import { Upload, Plus, Trash2, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { editRecipeAdmin } from "@/lib/actions/admin";
import { redirect } from "next/navigation";

export default function AdminEditForm({ recipe }) {
  // console.log(recipe);
  const recipeData = recipe?.data || recipe;

  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const [recipeName, setRecipeName] = useState(recipeData?.recipeName || "");
  const [cuisineType, setCuisineType] = useState(recipeData?.cuisineType || "");
  const [category, setCategory] = useState(recipeData?.category || "");
  const [difficulty, setDifficulty] = useState(
    recipeData?.difficultyLevel || "Easy",
  );
  const [prepTime, setPrepTime] = useState(recipeData?.preparationTime || "");
  const [recipeImage, setRecipeImage] = useState(recipeData?.recipeImage || "");

  const [ingredients, setIngredients] = useState(
    recipeData?.ingredients || [""],
  );
  const [instructions, setInstructions] = useState(
    recipeData?.instructions || [""],
  );
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMAGE_API;
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.json();
      if (data.success) {
        setRecipeImage(data.data.url);
        toast.success("Image updated successfully!");
      } else {
        toast.error("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error(error.message || "Error uploading image");
    } finally {
      setImageUploading(false);
    }
  };

  const addIngredientField = () => setIngredients([...ingredients, ""]);
  const removeIngredientField = (indexToRemove) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  };
  const changeIngredientValue = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const addInstructionField = () => setInstructions([...instructions, ""]);
  const removeInstructionField = (indexToRemove) => {
    setInstructions(instructions.filter((_, index) => index !== indexToRemove));
  };
  const changeInstructionValue = (index, value) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  // --- Form Submit Function ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedRecipeData = {
      recipeName,
      recipeImage,
      category,
      cuisineType,
      difficultyLevel: difficulty,
      preparationTime: Number(prepTime),
      ingredients: ingredients.filter((item) => item.trim() !== ""),
      instructions: instructions.filter((item) => item.trim() !== ""),
      status: recipeData?.status || "published",
    };

    const res = await editRecipeAdmin(recipe._id, updatedRecipeData);
    if (res.status) {
      toast.success(`${res.message}`);
      redirect("/dashboard/admin/manage-recipes");
    }
    console.log(updatedRecipeData);
    setLoading(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100 py-10 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto ">
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 md:p-10 rounded-2xl shadow-md">
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-zinc-800 pb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Edit{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Recipe
                </span>{" "}
              </h1>
              <p className="text-sm text-slate-500 dark:text-zinc-400">
                Update your shared culinary creation
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Cuisine */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Recipe Name
                </label>
                <input
                  type="text"
                  required
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-transparent outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cuisine Type
                </label>
                <input
                  type="text"
                  required
                  value={cuisineType}
                  onChange={(e) => setCuisineType(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-transparent outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Category, Difficulty & Prep Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select Category</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Difficulty
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Prep Time (mins)
                </label>
                <input
                  type="number"
                  required
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-transparent outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Image Upload Area */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Recipe Image
              </label>
              <div className="border-2 border-dashed border-slate-200 dark:border-zinc-700 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/30 relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  disabled={imageUploading}
                />
                {imageUploading ? (
                  <div className="py-4 flex flex-col items-center justify-center gap-2">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                      Uploading to ImgBB...
                    </p>
                  </div>
                ) : recipeImage ? (
                  <div className="flex items-center justify-between bg-slate-100 dark:bg-zinc-800 p-2 rounded-lg">
                    <img
                      src={recipeImage}
                      alt="Recipe"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className="text-xs truncate max-w-xs px-2 text-slate-600 dark:text-zinc-300">
                      {recipeImage}
                    </span>
                    <button
                      type="button"
                      onClick={() => setRecipeImage("")}
                      className="text-red-500 p-1 hover:bg-red-50 dark:hover:bg-red-500/10 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="py-4">
                    <Upload className="w-6 h-6 mx-auto text-slate-400 mb-1" />
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                      Click or Drag to upload new image
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Ingredients Field */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Ingredients
              </label>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    required
                    value={ingredient}
                    onChange={(e) =>
                      changeIngredientValue(index, e.target.value)
                    }
                    className="flex-1 px-4 py-2 border border-slate-200 dark:border-zinc-700 bg-transparent rounded-xl outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                    placeholder="Ingredient"
                  />
                  {ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredientField(index)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addIngredientField}
                className="text-xs font-semibold text-blue-500 flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3 h-3" /> Add More Ingredient
              </button>
            </div>

            {/* Instructions Field */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Instructions Steps
              </label>
              {instructions.map((step, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    required
                    value={step}
                    onChange={(e) =>
                      changeInstructionValue(index, e.target.value)
                    }
                    className="flex-1 px-4 py-2 border border-slate-200 dark:border-zinc-700 bg-transparent rounded-xl outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                    placeholder="Step"
                  />
                  {instructions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeInstructionField(index)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addInstructionField}
                className="text-xs font-semibold text-blue-500 flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3 h-3" /> Add More Step
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || imageUploading}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition disabled:opacity-50 shadow-md"
            >
              {loading ? "Updating..." : "Update Recipe"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
