import React from "react";
import Image from "next/image";
import {signIn} from "next-auth/react"


function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="/fb_logo.png"
        width={200}
        height={200}
        objectFit="contain"
        alt="logo"
      />

      <h1 onClick={signIn} className="m-5 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">
        Login with facebook
      </h1>
    </div>
  );
}

export default Login;
