import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { fetchDataFromApi } from "@/utils/api";
import { useEffect } from 'react';



const CategoryCard = () => {
    const [categories, setCategories] = useState(null);
    const fetchCategories = async () => {
        const { data } = await fetchDataFromApi("api/categories?populate=*");
        setCategories(data);
    };
    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 m-3">
            {categories?.map(({ attributes: c, id }) => (
                <div
                    key={id}
                    className="flex flex-col gap-3 relative overflow-hidden"
                >
                    <Image
                        src={c.imgsrc?.data?.attributes?.url}
                        alt={`${c.name}-category-img`}
                        width={800}
                        height={800}
                        className='w-[100%] h-[100%] object-cover'
                    />
                    <button className='absolute min-w-[100px] w-[fit-content] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-[#f8efee] hover:opacity-90 uppercase font-medium'>
                        <Link href={`/category/${c.slug}`}>
                            {c.name}
                        </Link>
                    </button>
                </div>

            ))}
        </div>
    )
}

export default CategoryCard