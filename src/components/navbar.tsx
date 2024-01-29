"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar({
	pageLocation,
	hideInitialNav,
}: {
	pageLocation: string;
	hideInitialNav: boolean;
}) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [navbarOpen, setNavbarOpen] = useState(false);

	const navbarItems = [
		["Home", "/"],
		["Committees", "/#committees"],
		["Podcasts", "/podcasts"],
		["Team", "/team"], // combine team and join into a section on home page?
		["Join", "/join"],
		["Login", "/login"],
	];

	useEffect(() => {
		setScrollPosition(window.scrollY);
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={
				scrollPosition < 50 && hideInitialNav
					? "grid grid-cols-2 bg-zinc-900 text-white p-4 z-30 w-full fixed md:flex md:flex-row md:bg-transparent transition"
					: "grid grid-cols-2 bg-zinc-900 text-white p-4 z-30 w-full fixed md:flex md:flex-row md:shadow-lg md:shadow-blue-400 transition"
			}
		>
			<div className="">
				<a href="/">
					<Image
						src="/images/logo.svg"
						width={200}
						height={65}
						alt="ECE USC Logo"
					/>
				</a>
			</div>
			<div className="justify-self-end my-auto">
				<FaBars
					id="menu-expand"
					className={
						navbarOpen
							? "text-2xl transition-all rotate-90 md:hidden"
							: "text-2xl transition-all md:hidden"
					}
					onClick={() => setNavbarOpen(!navbarOpen)}
				/>
			</div>
			<div
				className={
					navbarOpen
						? "col-span-2 flex flex-col transition-all md:block"
						: "col-span-2 transition-all h-0 hidden md:flex md:h-fit md:ms-auto"
				}
				id="menu-items"
			>
				{navbarItems.map(([itemName, itemLink]) =>
					Navitem([itemName, itemLink], pageLocation)
				)}
			</div>
		</div>
	);
}

function Navitem([itemName, itemLink]: string[], location: string) {
	return (
		<Link
			href={itemLink}
			className={
				location === itemName
					? "text-lg font-bold m-2 md:m-6"
					: "text-lg m-2 md:m-6"
			}
			key={itemName}
		>
			{itemName}
		</Link>
	);
}
