"use client";

import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import useDBContext from "./lib/hooks/useDBContext";
import { useRouter } from "next/navigation";
const text =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const Home = () => {
  const posts = useDBContext();
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setIsAuth(user);
      } else {
        router.push("/login");
      }
    };
    checkAuth();
  }, []);

  if (isAuth) {
    return (
      <main className="w-full px-20">
        <div className="flex-col max-w-5xl mx-auto">
          <BlogPost title="Saving nature" content={text} />
          <BlogPost title="Saving nature" content={text} />
          <BlogPost title="Saving nature" content={text} />
          <BlogPost title="Saving nature" content={text} />
        </div>
      </main>
    );
  }
};
export default Home;
