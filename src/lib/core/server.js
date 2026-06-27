import { revalidatePath } from "next/cache";
import { getTokenServer } from "../session/session";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const serverMution = async (path, data, method) => {
  const token = await getTokenServer();
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const serverProtectedFetch = async (path) => {
  const token = await getTokenServer();
  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

export const removeServer = async (path, method) => {
  const token = await getTokenServer();
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const deleteRes = await res.json();
  if (deleteRes.message === "recipe delete successfully") {
    revalidatePath("/dashboard/user/my-recipes");
  }
  if (deleteRes.message === "favourite recipe delete successfully") {
    revalidatePath("/dashboard/user/favorites");
  }
  return deleteRes;
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  const data = await res.json();
  return data || [];
};

export const revaliDateFetched = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  const data = await res.json();
  return data || [];
};

export const getAllRecipe = async (category = "", page = 1, limit = 10) => {
  try {
    let url = `${baseUrl}/api/allrecipes?page=${page}&limit=${limit}`;
    if (category) {
      url += `&category=${category}`;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Connection Error:", error);
    return { status: false, message: "Failed to connect to server" };
  }
};
