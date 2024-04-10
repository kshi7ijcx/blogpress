"use client";

import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import useDBContext from "./lib/hooks/useDBContext";
import { useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
const text =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const Home = () => {
  const postss = useDBContext();
  const router = useRouter();
  const [posts,setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [error,setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const val = JSON.parse(localStorage.getItem("user"));
      if (val) {
        setUser(val);
      } else {
        router.push("/login");
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    async function getPosts() {
      try {
        setError(false);
        setLoading(true);
        const allPosts = await postss.init();
        setPosts(allPosts);
        console.log(allPosts);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }
    getPosts();
  }, []);

  if (user) {
    return (
      <main className="w-full px-20">
        {posts.map((post)=>(<BlogPost key={post.$id} title={post.PostTitle} content={post.PostContent} image={post.ImageID}/>))}
        {/* <div className="flex-col max-w-5xl mx-auto">
          <BlogPost title="Saving nature" content={text} />
          <BlogPost title="Saving nature" content={text} />
          <BlogPost title="Saving nature" content={text} />
          <BlogPost title="Saving nature" content={text} />
        </div> */}
      </main>
    );
  }
};
export default Home;
