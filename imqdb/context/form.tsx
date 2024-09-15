"use client";

import { getFormCount } from "@/lib/formData";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserData {
    Name: string;
    "Email Address": string;
    "Phone Number": string;
}

interface QuoteData {
    Quote: string;
    Movie: string;
    Language: string;
    Year: string;
}

interface ContextProps {
    currentStep: number;

    error: boolean;
    clickedNextButton: boolean;
    increaseStep: () => void;
    decreaseStep: () => void;

    userData: {
        Name: string;
        "Email Address": string;
        "Phone Number": string;
    };
    quoteData: {
        Quote: string;
        Movie: string;
        Language: string;
        Year: string;
    },
    message: string;
    finishedForm: boolean;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    setQuoteData: React.Dispatch<React.SetStateAction<QuoteData>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    setFinishedForm: React.Dispatch<React.SetStateAction<boolean>>;
    setClickedNextButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextProps>({
    currentStep: 1,
    quoteData: { Quote: "", Movie: "", Language: "", Year: "" },
    message: "",
    error: false,
    userData: { Name: "", "Email Address": "", "Phone Number": "" },

    clickedNextButton: false,
    finishedForm: false,
    increaseStep: () => { },
    setClickedNextButton: () => { },
    decreaseStep: () => { },
    setUserData: () => { },
    setQuoteData: () => { },
    setMessage: () => { },
    setCurrentStep: () => { },
    setFinishedForm: () => { },
});

interface StateContextProps {
    children: React.ReactNode;
}

export const StateContext = ({ children }: StateContextProps) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [userData, setUserData] = useState({
        Name: "",
        "Email Address": "",
        "Phone Number": "",
    });
    const [quoteData, setQuoteData] = useState({
        Quote: "",
        Movie: "",
        Language: "",
        Year: "",
    });
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [clickedNextButton, setClickedNextButton] = useState(false);
    const [finishedForm, setFinishedForm] = useState(false);

    const formCount = getFormCount();

    useEffect(() => {
        if (
            userData["Email Address"] &&
            userData.Name &&
            userData["Phone Number"]
        ) {
            setError(false);
        } else {
            setError(true);
        }
    }, [userData]);

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const increaseStep = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const decreaseStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };


    return (
        <Context.Provider
            value={{
                setCurrentStep,
                error,
                quoteData,
                message,
                setQuoteData,
                setMessage,
                currentStep,
                increaseStep,
                decreaseStep,
                userData,
                setUserData,
                clickedNextButton,
                setClickedNextButton,
                finishedForm,
                setFinishedForm,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = (): ContextProps => useContext(Context);