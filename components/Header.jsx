import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import logo from "../public/logo.png";
import Favorite from "./Favorite";
import { fetchDataFromApi } from "@/utils/api";
import Banner from "./Banner";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openFav, setOpenFav] = useState(false);
    const [categories, setCategories] = useState(null);

    const { cartItems } = useSelector((state) => state.cart);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    });
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const { data } = await fetchDataFromApi("api/categories?populate=*");
        setCategories(data);
    };

    return (
        <>
            <Banner />
            <div className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
                <Wrapper className="h-[60px] flex justify-between items-center">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={80} style={{ height: 'auto', width: 'auto' }} />
                    </Link>

                    <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} categories={categories} />

                    {mobileMenu && (
                        <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} categories={categories} />
                    )}

                    <div className="flex items-center gap-2 text-black">
                        {/* Heart Icon Start */}
                        {/* <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
                        onClick={() => setOpenFav(!openFav)}>
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-[#f80506] absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            51
                        </div>
                    </div> */}
                        {/* Heart Icon End */}

                        {/* Cart Icon Start */}
                        <Link href="/cart">
                            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                                <BsCart className="text-[15px] md:text-[20px]" />
                                {cartItems.length > 0 && (
                                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-[#f80506] absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                        {cartItems.length}
                                    </div>
                                )}
                            </div>
                        </Link>
                        {/* Cart Icon End */}

                        {/* Mobile icon start */}
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                            {mobileMenu ? (
                                <VscChromeClose
                                    className="text-[16px]"
                                    onClick={() => setMobileMenu(false)}
                                />
                            ) : (
                                <BiMenuAltRight
                                    className="text-[20px]"
                                    onClick={() => setMobileMenu(true)}
                                />
                            )}
                        </div>
                        {/* Mobile icon end */}
                    </div>
                </Wrapper>
                {openFav && <Favorite setOpenFav={setOpenFav} />}
            </div>
        </>

    )
}

export default Header