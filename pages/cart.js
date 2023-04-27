import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from 'next/router'

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);
    const router = useRouter();

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);

    return (
        <>
            <Head>
                <title>Panier|Bazarrafal</title>
                <meta
                    name="description"
                    content="Valider votre panier sur Bazarrafal"
                />
            </Head>
            <div className="w-full md:py-20">
                <Wrapper>
                    {cartItems.length > 0 && (
                        <>
                            {/* HEADING AND PARAGRAPH START */}
                            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                                <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                    Mon Panier
                                </h1>
                            </div>
                            {/* HEADING AND PARAGRAPH END */}

                            {/* CART CONTENT START */}
                            <div className="flex flex-col lg:flex-row gap-12 py-10">
                                {/* CART ITEMS START */}
                                <div className="flex-[2]">
                                    <div className="text-lg font-bold">
                                        Items du Panier
                                    </div>
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} data={item} />
                                    ))}
                                </div>
                                {/* CART ITEMS END */}

                                {/* SUMMARY START */}
                                <div className="flex-[1]">
                                    <div className="text-lg font-bold">Résumé</div>

                                    <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                        <div className="flex justify-between">
                                            <div className="uppercase text-md md:text-lg font-medium text-black">
                                            Sous-total
                                            </div>
                                            <div className="text-md md:text-lg font-medium text-black">
                                                {subTotal} FCFA
                                            </div>
                                        </div>
                                        <div className="text-sm md:text-md py-5 border-t mt-5">
                                        Le sous-total reflète le prix total de
                                        de votre commande, y compris les droits et taxes,
                                        avant toute remise applicable. Il n'inclut pas
                                        Il ne comprend pas les frais de livraison et les
                                        les frais de transaction internationale.
                                        </div>
                                    </div>

                                    {/* BUTTON START */}
                                    <button
                                    onClick={() => {router.push("/order")}}
                                        className="w-full py-4 rounded-full bg-[#f80506] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                    >
                                        Paiement
                                        {loading && <Image src="/spinner.svg" alt="spinner" />}
                                    </button>
                                    {/* BUTTON END */}
                                </div>
                                {/* SUMMARY END */}
                            </div>
                            {/* CART CONTENT END */}
                        </>
                    )}

                    {/* This is empty screen */}
                    {cartItems.length < 1 && (
                        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                            <Image
                                src="/empty-cart.jpg"
                                width={300}
                                height={300}
                                className="w-[300px] md:w-[400px]"
                            />
                            <span className="text-xl font-bold">
                                Votre panier est vide
                            </span>
                            <span className="text-center mt-4">
                                Il semble que vous n'ayez rien ajouté à votre panier.
                                <br />
                                Allez-y et explorez les principales catégories.
                            </span>
                            <Link
                                href="/"
                                className="py-4 px-8 rounded-lg bg-[#f80506] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                            >
                                Continuer les achats
                            </Link>
                        </div>
                    )}
                </Wrapper>
            </div>
        </>

    )
}

export default Cart