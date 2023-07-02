import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function createContext() {
  const session = await getServerSession(authOptions);

  if (!session || typeof session === "undefined") return {};

  const { user } = session;

  return {
    user,
  };
}
