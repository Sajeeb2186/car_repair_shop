import Image from 'next/image'
import Link from 'next/link'
import { HiShoppingCart } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
//import React from 'react'

export default function Navbar() {

  const navItems=[

    {
      title:"Home",
      path:"/"
    },
    {
      title:"About",
      path:"/about"
    },
    {
      title:"Services",
      path:"/services"
    },
    {
      title:"Blog",
      path:"/blog"
    },
    {
      title:"Contact",
      path:"/contact"
    },




  ]

 


  return (
    <div className='bg-base-100 text-slate-900   '>
           <div className="navbar  shadow-sm  container mx-auto  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

      
     
    </div>
    <Link href={'/'}>
     <Image alt='logo' src="/assets/logo.svg" height={60} width={100}/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className='flex items-center space-x-6'>
      {
      
      navItems.map((item)=>(


      <Link className='font-semibold hover:text-orange-400 duration:300' href={item.path}  key={item.path}>{item.title}</Link>


      ))
      
      }
    </div>
  </div>
  <div className="navbar-end">

    <div className='flex space-x-3 items-center '>
      <HiShoppingCart className='text-xl'/>
      <IoSearchSharp  className='text-xl'/>
      <a className="btn btn-outline btn-primary px-8">Appointment</a>

    </div>

    
  </div>
</div>
    </div>
 
  )
}
