import React from 'react'
import Image from 'next/image'
import '@/app/globals.css'

function Footer() {
  return (
    <div className='py-4 px-16 h-[83px] w-full bg-background flex-column justify-between items-center'>
      <div>
        <div className='flex justify-between items-center h-83px px-20px'>
          <div className='flex items-center'>
            <Image src='/logo.png' alt='logo' width={144} height={57} />
          </div>
          <div className='flex items-center gap-5'>
            <p>Copyright @2023 . BlogPost</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer