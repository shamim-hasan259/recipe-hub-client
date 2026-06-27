import RecipeTable from "@/components/RecipeTable";
import { allrecipeFetchedAdmin } from "@/lib/api/admin";
import React from "react";

const AdminManageRecipesPage = async () => {
  const { data: recipes } = await allrecipeFetchedAdmin();
  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2 tracking-tight">
          Manage{" "}
          <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Recipes
          </span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">
          Delete recipes or toggle featured status
        </p>
      </div>

      <RecipeTable recipes={recipes} />
    </div>
  );
};

export default AdminManageRecipesPage;
