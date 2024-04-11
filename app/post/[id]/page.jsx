"use client";
import { storage, databases } from "@/app/lib/appwrite";
import { useEffect, useState } from "react";

const PostPage = ({ params }) => {
  const [post, setPost] = useState(null);
  const [imgurl, setImgurl] = useState("");

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

  return (
    post ? (
      <div className="px-20 pt-6 w-full max-md:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-y-3 px-14 py-5 border border-neutral-600 rounded-2xl max-md:px-6">
          <header className="self-center">
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
    ) : (<p>Loading...</p>)
  );
};
export default PostPage;
