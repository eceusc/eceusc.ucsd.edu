import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import prisma from "./prisma";

export const authConfig: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Sign in",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "example@example.com",
				},
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				if (!credentials || !credentials.email || !credentials.password)
					return null;

				const dbUser = await prisma.user.findFirst({
					where: { email: credentials.email },
				});

				if (dbUser) {
					bcrypt
						.compare(credentials.password, dbUser.password)
						.then(function (result: boolean) {
							if (result) {
								const { password, createdAt, id, ...dbUserWithoutPassword } =
									dbUser;

								console.log(dbUserWithoutPassword);
								console.log(dbUser);
								return dbUserWithoutPassword;
							}
						});
				}

				return null;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
};

export async function loginIsRequiredServer() {
	const session = await getServerSession(authConfig);
	if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
	if (typeof window !== "undefined") {
		const session = useSession();
		if (!session) redirect("/");
	}
}
