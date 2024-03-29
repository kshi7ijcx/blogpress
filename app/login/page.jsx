"use client";
import { useState } from "react";
import useAuthContext from "../lib/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useAuthContext();
  const router = useRouter();

  const loginUser = (e) => {
    e.preventDefault();
    user.login(email, password);
    router.push("/");
  };

  const registerUser = (e) => {
    e.preventDefault();
    user.register(email, password);
    router.push("/");
  };

  return (
    <form className="w-full flex pt-16 justify-center">
      <div className="flex flex-col max-w-xl p-4 space-y-6 items-center">
        <h1 className="font-bold text-2xl">Welcome</h1>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="text-white bg-transparent border border-gray-600 rounded-lg px-2 py-1"
        />
        <input
          placeholder="password"
          type="password"
          className="text-white bg-transparent border border-gray-600 rounded-lg px-2 py-1"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="flex flex-col space-y-3 items-center">
          <button className="btn" onClick={loginUser}>
            Login
          </button>
          <button className="btn" onClick={registerUser}>
            Signup
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
