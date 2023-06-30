"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const navbarItems = [
    ["Home", "/"],
    ["Committees", "#committees"],
    ["Podcasts", "/podcasts"],
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
        scrollPosition > 50
          ? "flex flex-col md:flex-row items-center md:fixed relative top-0 w-screen h-fit p-4 bg-zinc-900 text-white transition shadow-2xl shadow-blue-400 z-50"
          : "flex flex-col md:flex-row items-center md:fixed relative top-0 w-screen h-fit p-4 bg-zinc-900 md:bg-transparent text-white transition z-50"
      }
    >
      <Image
        src="./images/logo.svg"
        width="200"
        height="65"
        alt="ECE USC Logo"
      />
      <div className="flex flex-col md:flex-row align-middle justify-end w-full">
        {navbarItems.map(([itemName, itemLink]) =>
          Navitem([itemName, itemLink])
        )}
      </div>
    </div>
  );
}

function Navitem([itemName, itemLink]: string[], pageName = "Home") {
  return (
    <Link
      href={itemLink}
      className={
        pageName === itemName
          ? "text-lg font-bold m-2 md:m-6"
          : "text-lg m-2 md:m-6"
      }
      key={itemName}
    >
      {itemName}
    </Link>
  );
}
