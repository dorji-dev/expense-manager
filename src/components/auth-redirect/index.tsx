"use client";
import React, { useEffect } from "react";
import { AuthContextProps, useAuth } from "../providers/auth-provider";
import { usePathname, useRouter } from "next/navigation";

const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

const AuthRedirect = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const { user, isLoading } = useAuth() as AuthContextProps;
  const pathName = usePathname();
  useEffect(() => {
    if (
      !isLoading &&
      !user.$id &&
      !publicRoutes.includes(pathName) &&
      pathName !== "/"
    ) {
      router.push("/login");
    } else if (
      !isLoading &&
      user.$id &&
      publicRoutes.includes(pathName) &&
      pathName !== "/"
    ) {
      router.push("/");
    }
  }, [user, isLoading]);

  if (
    (isLoading && pathName !== "/") ||
    (!user.$id && !publicRoutes.includes(pathName) && pathName !== "/") ||
    (user.$id && publicRoutes.includes(pathName) && pathName !== "/")
  )
    return (
      <div className='flex items-center justify-center h-screen'>
        loading...
      </div>
    );

  return children;
};

export default AuthRedirect;
