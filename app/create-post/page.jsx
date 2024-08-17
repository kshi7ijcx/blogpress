"use client";
import { useEffect, useState } from "react";
import { storage } from "../lib/appwrite";
import { ID } from "appwrite";
import useDBContext from "../lib/hooks/useDBContext";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [fileView, setFileView] = useState(null);
  const posts = useDBContext();

  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const val = JSON.parse(localStorage.getItem("user"));
      if (val) {
        setUser(val);
        console.log(val)
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
    setFileData(response);
    if (response) {
      const result = storage.getFileView(
        process.env.NEXT_PUBLIC_BUCKET_ID,
        response.$id
      );
      setFileView(result);
    }
  };

  const uploadToDB = async (e) => {
    e.preventDefault();
    const obj = {
      UserID: user.$id,
      PostTitle: title,
      PostContent: content,
      ImageID: fileData.$id,
      author: user.name
    };
    await posts.add(obj);
    router.push("/");
  };

  if (user) {
    return (
      <form className="flex flex-col m-12 px-32 max-md:px-10 pb-20 space-y-5">
        <div className="flex flex-col gap-y-4 self-center">
          <div className="w-[500px] h-[400px] bg-slate-400/30 flex justify-center items-center">
            {fileView ? (
              <img src={fileView.href} alt="uploaded-file" />
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <textarea
          className="input"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="btn self-end" onClick={uploadToDB}>
          Publish
        </button>
      </form>
    );
  }
};
export default CreatePost;
