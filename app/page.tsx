"use client";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Card from "@components/Card";
import { blogPosts } from "./blogData";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  const readBlog = (slug:number) => {
    // Navigate to the blog page
    router.push(`/blog/${slug}`)
  }


  return (
    <main className="flex-col h-screen bg-red-800 justify-between align-center gap-10">
      <Navbar />
      <div className="px-16 min-h-screen flex-row flex-grow mb-10">
        <div className="mt-14">
          <div className="text-[36px] font-bold-700">The Accessibility Blog</div>
          <div className="text-[16px] font-light">The voice of the excluded</div>
        </div>
        <div className="flex gap-y-8 gap-x-14 mt-16 flex-wrap" >
        {
          blogPosts.map(({title, date, readTime, slug, content }) => (
              <div key={slug}>
                <Card title={title} date={date} readTime={readTime} slug={slug} content={content} read={readBlog} />
              </div>
          ))}
          </div>
      </div>
      <Footer />
    </main>
  );
}
