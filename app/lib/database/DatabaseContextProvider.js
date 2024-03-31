"use client";

import { createContext, useState,useEffect } from "react";
import { databases } from "../appwrite";
import { ID, Query } from "appwrite";

export const POSTS_DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
export const POSTS_COLLECTION_ID = process.env.NEXT_PUBLIC_COLLECTION_ID;

export const DBContext = createContext();

export const DatabaseContextProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);

  async function add(post) {
    const response = await databases.createDocument(
      POSTS_DATABASE_ID,
      POSTS_COLLECTION_ID,
      ID.unique(),
      post
    );
    setAllPosts((allPosts) => [response.$id, ...allPosts].slice(0, 10));
  }

  async function remove(id) {
    await databases.deleteDocument(POSTS_DATABASE_ID, POSTS_COLLECTION_ID, id);
    setAllPosts((allPosts) => allPosts.filter((post) => post.$id !== id));
    await init();
  }

  async function init() {
    const response = await databases.listDocuments(
      POSTS_DATABASE_ID,
      POSTS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    setAllPosts(response.documents);
  }

  return <DBContext.Provider value={{ current: allPosts, add, remove, init}}>{children}</DBContext.Provider>;
};
