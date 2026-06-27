"use server";

import { serverMution } from "../core/server";
export const createPayment = async (data) => {
  return await serverMution("/api/payments", data, "POST");
};
