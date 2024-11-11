"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { storage } from "../lib/appwrite";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const BlogPost = (props) => {
  const [imgurl, setImgurl] = useState("");
  const router = useRouter();

  const d=new Date(props.date);
  
  useEffect(() => {
    async function getImgUrl(fileID) {
      const result = storage.getFileView(
        process.env.NEXT_PUBLIC_BUCKET_ID,
        props.imageID
      );
      setImgurl(result.href);
    }
    getImgUrl();
  }, []);

  return (
    <div className="flex justify-start items-center gap-6 max-w-5xl mt-5 mx-auto max-lg:flex-col border border-neutral-600 p-4 rounded-xl">
      <img
          src={imgurl}
          className="w-96 h-60 max-sm:h-52 object-cover rounded-xl"
        />
      <div className="self-start flex-col max-sm:text-xs space-y-2 tracking-wide leading-5">
        <h2 className="text-2xl font-bold max-sm:text-lg">{props.title}</h2>
        <span className="text-xs">{props.author}&nbsp;</span>
        <span className="text-xs">{format(props.date,"dd-MM-yyyy")}</span>
        <p>{props.content.slice(0, 200) + "..."}</p>
        <p
          onClick={() => router.push(`/post/${props.id}`)}
          className="pointer text-sm"
        >
          Read More
        </p>
      </div>
    </div>
  );
};
export default BlogPost;
