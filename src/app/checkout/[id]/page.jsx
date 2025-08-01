'use client'


import { getServiceDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default  function Checkout({params}) {


      const {data}=useSession()

 

      const [service,setService]=useState({})


      const loadService=async()=>{
         const details =await getServiceDetails(params.id)
         setService(details.service)

      }


      


      const {_id, title, description, img, price, facility} = service || {} ;

      console.log(price)

      const handleBooking=async(event)=>{

        event.preventDefault();

      }


      useEffect(()=>{
        loadService()
      },[params])


  return (
     <div className='mx-40'>
              <div className="relative  h-72">
                <Image
                  className="absolute h-72 w-full left-0 top-0 object-cover"
                  src={img}
                  alt="service"
                  width={1920}
                  height={1080}
                  style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                  <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                     checkout of {title}
                  </h1>
                </div>
              </div>

              <div className=' my-12 bg-slate-300 p-12'>
                <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input defaultValue={data?.user?.name}  type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input  defaultValue={new Date().getDate()} type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input

                defaultValue={data?.user?.email} 
             
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input

              defaultValue={price || ""}
              readOnly
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
              required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
                
              </div>
    

            </div>
  )
}
