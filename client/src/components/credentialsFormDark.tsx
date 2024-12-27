"use client";

import prisma from "@/lib/prisma";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { loginAuthentication, signup } from "@/utils/login-utils";
import "../app/signup/styles.css"

interface CredentialsFormProps {
	csrfToken?: string;
	buttonText: string;
}

export function CredentialsFormDark(props: CredentialsFormProps) {
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
        if(props.buttonText==='Sign up'){
            const response: any = await signup(email,password);
            if(response.status !== 200){// Response not Okay so the status is 401
                setError(response.message);
            }
            // TASK: DO SOMETHING ON SUCCESSFUL SIGNUP
        } else{
            const response: any = await loginAuthentication(email,password);
            if(response.status !== 200){// Response not Okay so the status is 401
                setError(response.message);
            }
            // TASK: DO SOMETHING ON SUCCESSFUL LOGIN
        }
	};

	return (
		<form className="w-full bg-blue rounded-sm" onSubmit={handleSubmit}>
			<input
				type="name" // should these just be names?
				name="first name"
				placeholder="First Name"
				required
				className="p-4 my-2 rounded-md w-full text-white focus"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
			/>
			<input
				type="name"
				name="last name"
				placeholder="Last Name"
				required
				className="p-4 my-2 rounded-md w-full text-white focus"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
			/>
			<input
				type="email"
				name="email"
				placeholder="Email (user@ucsd.edu)"
				required
				className="p-4 my-2 rounded-md w-full text-white focus"
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					
				  }}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				required
				className="p-4 my-2 rounded-md w-full text-white focus"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
			/>
			<input
				type="password"
				name="confirm password"
				placeholder="Confirm Password"
				required
				className="p-4 my-2 rounded-md w-full text-white focus"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
			/>
				<input
				type="major" // what should this type be?
				name="major"
				placeholder="Major (Philosophical Engineering)"
				required
				className="p-4 my-2 rounded-md w-full text-white focus"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
			/>
				{/*
				<input 

				//**FIGURE OUT HOW TO FIX**
				//If this is here, it becomes too long and the page looks broken.

				
				type="graduation"
				name="graduation"
				placeholder="Graduation Year (2027)"
				required
				className="p-4 my-2 rounded-md w-full text-white focus"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
			/>
				*/}
			
			<button
				type="submit"
				className="block bg-black bg-opacity-50 p-4 mt-4 rounded-lg m-auto text-white font-semibold hover:bg-white hover:shadow-2xl shadow-blue-400 hover:text-black transition" 
				// style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
			>
				{props.buttonText}
			</button>
		</form>
	);
}
