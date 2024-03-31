"use client";
import Image from "next/image";
import { useState } from "react";
import { storage } from "../lib/appwrite";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const promise = storage.createFile(
    "[BUCKET_ID]",
    ID.unique(),
    document.getElementById("uploader").files[0]
  );

  return (
    <form className="flex flex-col mt-12 px-32 pb-20 space-y-5">
      <div className="flex gap-x-4 self-center">
        <div className="w-[500px] h-[400px] bg-slate-400/30 flex justify-center items-center">
          {file ? (
            <Image src={file} alt="uploaded-file" width={500} height={400} />
          ) : (
            <p>Image</p>
          )}
        </div>
        <input
          className="file:btn file:text-white self-center"
          type="file"
          accept="image/*"
          id="uploader"
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
};
export default CreatePost;
