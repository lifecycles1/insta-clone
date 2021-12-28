import Image from "next/image";

function Story({ img, username }) {
  return (
    <div className="">
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer
        hover:scale-110 transition-all ease-out"
        src={img}
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}

export default Story;
