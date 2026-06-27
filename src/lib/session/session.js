import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session?.user || null;
};
export const getTokenServer = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);
  return token || null;
};

export const cheackRole = async (role) => {
  const user = await getUserSession();
  if (!user) {
    redirect("/login");
  }
  if (user?.role !== role) {
    return redirect("/unthorized");
  }
};
