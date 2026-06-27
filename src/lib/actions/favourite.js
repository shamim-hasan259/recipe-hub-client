"use server";
import { serverMution, removeServer } from "../core/server";
export const addFavourite = async (data) => {
  return await serverMution("/api/add/fovourite", data, "POST");
};

export const deleteFovurite = async (id) => {
  return await removeServer(`/api/deletefavourite/${id}`, "DELETE");
};
