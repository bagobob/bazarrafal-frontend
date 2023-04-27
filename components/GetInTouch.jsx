import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const GetInTouch = () => {
    return (
        <div className="bg-[#f80506] text-white p-3 flex flex-col lg:flex-row justify-center items-center">
            <div className="w-[50%] flex flex-col sm:flex-row items-center justify-between">
                <span className="mb-3 sm:mb-0">SOUSCRIVEZ A LA NEWSLETTER :</span>
                <div className="flex mb-2 sm:flex-row items-center justify-between sm:mx-3">
                    <input type="text" className='p-3 border-none rounded-[5px_0_0_5px] text-black outline-none' placeholder="Entrez votre e-mail..." />
                    <button className='px-6 md:p-3 text-white bg-[#333] border-none rounded-[0_5px_5px_0] h-full sm-h-auto'>ENVOYEZ</button>
                </div>
                <div className="flex gap-3">
                    <FaFacebookF size={20} />
                    <FaTwitter size={20}/>
                    <FaInstagram size={20}/>
                    <FaWhatsapp size={20}/>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch