import Image from "next/image";
const BlogPost = (props) => {
  return <div className="flex justify-center items-center gap-6 mt-5 max-lg:flex-col border border-neutral-600 p-4 rounded-xl">
    <Image src="/coolimg.jpg" alt="lizard" width={450} height={450} className='flex-shrink rounded-xl'/>
    <div className="self-start flex-col max-sm:text-sm space-y-3 tracking-wide leading-5">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <span>Kshitij Chauhan&nbsp;</span><span>24/02/2024</span><span></span>
        <p>{props.content}</p>
        <p>Read More...</p>
    </div>
  </div>;
};
export default BlogPost;
