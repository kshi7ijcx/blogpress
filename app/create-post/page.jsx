"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { storage } from "../lib/appwrite";
import { ID } from "appwrite";
import useDBContext from "../lib/hooks/useDBContext";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const [fileView,setFileView] = useState(null);
  const posts = useDBContext();

  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const val = JSON.parse(localStorage.getItem("user"));
      if (val) {
        setUser(val);
      } else {
        router.push("/");
      }
    };
    checkAuth();
  }, []);

  const uploadFile = async (e) => {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_BUCKET_ID,
      ID.unique(),
      document.getElementById("uploader").files[0]
    );
    console.log(response);
    if(response){
      const result = storage.getFileView(process.env.NEXT_PUBLIC_BUCKET_ID, response.$id);
      setFileView(result);
      console.log(result);
    }
  };

  if (user) {
    return (
      <form className="flex flex-col mt-12 px-32 pb-20 space-y-5">
        <div className="flex gap-x-4 self-center">
          <div className="w-[500px] h-[400px] bg-slate-400/30 flex justify-center items-center">
            {fileView ? (
              <Image src={fileView.href} alt="uploaded-file" width={500} height={400} />
            ) : (
              <p>Image</p>
            )}
          </div>
          <input
            className="file:btn file:text-white self-center"
            type="file"
            accept="image/*"
            id="uploader"
            onChange={uploadFile}
          />
        </div>
        <textarea
          className="input font-bold text-lg"
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Title"
        ></textarea>
        <textarea
          className="input"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Content"
        ></textarea>
        <button className="btn self-end">Create</button>
      </form>
    );
  }
};
export default CreatePost;
