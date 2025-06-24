"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function page() {

   const handleSignup=async(event)=>{

      event.preventDefault();

      const newUser={


         name: event.target.name.value,
         email: event.target.email.value,
         password: event.target.password.value,
         



      }

      console.log(newUser);

      const resp= await fetch("http://localhost:3000/SignUp/api",{

        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
          "content-type":"application/json",
        }




      })

      if(resp.status===200){

        event.target.reset();

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

          <h6 className="text-3xl font-semibold text-center mb-12">Sign Up</h6>

          <form onSubmit={handleSignup} action="">
             <label htmlFor="name"> Name:</label>
          <input type="text" name="name" placeholder="Your Name" className=" mt-3 input input-bordered w-full " />
          <br /><br />
            <label htmlFor="email"> Email:</label>
          <input type="text" name="email" placeholder="Your Email" className=" mt-3 input input-bordered w-full " />
          <br /> <br />
          <label htmlFor="password"> Password:</label>
          <input type="text" name="password" placeholder="Yours Password" className=" mt-3 input input-bordered w-full " />
          <br /> <br />

          <button type="submit" className=" w-full btn btn-primary mt-12">Sign Up</button>

          </form>

          
          <div>
            <h6 className=" text-center my-4">or sign in with</h6>
            <div className=" flex  items-center justify-center gap-2">
              <button className="btn"> <FcGoogle/></button>
              <button className="btn"> <FaGithub/></button>
            </div>

            <h6 className=" text-center my-4">Already have accout? <Link className="text-primary font-semibold" href={'/SignIn'}>SignIn</Link></h6>

          </div>

          
         
        </div>
      </div>
    </div>
  )
}
