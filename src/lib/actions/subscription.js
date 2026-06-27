"use server";

import { serverMution } from "../core/server";

export const addSubscription = async (data) => {
  return await serverMution("/api/subscriptions", data, "POST");
};
