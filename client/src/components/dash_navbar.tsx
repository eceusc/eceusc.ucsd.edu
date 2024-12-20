"use client";

import Link from "next/link";

import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

export default function DashNavbar() {
	const navbarItems = [
		["Profile", "/dashboard/profile", <AiOutlineUser className="w-full" />],
		["Events", "/dashboard/events", <AiOutlineCalendar className="w-full" />],
		["Sign Out", "/dashboard/logout", <IoExitOutline className="w-full" />],
	];

	const navbarIcons = [
		<AiOutlineUser className="w-full" />,
		<AiOutlineCalendar className="w-full" />,
		<IoExitOutline className="w-full" />,
	];

	return (
		<div className="flex w-full bg-slate-700 text-white justify-between text-4xl">
			{navbarItems.map(([title, link, icon, clickFunc]) =>
				NavItem([title, link, icon])
			)}
		</div>
	);
}

function NavItem([title, link, icon]: (string | JSX.Element)[]) {
	return (
		<Link href={link as string} key={title as string}>
			<div className="w-full h-full hover:bg-slate-600 p-4 text-center">
				{icon}
				<span className="hidden md:block text-lg">{title}</span>
			</div>
		</Link>
	);
}
