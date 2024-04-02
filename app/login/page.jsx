"use client";
import { useEffect, useState } from "react";
import useAuthContext from "../lib/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false);
  const user = useAuthContext();
  const router = useRouter();
  
  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      setError(false);
      await user.login(email, password);
      router.push("/");
      setLoading(false);
    }catch(e){
      setLoading(false);
      setError(true);
    }
  };

  return (
    <form className="w-full flex pt-16 justify-center">
      <div className="flex flex-col max-w-xl p-4 space-y-6 items-center">
        <h1 className="font-bold text-2xl">Login</h1>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="input"
        />
        <input
          placeholder="password"
          type="password"
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="flex flex-col space-y-3 items-center">
          <button className="btn" onClick={loginUser}>
            {loading ? "..." : "Submit"}
          </button>
          <p>
            Need an Account?{" "}
            <Link href="/signup" className="hover:underline">
              SignUp
            </Link>
          </p>
          {error && (<div>Invalid Credentials</div>)}
        </div>
      </div>
    </form>
  );
};
export default Login;
