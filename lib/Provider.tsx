"use client";

import { SessionProvider } from "next-auth/react";

interface AuthPrios {
  children: React.ReactNode;
}

const Provider = ({ children }: AuthPrios) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
