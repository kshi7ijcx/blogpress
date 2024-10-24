"use client";
import { useEffect, useState, createContext } from "react";
import { account } from "@/app/lib/appwrite.js";
import { ID } from "appwrite";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function login(email, password) {
    await account.createEmailSession(email, password);
    const loggedIn = await account.get();
    setUser(loggedIn);
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        current: user,
        setUser,
        userLoading: loading,
        login,
        logout,
        register,
        init,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
