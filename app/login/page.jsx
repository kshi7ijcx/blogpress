"use client";
import { useState } from "react";
import Button from "../components/Button";
import useAuthContext from "../lib/hooks/useAuthContext";
import router from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useAuthContext();
  const submit = (e) => {
    e.preventDefault();
    user.register(email, password);
    router.push("/");
  };

  return (
    <form className="w-full flex justify-center" onSubmit={submit}>
      <div className="flex flex-col max-w-xl p-4 space-y-2 items-center">
        <h1 className="font-bold text-xl">Login</h1>
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
        <Button value="Submit" />
      </div>
    </form>
  );
};
export default Login;
