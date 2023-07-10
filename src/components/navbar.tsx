"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar({
  pageLocation,
  hideInitialNav,
}: {
  pageLocation: string;
  hideInitialNav: boolean;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const navbarItems = [
    ["Home", "/"],
    ["Committees", "/#committees"],
    ["Podcasts", "/podcasts"],
    ["Our Team", "/team"],
    ["Join", "/join"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={
        scrollPosition < 50 && hideInitialNav
          ? "flex flex-col md:flex-row items-center md:fixed relative top-0 w-screen h-fit p-4 bg-zinc-900 md:bg-transparent text-white transition z-50"
          : "flex flex-col md:flex-row items-center md:fixed relative top-0 w-screen h-fit p-4 bg-zinc-900 text-white transition shadow-2xl shadow-blue-400 z-50"
      }
    >
      <a href="/"><Image
        src="/images/logo.svg"
        width="200"
        height="65"
        alt="ECE USC Logo"
      /></a>
      <div className="flex flex-col md:flex-row align-middle justify-end w-full">
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
