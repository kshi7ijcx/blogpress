'use client'

import { useContext } from "react";
import { AuthContext } from "../auth/AuthContextProvider";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
export default useAuthContext;
