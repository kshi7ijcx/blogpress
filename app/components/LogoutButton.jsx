"use client";
import { useEffect, useState } from "react";
import useAuthContext from "../lib/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [user, setUser] = useState(null);
  const {logout} = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const val = JSON.parse(localStorage.getItem("user"));
      if (val) {
        setUser(val);
      }
    };
    checkAuth();
  }, []);

  const logoutUser = async () => {
    await logout();
    router.push("/login");
    setUser(null);
  };

  return (
    <>
      {user && (
        <div className="flex items-center space-x-3 max-sm:space-x-1">
          <p className="font-semibold text-lg max-sm:text-sm">{user.name}</p>
          <button className="btn max-sm:text-sm" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
export default LogoutButton;
