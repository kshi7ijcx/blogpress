"use client";
import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import useDBContext from "./lib/hooks/useDBContext";
import { useRouter } from "next/navigation";
import useAuthContext from "./lib/hooks/useAuthContext";
import { Loader2 } from "lucide-react";
const text =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const Home = () => {
  const { init } = useAuthContext();
  const [user, setUser] = useState(null);
  const postss = useDBContext();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const val = await init();
      if (val) {
        try {
          setError(false);
          setLoading(true);
          setUser(val);
          const allPosts = await postss.init();
          setPosts(allPosts);
          console.log(allPosts);
          setLoading(false);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      }else{
        router.push('/login')
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {user &&
        (loading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <Loader2 className="animate-spin w-20 h-20" />
          </div>
        ) : (
          <main className="w-full px-20 max-md:px-10 mb-5">
            {posts.map((post) => (
              <BlogPost
                key={post.$id}
                id={post.$id}
                title={post.PostTitle}
                content={post.PostContent}
                imageID={post.ImageID}
                author={post.author}
                date={post.$updatedAt}
              />
            ))}
          </main>
        ))}
    </>
  );
};

export default Home;
