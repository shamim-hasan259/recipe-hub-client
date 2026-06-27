import { fetchFeatureRecipe } from "@/lib/api/recipe";
import React from "react";
import PopularRecipeCard from "./PopularRecipeCard";

const FeatureRecipe = async () => {
  const { data: recipes = [] } = (await fetchFeatureRecipe()) || {};
  return (
    <section className="relative border-none outline-none bg-[#f3f4f6] dark:bg-gradient-to-b dark:from-[#0c1017] dark:via-[#0e141f] dark:to-[#0c1017] py-16 px-6 md:px-12 transition-colors duration-300 overflow-hidden min-h-[500px]">
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-rose-500/[0.02] dark:bg-rose-500/[0.02] rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.02] dark:bg-cyan-500/[0.02] rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto space-y-10 z-10">
        <div className="text-center md:text-left space-y-2 max-w-xl">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Handpicks
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Our specially curated, chef-recommended recipes that you absolutely
            cannot miss out on.
          </p>
        </div>
        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center w-full">
            {recipes.map((recipe) => (
              <PopularRecipeCard
                key={recipe._id || recipe.recipeName}
                recipe={recipe}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 w-full">
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              No featured recipes available right now.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default FeatureRecipe;
