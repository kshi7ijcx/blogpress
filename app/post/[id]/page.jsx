"use client";
import { storage, databases } from "@/app/lib/appwrite";
import useAuthContext from "@/app/lib/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PostPage = ({ params }) => {
  const {current,userLoading}=useAuthContext()
  const [post, setPost] = useState(null);
  const [imgurl, setImgurl] = useState(null);
  const router = useRouter();

  useEffect(()=>{
    if(!userLoading && !current){
      router.push('/login')
    }
  },[userLoading,current,router])

  useEffect(() => {
    const fetchPostImgUrl = async () => {
      const response = await databases.getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        params.id
      );
      setPost(response);
      const result = storage.getFileView(
        process.env.NEXT_PUBLIC_BUCKET_ID,
        response.ImageID
      );
      setImgurl(result.href);
    };
    fetchPostImgUrl();
  }, []);

  return imgurl ? (
    <div className="px-20 mb-8 pt-6 w-full max-md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-y-3 px-14 py-5 border border-neutral-600 rounded-2xl max-md:px-6">
        <header className="self-center relative">
          {current?.$id===post.UserID && <button className="btn absolute -right-16 top-1 max-sm:text-sm">Edit</button>}
          <h1 className="text-3xl font-bold text-center max-md:text-lg">
            {post.PostTitle}
          </h1>
          <p className="text-sm max-md:text-xs text-neutral-400 pt-1 text-center">
            Kshitij Chauhan 12/03/2024
          </p>
        </header>
        <img
          src={imgurl}
          alt="cool pic"
          width={650}
          height={650}
          className="rounded-2xl object-contain"
        />
        <main>
          <p className="whitespace-pre-wrap pt-4 leading-7 max-md:leading-5 text-lg max-md:text-xs">
            {post.PostContent}
          </p>
        </main>
      </div>
    </div>
  ) : (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <svg
        className="w-10 h-10 text-gray-300 animate-spin"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path
          d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-900"
        ></path>
      </svg>
    </div>
  );
};
export default PostPage;
