import React from 'react'
import Image from 'next/image'
import '@/app/globals.css'
import { useRouter } from 'next/navigation'

function Navbar() {
  const router = useRouter()
  return (
    <div className='py-4 px-16 h-[83px] w-full bg-background flex-column justify-between items-center'>
      <div>
        <div className='flex justify-between items-center h-83px px-20px'>
          <div className='flex items-center hover:cursor-pointer'>
            <Image src='/logo.png' alt='logo' width={144} height={57} onClick={()=>router.push('/')} />
          </div>
          <div className='flex items-center gap-5'>
            <button className='text-white text-16px mr-20px' onClick={()=>router.push('/')}>Blogs</button>
            <input type="text" enterKeyHint="search" placeholder=' search                       &#x1F50E;' className='flex justify-between bg-background border border-radius-1' />
            <button className='color-white text-16px bg-[#8E8E8E] p-1 border border-[#8E8E8E]'>Create blog Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar