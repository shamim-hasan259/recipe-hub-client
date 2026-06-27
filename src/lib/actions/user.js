"use server";

import { revalidatePath } from "next/cache";
import { serverMution } from "../core/server";

export async function updateUserBlockAndUnBlock(id, data) {
  const res = await serverMution(
    `/api/user/block/unblock/${id}`,
    data,
    "PATCH",
  );

  revalidatePath("/dashboard/admin/manage-users");

  return await res;
}
