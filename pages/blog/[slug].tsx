import React from 'react'
import { useRouter } from 'next/router'
import { blogPosts } from '../../app/blogData'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

interface BlogData {
  title: string;
  date: string;
  readTime: string;
  slug: number;
  content: string;
}

function BlogPage() {
  const router = useRouter()
  const { slug } = router.query

  const data = blogPosts.find((post: BlogData) => post.slug === Number(slug))
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='py-4 px-16 flex-grow pt-16'>
        <button onClick={() => router.back()} className=''> &lt;- Back to blog posts</button>
        {data ? (
          <div className='flex flex-col place-items-center gap-10 pt-16'>
            <div className='font-bold-700 text-[32px] text-center'>{data?.title}</div>
            <div className='mt-[-40px] font-light text-[16px]'>{data?.date} . {data?.readTime} Read</div>
            <div className='bg-[#D9D9D9] w-full h-[366px]'>
              <Image src='/blog.png' alt='blog1' width={1000} height={1000} objectFit='contain' style={{ height: "100%", width: "100%", padding: "10px" }} />
            </div>
            <div>{data?.content}</div>
          </div>

        ) : (
          <div>
            <h1>Loading...</h1>
          </div>

        )}
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage