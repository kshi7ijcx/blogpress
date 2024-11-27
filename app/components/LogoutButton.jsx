"use client";
import { useState } from "react";
import useAuthContext from "../lib/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";

const LogoutButton = () => {
  const { logout, current } = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logoutUser = async () => {
    setLoading(true);
    await logout();
    router.push("/login");
    setLoading(false);
  };

  return (
    <>
      {current && (
        <div className="flex items-center space-x-3 max-sm:space-x-1">
          <button onClick={()=>router.push("/create-post")}><PlusCircle/></button>
          <p className="font-semibold text-lg max-sm:text-sm">{current.name}</p>
          <button className="btn max-sm:text-sm" onClick={logoutUser}>
            {loading ? "..." : "Logout"}
          </button>
        </div>
      )}
    </>
  );
};
export default LogoutButton;
