import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";

const Favorite = ({setOpenFav}) => {
    return (
        <div className='bg-white absolute right-5 top-20 z-50  p-5 text-black shadow-lg'>
            <h1 className='mb-6 text-black font-normal text-2xl'>Your Favorites products</h1>
            <div className='flex mb-3'>
                <div className='flex-auto'>
                <Link href={`/product/shd`} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                onClick={() => setOpenFav(false)}>
                    <Image src="/p1.png" alt="product" className='object-cover' width={80} height={100} />
                </Link>
                </div>
                <div className=''>
                    <h1 className='text-lg font-medium'>Product Name</h1>
                    <div className='text-indigo-600'>$ 30</div>
                    <button className='rounded-lg p-2 bg-[#f80506] text-white flex items-center justify-center gap-3 cursor-pointer border-none font-medium'>
                        Add to cart <BsFillCartPlusFill />
                    </button>
                </div>
            </div>
            <div className='flex'>
                <div className='flex-auto'>
                <Link href={`/product/shd`} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
                    <Image src="/p2.png" alt="product" className='object-cover' width={80} height={100} />
                </Link>
                </div>
                <div className=''>
                    <h1 className='text-lg font-medium'>Product Name</h1>
                    <div className='text-indigo-600'>$ 30</div>
                    <button className='rounded-lg p-2 bg-[#f80506] text-white flex items-center justify-center gap-3 cursor-pointer border-none font-medium'>
                        Add to cart <BsFillCartPlusFill />
                    </button>
                </div>
            </div>
            <div className='mt-3 flex items-center justify-center'>
            <button className='rounded-lg p-2 bg-[#f8efee] text-[#f80506] hover:bg-[#f80506] hover:text-white flex items-center justify-center gap-3 cursor-pointer border-none font-medium'>
                    Go To Cart 
            </button>
            </div>
        </div>
    )
}

export default Favorite