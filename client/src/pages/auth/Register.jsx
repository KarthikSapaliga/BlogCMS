import React from "react";
import { SignUp } from "@clerk/clerk-react";

function Register() {
    return <div className='flex items-center justify-center h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]'>
        <SignUp appearance={{
            elements: {
                card: "bg-white shadow-lg rounded-xl p-6",

                formButtonPrimary: "bg-primary hover:bg-purple-600 text-white font-semibold py-2 rounded-md outline-none",

                headerTitle: "text-2xl font-bold text-dark3",
            },
        }} />
    </div>;
}

export default Register;
