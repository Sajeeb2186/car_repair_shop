import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div> 

      <div className='grid grid-cols-2 gap-12'>

        <div>
          <Image src="/assets/images/login/login.svg" height="540" width="540"  alt='login image'/>
        </div>

        <div>
          form
        </div>
        
      </div>
      
      
    </div>
  )
}
