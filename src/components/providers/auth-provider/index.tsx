"use client";
import { ID, Models } from "appwrite";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { account } from "@/config/appwrite-config";

export interface AuthContextProps {
  user: any;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  registerUser: (
    email: string,
    password: string,
    username: string
  ) => Promise<void>;
  isloading: boolean;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (
    userId: string,
    secret: string,
    password: string
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isloading, setIsloading] = useState(true);
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
      await account.create(ID.unique(), email, password, username);
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
    setIsloading(false);
  };

  const contextData: AuthContextProps = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    isloading,
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
