import React, { useMemo, useState }  from 'react';
import Image from "next/image";
import Link from "next/link";
import { getDiscountedPricePercentage } from "@/utils/helper";

const ProductCard = ({ data: { attributes: p, id } }) => {
    return (
        <div className='m-auto w-[50%] md:w-[80%]'>
            <div className='flex items-center justify-center'>
                <Link
                    href={`/product/${p.slug}`}
                    className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                >
                    <Image
                        width={500} height={500}
                        src={p.thumbnail?.data?.attributes?.url}
                        alt={p.name} priority
                        className='object-contain'
                    />
                </Link>
            </div>
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex text-black/[0.5]">
                    <p className="text-lg font-semibold">  {p.price} FCFA</p>
                    {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                {p.original_price} FCFA
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard