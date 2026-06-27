import { getSingleRecipeAdmin } from "@/lib/api/admin";
import React from "react";
import AdminEditForm from "./AdminEditForm";

const EditRecipeAdmin = async ({ params }) => {
  const { id } = await params;
  const { data: recipe } = await getSingleRecipeAdmin(id);
  // console.log(recipe);
  return (
    <div>
      <AdminEditForm recipe={recipe} />
    </div>
  );
};

export default EditRecipeAdmin;
