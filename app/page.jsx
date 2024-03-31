"use client";

import { useEffect } from "react";
import BlogPost from "./components/BlogPost";
import useAuthContext from "./lib/hooks/useAuthContext";
import useDBContext from "./lib/hooks/useDBContext";
import { useRouter } from "next/navigation";
const text =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const Home = () => {
  const user = useAuthContext();
  const posts = useDBContext();
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const val = await user.current;
      if (val) {
        posts.init();
      } else {
        router.push("/login");
      }
    };
    checkAuth();
  }, []);
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
};
export default Home;
