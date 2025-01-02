"use client";

import prisma from "@/lib/prisma";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { loginAuthentication, signup } from "@/utils/login-utils";

interface CredentialsFormProps {
	csrfToken?: string;
	buttonText: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		// switch (props.buttonText) {
		// 	case "Sign up":
		// 		const user = await prisma.user.create({
		// 			data: {
		// 				email: data.get("email") as string,
		// 				password: bcrypt.hashSync(data.get("password") as string, 10),
		// 			},
		// 		});
		// 		break;
		// 	case "Sign in":
		// }

		// const signInResponse = await signIn("credentials", {
		// 	email: data.get("email"),
		// 	password: data.get("password"),
		// 	redirect: false,
		// });

		// if (signInResponse && !signInResponse.error) {
		// 	redirect("/profile/edit");
		// } else {
		// 	setError("Your email or password was incorrect.");
		// }

        const email = data.get("email") as String;
        const password = data.get("password") as String;
        
        const response: any = await loginAuthentication(email,password);
        if(response.status !== 200){// Response not Okay so the status is 401
            setError(response.message);
        }
        // TASK: DO SOMETHING ON SUCCESSFUL LOGIN
        
	};

    function handleErrorX(): void{
        setError(null);
    }

	return (
		<form className="w-full bg-blue rounded-sm" onSubmit={handleSubmit}>
			
			<input
				type="email"
				name="email"
				placeholder="Email (user@ucsd.edu)"
				required
				className="p-4 my-2 rounded-md w-full text-zinc-900"
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				required
				className="p-4 my-2 rounded-md w-full text-zinc-900"
			/>
			<button
				type="submit"
				className="block bg-zinc-50 p-4 mt-4 rounded-lg m-auto text-zinc-900 font-semibold hover:bg-blue-400 hover:shadow-2xl shadow-blue-400 hover:text-white transition"
			>
				{props.buttonText}
			</button>

            <DisplayError error={error} handleClick={handleErrorX}/>
		</form>
	);
}

function DisplayError({error, handleClick}:{error: string|null, handleClick: ()=>void}){
    if(!error) return ;
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg onClick= {handleClick}className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>
    )
}
