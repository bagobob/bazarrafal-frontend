import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { addToCart } from "@/store/cartSlice";
import Head from "next/head";

const ProductDetails = ({ product, products }) => {
    const dispatch = useDispatch();
    const p = product?.data?.[0]?.attributes;

    const notify = () => {
        toast.success("Success. Vérifiez votre panier!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    return (
        <>
            <Head>
                <title>{p.name}|Bazarrafal</title>
                <meta
                    name="description"
                    content={p.description}
                />
            </Head>
            <div className="w-full md:py-20">
                <ToastContainer />
                <Wrapper>
                    <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                        {/* left column start */}
                        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                            <ProductDetailsCarousel images={p.image.data} />
                        </div>
                        {/* left column end */}

                        {/* right column start */}
                        <div className="flex-[1] py-3">
                            {/* PRODUCT TITLE */}
                            <div className="text-[34px] font-semibold mb-2 leading-tight">
                                {p.name}
                            </div>

                            {/* PRODUCT SUBTITLE */}
                            <div className="text-lg font-semibold mb-5">
                                {p.subtitle}
                            </div>

                            {/* PRODUCT PRICE */}
                            <div className="flex items-center mb-8">
                                <p className="mr-2 text-lg font-semibold">
                                    Prix : {p.price} FCFA
                                </p>
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


                            {/* ADD TO CART BUTTON START */}
                            <button
                                className="w-full py-4 rounded-lg bg-[#f80506] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                                onClick={() => {
                                        dispatch(
                                            addToCart({
                                                ...product?.data?.[0],
                                                oneQuantityPrice: p.price,
                                            })
                                        );
                                        notify();
                                }}
                            >
                                Ajouter au panier
                            </button>
                            {/* ADD TO CART BUTTON END */}

                            <div>
                                <div className="text-lg font-bold mb-5">
                                    Description
                                </div>
                                <div className="markdown text-md mb-5">
                                    <ReactMarkdown>{p.description}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                        {/* right column end */}
                    </div>
                    <RelatedProducts products={products} />
                </Wrapper>
            </div>
        </>

    )
}

export async function getStaticPaths() {
    const products = await fetchDataFromApi("api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}

export default ProductDetails