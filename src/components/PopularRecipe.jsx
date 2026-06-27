import { fetchePopularRecipe } from "@/lib/api/recipe";
import PopularRecipeCard from "./PopularRecipeCard";

const PopularRecipe = async () => {
  const { data: recipes = [] } = (await fetchePopularRecipe()) || {};

  return (
    <section className="relative border-none outline-none bg-[#f3f4f6] dark:bg-gradient-to-b dark:from-[#0c1017] dark:via-[#0e141f] dark:to-[#0c1017] py-16 px-6 md:px-12 transition-colors duration-300 min-h-screen overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto space-y-10 z-10">
        <div className="text-center md:text-left space-y-2 max-w-xl">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl">
            Popular{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Recipes
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Check out our most-liked and trending recipes crafted by experts
            just for you.
          </p>
        </div>

        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
            {recipes.map((recipe) => (
              <PopularRecipeCard
                key={recipe._id || recipe.recipeName}
                recipe={recipe}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              No popular recipes found at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularRecipe;
