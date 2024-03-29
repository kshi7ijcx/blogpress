"use client";
import useAuthContext from "../lib/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const user = useAuthContext();
  const router = useRouter();

  const logoutUser = () => {
    user.logout();
    router.push("/login");
  }

  return (
    <div className="flex items-center space-x-3">
      <p className="font-semibold text-lg">{user.current && user.current.email.split('@')[0]}</p>
      <button className="btn" onClick={logoutUser}>Logout</button>
    </div>
  );
};
export default LogoutButton;
