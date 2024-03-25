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
  const { user, isloading } = useAuth() as AuthContextProps;
  const pathName = usePathname();
  useEffect(() => {
    if (
      !isloading &&
      !user &&
      !publicRoutes.includes(pathName) &&
      pathName !== "/"
    ) {
      router.push("/login");
    } else if (
      !isloading &&
      user &&
      publicRoutes.includes(pathName) &&
      pathName !== "/"
    ) {
      router.push("/");
    }
  }, [user, isloading]);

  if (
    (isloading && pathName !== "/") ||
    (!user && !publicRoutes.includes(pathName) && pathName !== "/") ||
    (user && publicRoutes.includes(pathName) && pathName !== "/")
  )
    return (
      <div className='flex justify-center h-screen items-center'>
        loading...
      </div>
    );

  return children;
};

export default AuthRedirect;
