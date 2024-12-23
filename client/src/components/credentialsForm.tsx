"use client";

import prisma from "@/lib/prisma";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import bcrypt from "bcryptjs";

interface CredentialsFormProps {
	csrfToken?: string;
	buttonText: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		switch (props.buttonText) {
			case "Sign up":
				const user = await prisma.user.create({
					data: {
						email: data.get("email") as string,
						password: bcrypt.hashSync(data.get("password") as string, 10),
					},
				});
				break;
			case "Sign in":
		}

		const signInResponse = await signIn("credentials", {
			email: data.get("email"),
			password: data.get("password"),
			redirect: false,
		});

		if (signInResponse && !signInResponse.error) {
			redirect("/profile/edit");
		} else {
			setError("Your email or password was incorrect.");
		}
	};

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
		</form>
	);
}
