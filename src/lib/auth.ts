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
				if (!credentials || !credentials.email || !credentials.password) return null;

				const dbUser = await prisma.user.findFirst({
					where: { email: credentials.email },
				});

				if (dbUser) {
					const result = await bcrypt.compare(credentials.password, dbUser.password);
					if (result) {
						const { password, createdAt, ...dbUserWithoutPassword } = dbUser;
						return {
							...dbUserWithoutPassword,
							id: dbUser.id.toString(), // Convert `id` to string
						};
					}
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

export function useLoginIsRequiredClient() {
	const { data: session } = useSession();
	if (!session && typeof window !== "undefined") redirect("/");
}
