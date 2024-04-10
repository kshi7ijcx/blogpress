"use client";
import { useEffect, useState } from "react";
import useAuthContext from "../lib/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const {logout, current} = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logoutUser = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <>
      {current && (
        <div className="flex items-center space-x-3 max-sm:space-x-1">
          <p className="font-semibold text-lg max-sm:text-sm">{current.name}</p>
          <button className="btn max-sm:text-sm" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
export default LogoutButton;
