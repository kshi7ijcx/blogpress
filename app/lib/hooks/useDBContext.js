'use client'

import { DBContext } from "../database/DatabaseContextProvider";
import { useContext } from "react";

const useDBContext = () => {
  const context = useContext(DBContext);
  return context;
};
export default useDBContext;
