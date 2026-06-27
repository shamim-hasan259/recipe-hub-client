import { cheackRole } from "@/lib/session/session";
import React from "react";

const UserDashBoardLayout = async ({ children }) => {
  await cheackRole("user");
  return <div>{children}</div>;
};

export default UserDashBoardLayout;
