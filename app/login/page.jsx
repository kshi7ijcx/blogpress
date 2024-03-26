"use client";
import { useState } from "react";
import Button from "../components/Button";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="w-full flex justify-center">
      <div className="flex-col max-w-md p-4 space-y-2 items-center">
        <h1 className="font-bold text-xl">Login</h1>
        <input
          placeholder="email"
          type="text"
          className="text-white bg-transparent border border-gray-600 rounded-lg px-2 py-1"
        />
        <input
          placeholder="password"
          type="password"
          className="text-white bg-transparent border border-gray-600 rounded-lg px-2 py-1"
        />
        <Button value="Submit" />
      </div>
    </form>
  );
};
export default Login;
