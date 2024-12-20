import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Image from "next/image";

import { ReactNode } from "react";

import DashNavbar from "@/components/dash_navbar";

export default async function ProfilePage() {
	await loginIsRequiredServer();

	const session = await getServerSession(authConfig);

	return (
		<>
			<DashNavbar />
			<Section title="Dashboard" desc="a dashboard u idiot">
				Welcome back, {session?.user?.name}
			</Section>
			<Image
				src={session?.user?.image ? session?.user?.image : "default.png"}
				width={100}
				height={100}
				alt="Profile Picture"
				className="rounded-full"
			></Image>
		</>
	);
}

function Section({
	title,
	desc,
	children,
}: {
	title: String;
	desc?: String;
	children: ReactNode;
}) {
	return (
		<div>
			<div className="w-full p-4 text-4xl text-white">
				<span>Dashboard</span>
			</div>
			<div className="w-full p-4 pt-0 text-white text-2xl">{children}</div>
		</div>
	);
}
