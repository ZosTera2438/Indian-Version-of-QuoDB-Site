"use client";

import React, { useEffect, useState } from "react";
import { getFormData } from "@/lib/formData";
import { useStateContext } from "@/context/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
type FormData = {
    Name: string;
    "Email Address": string;
    "Phone Number": string;
};

const FormDisplay = () => {
    const {
        currentStep,
        userData,
        setUserData,
        message,
        setMessage,
        quoteData,
        setQuoteData,
        setCurrentStep,
        finishedForm,
        clickedNextButton,
    } = useStateContext();

    const [form, setForm] = useState<any | null>(null);

    const handleInputChange = (name: string, value: string) => {
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    useEffect(() => {
        const data = getFormData(currentStep);
        setForm(data);
    }, [currentStep]);

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div
            className={`${finishedForm
                ? "pt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2"
                : "lg:pt-11"
                }`}
        >
            {!finishedForm && (
                <>
                    <h1>{form?.data?.heading}</h1>
                    <h2 className="mt-3 text-neutral-coolGray text-base">
                        {form?.data?.subHeading}
                    </h2>
                </>
            )}

            <div
                className={`flex flex-col gap-4 h-full ${finishedForm ? "mt-0" : "lg:mt-10 mt-6 "
                    }`}
            >

                {form?.data?.input?.map((input: any) => {
                    return (
                        <div key={input.name}>
                            <div className="flex flex-row w-full justify-between">
                                <label
                                    className="default text-sm"
                                    htmlFor={input.name.replace(/\s/g, "-")}
                                >
                                    {input.name}
                                </label>
                                {!userData[input.name as keyof FormData] &&
                                    clickedNextButton && (
                                        <p className="font-semibold text-primary-strawberryRed text-sm">
                                            This field is required
                                        </p>
                                    )}
                                {input.name === "Email Address" &&
                                    userData[input.name as keyof FormData] &&
                                    !isValidEmail(userData[input.name as keyof FormData]) && (
                                        <p className="font-semibold text-primary-strawberryRed text-sm">
                                            Invalid email address
                                        </p>
                                    )}
                            </div>
                            <Input
                                type={input.type}
                                name={input.name.replace(/\s/g, "-")}
                                id={input.name.replace(/\s/g, "-")}
                                required
                                className="default mt-2"
                                onChange={(e) => handleInputChange(input.name, e.target.value)}
                                value={userData[input.name as keyof FormData]}
                                placeholder={input.placeholder}
                            />
                        </div>
                    );
                })}

                {form?.data?.inputQuote?.map((input: any) => {
                    return (
                        <div key={input.name}>
                            <div className="flex flex-row w-full justify-between">
                                <label
                                    className="default text-sm"
                                    htmlFor={input.name.replace(/\s/g, "-")}
                                >
                                    {input.name}
                                </label>
                                {!userData[input.name as keyof FormData] &&
                                    clickedNextButton && (
                                        <p className="font-semibold text-primary-strawberryRed text-sm">
                                            This field is required
                                        </p>
                                    )}
                                {input.name === "Email Address" &&
                                    userData[input.name as keyof FormData] &&
                                    !isValidEmail(userData[input.name as keyof FormData]) && (
                                        <p className="font-semibold text-primary-strawberryRed text-sm">
                                            Invalid email address
                                        </p>
                                    )}
                            </div>
                            <Input
                                type={input.type}
                                name={input.name.replace(/\s/g, "-")}
                                id={input.name.replace(/\s/g, "-")}
                                required
                                className="default mt-2"
                                onChange={(e) => handleInputChange(input.name, e.target.value)}
                                value={userData[input.name as keyof FormData]}
                                placeholder={input.placeholder}
                            />
                        </div>
                    );
                })}

                {finishedForm ? (
                    <div className="h-full flex items-center justify-center flex-col">
                        <img
                            className="lg:mb-9 mb-4 w-14 lg:w-auto"
                            src="/images/icon-thank-you.svg"
                            alt="Checkmark"
                        />
                        <h1 className="mb-4 text-2xl lg:text-3xl">Thank you!</h1>
                        <p className="text-neutral-coolGray text-center">
                            Thanks for contributin a quote! We hope you have fun
                            using our platform. If you ever need support, please feel free to
                            email us at support@indomoviequodb.com.
                        </p>
                    </div>
                ) : (
                    <>
                        {form?.data?.inputDescription?.map((input: any) => {
                            return (
                                <div key={input.name}>
                                    <div className="flex flex-row w-full justify-between">
                                        <label
                                            className="default text-sm"
                                            htmlFor={input.name.replace(/\s/g, "-")}
                                        >
                                            {input.name}
                                        </label>
                                        {!userData[input.name as keyof FormData] &&
                                            clickedNextButton && (
                                                <p className="font-semibold text-primary-strawberryRed text-sm">
                                                    This field is required
                                                </p>
                                            )}
                                        {input.name === "Email Address" &&
                                            userData[input.name as keyof FormData] &&
                                            !isValidEmail(userData[input.name as keyof FormData]) && (
                                                <p className="font-semibold text-primary-strawberryRed text-sm">
                                                    Invalid email address
                                                </p>
                                            )}
                                    </div>
                                    <Textarea
                                        // type={input.type}
                                        name={input.name.replace(/\s/g, "-")}
                                        id={input.name.replace(/\s/g, "-")}
                                        required
                                        className="default mt-2"
                                        onChange={(e) => handleInputChange(input.name, e.target.value)}
                                        value={userData[input.name as keyof FormData]}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default FormDisplay;