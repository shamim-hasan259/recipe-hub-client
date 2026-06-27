"use client";

import { deleteRecipe } from "@/lib/actions/recipe";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const DeleteRecipe = ({ id }) => {
  const handleDeleRecipe = async () => {
    const res = await deleteRecipe(id);
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };
  return (
    <button
      onClick={handleDeleRecipe}
      className="inline-flex items-center justify-center p-2 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 font-medium text-xs transition gap-1"
    >
      <Trash2 className="w-3.5 h-3.5" /> Delete
    </button>
  );
};

export default DeleteRecipe;
