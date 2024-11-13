"use client";

import Link from "next/link";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

export default function DashNavbar() {
	const navbarItems: [string, string, JSX.Element][] = [
		["Profile", "/dashboard/profile", <AiOutlineUser className="w-full" key="profile-icon" />],
		["Events", "/dashboard/events", <AiOutlineCalendar className="w-full" key="events-icon" />],
		["Sign Out", "/dashboard/logout", <IoExitOutline className="w-full" key="logout-icon" />],
	];

	return (
		<div className="flex w-full bg-slate-700 text-white justify-between text-4xl">
			{navbarItems.map(([title, link, icon], index) => (
				<NavItem key={index} title={title} link={link} icon={icon} />
			))}
		</div>
	);
}

function NavItem({
	title,
	link,
	icon,
}: {
	title: string;
	link: string;
	icon: JSX.Element;
}) {
	return (
		<Link href={link}>
			<div className="w-full h-full hover:bg-slate-600 p-4 text-center">
				{icon}
				<span className="hidden md:block text-lg">{title}</span>
			</div>
		</Link>
	);
}
