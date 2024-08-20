"use client";
import { useEffect, useState, createContext } from "react";
import { account } from "@/app/lib/appwrite.js";
import { ID } from "appwrite";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
    const loggedIn = await account.get();
    setUser(loggedIn);
    return loggedIn;
  }

  return (
    <AuthContext.Provider
      value={{ current: user, setUser, login, logout, register, init }}
    >
      {children}
    </AuthContext.Provider>
  );
};
