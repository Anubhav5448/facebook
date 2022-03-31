import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { doc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();
    if(!inputRef.current.value) return;

    let postsCollRef = collection(db, 'posts');
    doc(postsCollRef, {
      message:inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp:serverTimestamp()
    })
    inputRef.current.value="";
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-2 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed" alt="image"
        />

        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text " ref={inputRef}
            placeholder={`What's in your mind, ${session.user.name}?`}
          />

          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        </div>

        <div className=" flex justify-evenly p-3 border-t">
          <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video </p>
          </div>

          <div className="inputIcon">
            <CameraIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          </div>

          <div className="inputIcon">
            <EmojiHappyIcon className="h-7 text-yellow-300" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
       
      </div>
    </div>
  );
}

export default InputBox;
