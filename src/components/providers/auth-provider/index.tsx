"use client";
import { ID, Models } from "appwrite";
import { createContext, useState, useEffect, useContext } from "react";
import { account } from "@/config/appwrite-config";
import { createProfile } from "../database/profile";

export interface AuthContextProps {
  user: {
    $id: string;
    email: string;
  };
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  registerUser: (
    email: string,
    password: string,
    username: string
  ) => Promise<void>;
  isLoading: boolean;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (
    userId: string,
    secret: string,
    password: string
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (email: string, password: string) => {
    try {
      await account.createEmailSession(email, password);
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error: any) {
      return Promise.reject(error);
    }
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      const user = await account.create(ID.unique(), email, password);
      await createProfile(
        { name: username, email, profileImageId: "" },
        user.$id
      );
      await account.createEmailSession(email, password);
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error: any) {
      return Promise.reject(error);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await account.createRecovery(
        email,
        "http://localhost:3000/reset-password"
      );
    } catch (error: any) {
      return Promise.reject(error);
    }
  };

  const resetPassword = async (
    userId: string,
    secret: string,
    password: string
  ) => {
    try {
      await account.updateRecovery(userId, secret, password, password);
    } catch (error: any) {
      return Promise.reject(error);
    }
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error("ERROR", error);
    }
    setIsLoading(false);
  };

  const contextData: AuthContextProps = {
    user: { $id: user?.$id as string, email: user?.email as string },
    loginUser,
    logoutUser,
    registerUser,
    isLoading,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
