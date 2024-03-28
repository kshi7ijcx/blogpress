import Image from "next/image";

const text =
  `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
ilove
  - mango 
  - apple 
  - banana`;

const PostPage = ({ params }) => {
  return (
    <div className="px-20 pt-6 w-full max-md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-y-3 px-14 py-5 border border-neutral-600 rounded-2xl max-md:px-6">
        <header className="self-center">
          <h1 className="text-3xl font-bold text-center max-md:text-lg">Saving Nature</h1>
          <p className="text-sm max-md:text-xs text-neutral-400 pt-1 text-center">Kshitij Chauhan 12/03/2024</p>
        </header>
        <Image
          src="/coolimg.jpg"
          alt="cool pic"
          width={650}
          height={650}
          className="rounded-2xl object-contain"
        />
        <main>
          <p className='whitespace-pre-wrap pt-4 leading-7 max-md:leading-5 text-lg max-md:text-xs'>{text}</p>
        </main>
      </div>
    </div>
  );
};
export default PostPage;
