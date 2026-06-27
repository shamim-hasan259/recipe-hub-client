import { getFavouriteRecipe } from "@/lib/api/favourite";
import Link from "next/link";
import { Star } from "lucide-react";
import FavouriteCard from "@/components/FavouriteCard";
import { getUserSession } from "@/lib/session/session";
const FavouritesPage = async () => {
  const user = await getUserSession();
  const { data: recipes } = await getFavouriteRecipe(user?.id);
  return (
    <section className="bg-gray-50 dark:bg-slate-900 min-h-screen text-black dark:text-white transition-colors duration-300 pb-12">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-gray-200 dark:border-slate-800 pb-5 gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight flex items-center gap-2">
              <Star className="w-7 h-7 text-amber-500 fill-current" />
              My Favourite Recipes
            </h1>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
              You have saved {recipes?.length || 0} items to your collection
            </p>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 hover:underline"
          >
            Browse More Recipes →
          </Link>
        </div>
        {!recipes || recipes.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-gray-200 dark:border-slate-700 shadow-sm">
            <p className="text-gray-500 dark:text-slate-400 text-lg font-medium">
              Your favorite list is empty!
            </p>
            <Link
              href="/"
              className="mt-4 inline-block px-5 py-2.5 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm rounded-xl shadow-md"
            >
              Explore Recipes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <FavouriteCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default FavouritesPage;
