import Link from 'next/link'
import React from 'react'
import Head from 'next/head';

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>400-Page Non trouvé|Bazarrafal</title>
            </Head>
            <div className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Désolé, nous n'avons pas trouvé cette page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">Mais ne vous inquiétez pas, vous trouverez bien d'autres choses sur notre page d'accueil.</p>
                        <Link href="/" className="py-4 px-8 rounded-lg bg-[#f80506] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Custom404