"use client";
import Image from "next/image";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  return (
    <form className="flex flex-col mt-12 px-32 space-y-5">
        {file ? (<div className="w-500 h-500"></div>) : (<Image src={URL.createObjectURL(file)} alt="selected-image" />) }
      
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
      <input className="" type="file" accept="image/*" />
    </form>
  );
};
export default CreatePost;
