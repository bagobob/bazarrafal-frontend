import React, { useMemo, useState } from 'react';
import Head from "next/head";
import Wrapper from '@/components/Wrapper';
import { useSelector } from "react-redux";
import Image from 'next/image';


const Order = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (firstName.length <= 0) {
            tempErrors["firstName"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (lastName.length <= 0) {
            tempErrors["lastName"] = true;
            isValid = false;
        }
        if (phone.length <= 0) {
            tempErrors["phone"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();


        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        }
        console.log(firstName, email, lastName, phone);
    };
    return (
        <>
            <Head>
                <title>Order|Bazarrafal</title>
                <meta
                    name="description"
                    content="Vous pouvez devenir partenaire de Bazarrafal et exposer vos produits sur notre plateforme.Contactez nous pour plus d'informations."
                />
            </Head>
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Commande
                    </div>
                </div>
                <section>
                    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">

                        <div className="bg-white">
                            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Résumé commande</h1>
                            <ul className="py-6 border-b space-y-6 px-8">
                                {cartItems.map((item) => (
                                    <li className="grid grid-cols-6 gap-2 border-b-1">
                                        <div className="col-span-1 self-center">
                                            <Image src={item.attributes.thumbnail.data.attributes.url} alt={item.attributes.name}
                                                className="rounded w-full" width={120} height={120} />
                                        </div>
                                        <div className="flex flex-col col-span-3 pt-2">
                                            <span className="text-gray-600 text-md font-semi-bold">{item.attributes.name}</span>
                                            <span className="text-gray-400 text-sm inline-block pt-2">{item.attributes.subtitle}</span>
                                        </div>
                                        <div className="col-span-2 pt-3">
                                            <div className="flex items-center space-x-2 text-sm justify-between">
                                                <span className="text-gray-400">{item.quantity} x {item.attributes.price / item.quantity} FCFA</span>
                                                <span className="text-[#f80506] font-semibold inline-block">{item.attributes.price} FCFA</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                                }
                            </ul>
                            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                                <span>Total</span>
                                <span>{subTotal} FCFA</span>
                            </div>
                        </div>

                        <div className="bg-white py-12 md:py-24">
                            <div className="mx-auto max-w-lg px-4 lg:px-8">
                                <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                                    <div className="col-span-3">
                                        <label
                                            for="firstName"
                                            className="block text-medium font-medium text-gray-700"
                                        >
                                            Prénom<span className="text-red-500 dark:text-gray-50">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                            className="mt-1 w-full rounded-lg p-3 bg-gray-100 shadow-sm sm:text-sm focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="col-span-3">
                                        <label
                                            for="lastName"
                                            className="block text-medium font-medium text-gray-700"
                                        >
                                            Nom<span className="text-red-500 dark:text-gray-50">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}
                                            className="mt-1 w-full rounded-lg p-3 bg-gray-100 shadow-sm sm:text-sm focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label for="email" className="block text-medium font-medium text-gray-700">
                                            Email<span className="text-red-500 dark:text-gray-50">*</span>
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            className="mt-1 w-full rounded-lg p-3 bg-gray-100 shadow-sm sm:text-sm focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label for="phone" className="block text-medium font-medium text-gray-700">
                                            Téléphone<span className="text-red-500 dark:text-gray-50">*</span>
                                        </label>

                                        <input
                                            type="tel"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                            className="mt-1 w-full rounded-lg p-3 bg-gray-100 shadow-sm sm:text-sm focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <button
                                            type='submit'
                                            className="uppercase block w-full rounded-lg bg-[#f80506] p-2.5 text-sm font-bold tracking-wide text-white transition hover:shadow-lg"
                                        >
                                            Commander
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </Wrapper>
        </>
    )
}

export default Order