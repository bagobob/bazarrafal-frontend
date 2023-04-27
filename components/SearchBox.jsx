import React from 'react';
import { BsChevronDown, BsSearch } from "react-icons/bs";

const SearchBox = () => {
    return (
        <div className="w-full max-w-[1360px] mx-auto pt-16">
        <div className="container mx-auto bg-[#f80506]/[0.7] rounded-lg p-7">
            <div className="hero-headline flex flex-col items-center justify-center pt-12 text-center">
                <h1 className=" font-bold text-3xl text-white">Find the products of your choices</h1>
                <p className=" font-base text-base text-white">high quality stock images and videos shared by our talented community.</p>
            </div>
            <div className="box pt-6">
                <form className="box-wrapper">
                    <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                        <button className="outline-none focus:outline-none"><BsSearch /></button>
                        <input type="search" name="" id="" placeholder="search for images" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                        <div className="select">
                            <select name="" id="" x-model="image_type" className="text-sm outline-none focus:outline-none bg-transparent">
                                <option value="all" defaultValue>All</option>
                                <option value="photo">Photo</option>
                                <option value="illustration">Illustration</option>
                                <option value="vector">Vector</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>

    )
}

export default SearchBox