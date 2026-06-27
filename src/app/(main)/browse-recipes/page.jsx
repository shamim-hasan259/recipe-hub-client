import PopularRecipeCard from "@/components/PopularRecipeCard";
import { getAllRecipe } from "@/lib/core/server";
import Link from "next/link";

export default async function BrowseAllRecipePage({ searchParams }) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || "";
  const currentPage = Number(resolvedParams.page) || 1;
  const limit = 6;

  const response = await getAllRecipe(currentCategory, currentPage, limit);
  // console.log(response);
  const recipes = response.status ? response.data : [];
  const totalPages = response.pagination?.totalPages || 1;

  const categories = [
    { name: "All", value: "" },
    { name: "Breakfast", value: "Breakfast" },
    { name: "Lunch", value: "Lunch" },
    { name: "Dinner", value: "Dinner" },
    { name: "Break Fast", value: "Main Course" },
    { name: "Desort", value: "Desort" },
  ];

  // Your Requested Tailwind Class Strings saved as easy variables
  const gradientText =
    "bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent";

  const gradientBtn =
    "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-500 dark:hover:to-blue-500 text-white shadow-md hover:shadow-lg hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/20 transition-all duration-300";

  return (
    <section className="relative border-none outline-none bg-[#f3f4f6] dark:bg-gradient-to-b dark:from-[#0c1017] dark:via-[#0e141f] dark:to-[#0c1017]">
      <div className="max-w-7xl mx-auto p-6 ">
        <div className="text-center mb-8">
          <h1
            className={`text-4xl font-extrabold tracking-tight ${gradientText}`}
          >
            Popular Recipes
          </h1>
          <p className="text-gray-500 dark:text-slate-400 mt-2 text-sm">
            Our most loved and highly-rated dishes
          </p>
        </div>

        {/* --- Pill-Shaped Category Buttons Section --- */}
        <div className="flex flex-wrap gap-2 justify-center items-center py-4 mb-8">
          {categories.map((cat) => {
            const isActive = currentCategory === cat.value;
            const url = cat.value ? `?category=${cat.value}&page=1` : `?page=1`;

            return (
              <Link
                key={cat.name}
                href={url}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200
                ${
                  isActive
                    ? `${gradientBtn} border-transparent` // Active Button uses your exact custom gradient style
                    : "bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* --- Popular Recipes Card Grid --- */}
        {recipes.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-slate-400 py-10 font-medium">
            No popular recipes found here.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recipes.map((recipe) => (
              <PopularRecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}

        {/* --- Pagination Buttons Section --- */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            {/* Previous Link */}
            {currentPage > 1 ? (
              <Link
                href={`?category=${currentCategory}&page=${currentPage - 1}`}
                className={
                  gradientBtn + " px-5 py-2.5 rounded-xl text-sm font-semibold"
                }
              >
                Previous
              </Link>
            ) : (
              <button
                disabled
                className="px-5 py-2.5 bg-gray-200 dark:bg-slate-800 text-gray-400 dark:text-slate-600 rounded-xl text-sm font-semibold cursor-not-allowed"
              >
                Previous
              </button>
            )}

            <span className="text-sm font-bold text-gray-500 dark:text-slate-400">
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
              <Link
                href={`?category=${currentCategory}&page=${currentPage + 1}`}
                className={
                  gradientBtn + " px-5 py-2.5 rounded-xl text-sm font-semibold"
                }
              >
                Next
              </Link>
            ) : (
              <button
                disabled
                className="px-5 py-2.5 bg-gray-200 dark:bg-slate-800 text-gray-400 dark:text-slate-600 rounded-xl text-sm font-semibold cursor-not-allowed"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
