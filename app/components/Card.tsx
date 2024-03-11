import Image from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    date: string;
    readTime: string;
    slug: number;
    content: string;
    read: (slug: number) => void;
}

function Card({ title, date, readTime, slug, content, read }: CardProps) {
    return (
        <div className="border border-black w-[337px]  h-[337px] bg-[#E8E8E8] hover:cursor-pointer" onClick={()=>read(slug)}>
            <div className="bg-[#D9D9D9] h-[179px] flex align-center justify-center p-1">
                <Image src="/post.png" alt="blog1" width={293} height={165} />
            </div>
            <div className="flex-row justify-center align-center p-6 h-[208px] ">
                <div className="font-bold-600 text-[12px]">{date} . {readTime} Read</div>
                <div className="font-bold-700 text-[16px] text-wrap">{title}</div>
                <div className="font-light text-[14px] truncate">{content}</div>
            </div>
        </div>

    )
}

export default Card