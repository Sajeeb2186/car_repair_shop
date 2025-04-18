import Image from 'next/image'
import Link from 'next/link'
//import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-base-100 text-slate-900 '>
           <div className="navbar con  shadow-sm    container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link href={'/'}>
     <Image alt='logo' src="/assets/logo.svg" height={60} width={100}/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
      <li><a>Item 3</a></li>
      <li><a>Item 3</a></li>
      <li><a>Item 3</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
 
  )
}
