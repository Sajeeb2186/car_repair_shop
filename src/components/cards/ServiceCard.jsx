import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ServiceCard( {service}) {


    

 const {title, img,price,descripttion,_id}= service || {};

 console.log(title,price)

  return (

   


    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>

    <Image src={img} height={120} width={430} alt={title}></Image>
    
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="card-actions justify-between items-center">
        <h6 className='text-primary font-semibold'> price:${price}</h6>
      {
        <Link href={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
      }
    </div>
  </div>
</div>
  )
}
