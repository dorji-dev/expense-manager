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
    setIsloading(true);
    try {
      await account.createEmailPasswordSession(email, password);
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setIsloading(false);
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
    setIsloading(true);
    try {
      await account.create(ID.unique(), email, password, username);
      await account.createEmailPasswordSession(email, password);
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }

    setIsloading(false);
  };

  // const forgotPassword = async () => {
  //   try {
  //     account.createRecovery("email@example.com", "https://example.com");
  //   } catch (error) {
  //     console.error("ERROR", error);
  //   }
  // };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      console.log(accountDetails);
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
  };

  console.log({ contextData });

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
