import React from 'react';
import Head from "next/head";
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';

const creditArray = [
    {
        firstItem: {title: 'Image by Freepik', content: 'This cover has been designed using assets from Freepik.com', 
        href: 'https://www.freepik.com/free-photo/natural-self-care-soap_14958675.htm#query=soap&position=18&from_view=search&track=sph'},
        secondItem: {title: 'Image by 8photo on Freepik', content: 'This cover has been designed using assets from Freepik.com.', 
        href: 'https://www.freepik.com/free-photo/set-wood-stubs-cup-tea-tea-herbs-bowls-dark-textured-background-flat-lay_8111273.htm#query=tisane&position=9&from_view=search&track=sph'}
    },
    {
        firstItem: {title: 'Image by KamranAydinov', content: 'This cover has been designed using assets from Freepik.com', 
        href: 'https://www.freepik.com/free-photo/top-view-tea-cinnamon-cup-herbal-tea-cinnamon-sticks-saucer-lemon-teapot-leaves-white-table_16466842.htm#query=tea&position=11&from_view=search&track=sph'},
        secondItem: {title: '', content: '', 
        href: ''}},
];


const Credits = () => {
    return (
        <>
            <Head>
                <title>Credits|Bazarrafal</title>
                <meta
                    name="description"
                    content="Simplifier l'accès à la consommation de produits de qualités et favoriser la production locale"
                />
            </Head>
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Credits
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 mx-auto md:px-0'>
                {creditArray && creditArray.map((item, index)=> (
                    <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
                        <div className="overflow-hidden bg-[#f80506]/[0.8] rounded max-w-xs w-full shadow-lg  leading-normal">
                            <Link href={item.firstItem.href} className="block group hover:bg-blue p-4 border-b">
                                <p className="font-bold text-lg mb-1 text-black group-hover:text-white">{item.firstItem.title}</p>
                                <p className="text-grey-darker mb-2 group-hover:text-white">{item.firstItem.content}</p>
                            </Link>
                            <Link href={item.secondItem.href} className="block group hover:bg-blue p-4">
                                <p className="font-bold text-lg mb-1 text-black group-hover:text-white">{item.secondItem.title}</p>
                                <p className="text-grey-darker mb-2 group-hover:text-white">{item.secondItem.content}</p>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </Wrapper>


        </>

    )
}

export default Credits