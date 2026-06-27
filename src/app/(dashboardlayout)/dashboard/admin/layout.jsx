import { cheackRole } from "@/lib/session/session";
import React from "react";

const Adminalayout = async ({ children }) => {
  await cheackRole("admin");
  return <div>{children}</div>;
};

export default Adminalayout;
