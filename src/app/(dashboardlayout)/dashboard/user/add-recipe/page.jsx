import React from "react";
import AddRecipeForm from "./AddRecipeForm";
import { getUserSession } from "@/lib/session/session";
import { findRecipe } from "@/lib/api/recipe";
import { Crown } from "lucide-react";
import Link from "next/link";
const AddRecipePage = async () => {
  const user = await getUserSession();
  console.log(user);
  const { data: recipes } = await findRecipe(user?.id);

  const canAddRecipe = user?.plan === "premium" || recipes.length < user?.limit;
  return (
    <section className="min-h-screen">
      {canAddRecipe ? (
        <AddRecipeForm user={user} />
      ) : (
        <div className="border border-amber-200 bg-linear-to-br from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-900 dark:border-amber-500/20 p-8 rounded-2xl text-center max-w-xl mx-auto mt-12 shadow-xl">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600 mt-10">
            <Crown className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Recipe Limit Reached!
          </h2>

          <p className="text-slate-600 dark:text-zinc-400 mb-6">
            You have added the maximum of 2 free recipes. Please purchase a
            premium membership to unlock unlimited recipe additions.
          </p>

          <Link
            href="/dashboard/user/profile"
            className="w-full py-3 px-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition shadow-md"
          >
            Become a Premium Member
          </Link>
        </div>
      )}
    </section>
  );
};

export default AddRecipePage;
