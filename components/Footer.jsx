import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    name: 'Categories', elements: [
      { label: 'The', url: "/category/the" },
      { label: 'Tisane', url: "/category/tisane" },
      { label: 'Savon', url: "/category/savon" },
      { label: 'Detergent', url: "/category/detergent" },
    ], hasLink: true
  },
  {
    name: 'Liens', elements: [
      { label: 'Acceuil', url: "/" },
      { label: 'Contact', url: "/contact" },
      { label: 'Boutique', url: "/shop" },
      { label: 'Crédits', url: "/credits" },  
    ], hasLink: true
  },
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full pt-14'>
      <div className='max-w-[1240px] mx-3 md:mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-[#f8efee] py-8 gap-8'>
        {items && items.map((item, index) => (
          <div className='flex-[1] flex flex-col gap-3 text-justify text-sm' key={index}>
            <h1 className='text-lg font-medium text-black'>{item.name}</h1>
            {item.elements.map((element, index) => (
              <Link href={element.url} key={`${element.label}_${index}`} className='cursor-pointer hover:text-black md:text-gray-600'>
                {element.label}
              </Link>
            ))
            }
          </div>
        ))
        }
        <div className='flex-[1] flex flex-col gap-3 text-justify text-sm'>
          <h1 className='text-lg font-medium text-black'>A Propos</h1>
          <span className='md:text-gray-600'>
            Créé en 2021, bazarrafal est une plateforme de vente qui simplifie l’accès à la consommation, privilégie la relation locale et fait du digital un outil au service de tous.
          </span>
        </div>
        <div className='flex-[1] flex flex-col gap-3 text-justify text-sm'>
          <h1 className='text-lg font-medium text-black'>Contact</h1>
          <span className='md:text-gray-600'>
            Vous pouvez devenir partenaire de Bazarrafal et exposer vos produits sur notre plateforme. Pour avoir plus d'informations:
            <div className="flex flex-col">
              <p className="md:text-gray-600">Tel: +237 6 56 28 88 38 </p>
              <p className="md:text-gray-600">Tel: +237 6 78 80 10 70 </p>
              <p className="md:text-gray-600">Mail: services@bazarrafal.com</p>
            </div>
          </span>
        </div>
      </div>
      <div className='flex sm:flex-row flex-col max-w-[1240px] mx-auto px-2 py-4 items-center justify-between'>
        <div className='flex items-center'>
          <Link href="/" className="text-[#f80506] font-bold text-2xl">
            <Image src="/logo.jpeg" alt='logo' height={70} width={100} />
          </Link>
          <span className="ml-5 hover:text-black cursor-pointer text-xs text-gray-600">
            © Copyright DARECORP, Inc {year}. Tous Droits Réservés.
          </span>
        </div>
        <div className='flex justify-between sm:w-[200px] pt-4 text-2xl gap-4'>
          <div className="w-10 h-10 rounded-full bg-[#dc5b5b] flex items-center justify-center text-white hover:bg-[#f80506] cursor-pointer">
            <FaFacebookF size={20} color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#dc5b5b] flex items-center justify-center text-white hover:bg-[#f80506] cursor-pointer">
            <FaTwitter size={20} color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#dc5b5b] flex items-center justify-center text-white hover:bg-[#f80506] cursor-pointer">
            <FaInstagram size={20} color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#dc5b5b] flex items-center justify-center text-white hover:bg-[#f80506] cursor-pointer">
            <FaWhatsapp size={20} color="white" />
          </div>

        </div>
      </div>
    </footer>
  )
};

export default Footer;