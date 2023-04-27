import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import teaImg from "../public/tea-category.jpg";
import tisaneImg from "../public/tisane-category.jpg";
import soapImg from "../public/soap-category.jpg";
import detergentImg from "../public/detergent-category.avif";


export const CATEGORIES = [
    {
        name: 'THE',
        url: 'the',
        imgSrc:teaImg,
        subCategories: ['Thé Vert', 'Thé noir', 'Thé jaune']

    },
    {
        name: ' SAVON',
        url: 'savon',
        imgSrc: soapImg,
        subCategories: ['Savon liquide', 'Savon solide']
    },
    {
        name: 'DETERGENT',
        url: 'detergent',
        imgSrc: detergentImg,
        subCategories: ['Détergent mauve', 'Détergent noire']
    },
    {
        name: 'TISANE',
        url: 'tisane',
        imgSrc: tisaneImg,
        subCategories: ['Tisane africaine', 'Tisane chinoise']
    },
];

const CategoryCard = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 m-3">
            {CATEGORIES.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-3 relative overflow-hidden"
                >
                    <Image
                        src={item.imgSrc}
                        alt=""
                        width={800}
                        height={800}
                        className='w-[100%] h-[100%] object-cover'
                    />
                    <button className='absolute min-w-[100px] w-[fit-content] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-[#f8efee] hover:opacity-90 uppercase font-medium'>
                        <Link href={`/category/${item.url}`}>
                            {item.name}
                        </Link>
                    </button>
                </div>

            ))}
        </div>
    )
}

export default CategoryCard