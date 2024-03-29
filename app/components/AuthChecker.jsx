"use client";
import useAuthContext from "../lib/hooks/useAuthContext";

const AuthChecker = () => {
  const user = useAuthContext();
  if(!user.current){
    return <div></div>;  
  }
};
export default AuthChecker;
