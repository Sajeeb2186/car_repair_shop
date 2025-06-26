
"use client"
import Image from "next/image";
import React from "react";
import {signIn} from "next-auth/react";

import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {

  const router=useRouter();
  const handlaLogin=async(event)=>{

    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;

    const resp= await signIn("credentials",{
      email,
      password,
      redirect:false
    })

     if (resp.status===200){
      router.push('/')
     }

  }



  return (
    <div className="container mx-auto gap-12 py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>

        <div className="border-2 p-12">

          <h6 className="text-3xl font-semibold text-center mb-12">Sign In</h6>

          <form onSubmit={handlaLogin} action="">
            <label htmlFor="email"> Email:</label>
          <input type="text" name="email" placeholder="Your Email" className=" mt-3 input input-bordered w-full " />
          <br /> <br />
          <label htmlFor="password"> Password:</label>
          <input type="text" name="password" placeholder="Yours Password" className=" mt-3 input input-bordered w-full " />
          <br /> <br />

          <button type="submit" className=" w-full btn btn-primary mt-12">Sign In</button>

          </form>

          
          <div>
            <h6 className=" text-center my-4">or sign in with</h6>
            <div className=" flex  items-center justify-center gap-2">
              <button className="btn"> <FcGoogle/></button>
              <button className="btn"> <FaGithub/></button>
            </div>

            <h6 className=" text-center my-4">Don't have accout? <Link className="text-primary font-semibold" href={'/SignUp'}>SignUp</Link></h6>

          </div>

          
         
        </div>
      </div>
    </div>
  );
}
