import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (

        <div className="flex items-center justify-center gap-x-4 gap-y-2 bg-gray-50 px-6 py-2.5 sm:px-3.5">
            <p className="text-sm leading-6 text-gray-900">
                <strong className="font-semibold">Bazarrafal</strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx={1} cy={1} r={1} />
                </svg>
                Paiement à la livraison.
            </p>
            <Link
                href="/contact"
                className="flex-none rounded-full bg-[#f80506] px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f80506]"
            >
                Plus D'infos <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>
    )
}

export default Banner