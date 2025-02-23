"use client";
import Image from "next/image";
import React from "react";

import { useTheme } from "./ThemeChanger/ThemeContext";
import Link from "next/link";
import GoBackButton from "./ui/GoBackButton";
import { usePathname } from "next/navigation";

export const ThemeButton = ({ className }: { className?: string }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const Moon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 text-gray-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 118.646 3.646a7 7 0 1011.708 11.708z"
        />
      </svg>
    );
  };
  const Sun = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-gray-900"
      >
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${className} w-8  p-2 h-8 bg-slate-400 text-white font-semibold rounded-full shadow-inner  transition-all delay-200 duration-300 outline-none`}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
};

const navLinksArr = [
  {
    id: 0,
    label: "Home",
    path: "/",
  },
  {
    id: 1,
    label: "About",
    path: "/about",
  },
  {
    id: 2,
    label: "Products",
    path: "/products",
  },
];

const HeaderForDesktop = () => {
  const { isDarkMode } = useTheme();

  return (
    <header className="hidden lg:flex justify-between items-center w-screen px-8 py-4">
      {/* navigation for desktop screen */}
      <Image
        src="/shoe_website_logo.png"
        alt="shoe_website_logo"
        className={`rounded-full shadow-inner w-20 h-20 ${
          isDarkMode ? " bg-gray-100" : "bg-slate-400"
        }`}
        width={1000}
        height={1000}
      />

      <nav className="flex justify-between items-center w-2/4">
        {navLinksArr.map(({ id, label, path }) => (
          <Link key={id} className="" href={path}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-10">
        <ThemeButton />
        <Link href={"/login"} className="loginBtn">
          Login →{" "}
        </Link>
      </div>
    </header>
  );
};

const HeaderForMobile = () => {
  const { isDarkMode } = useTheme();

  const mobileNavLinks = [
    {
      id: 0,
      pathToImage: "/home.png",
      pathToPage: "/",
      label: "Home",
    },
    {
      id: 1,
      pathToImage: "/products.png",
      pathToPage: "/products",
      label: "Products",
    },
    {
      id: 2,
      pathToImage: "/cart.png",
      pathToPage: "/myCart",
      label: "Cart",
    },
    {
      id: 3,
      pathToImage: "/user.png",
      pathToPage: "/login",
      label: "Profile",
    },
  ];

  const currentPage = usePathname();
  return (
    <header className={` lg:hidden  w-screen`}>
      <nav
        className={`px-4 py-2  rounded-b-xl backdrop-blur-2xl fixed top-0 flex   w-full justify-between`}
      >
        <GoBackButton />
        <div className="flex gap-2">
          <ThemeButton />
          <Image
            className={`${isDarkMode ? "invert" : "invert-0"} w-8 h-8`}
            src="/menu.png"
            alt="alt"
            width={1000}
            height={1000}
          />
        </div>
      </nav>
      <nav
        className={`h-16 px-4 py-2 ${
          isDarkMode
            ? "bg-slate-800 text-slate-200"
            : "bg-slate-400 text-slate-800"
        } rounded-t-3xl  fixed bottom-0 flex justify-between w-full items-center`}
      >
        {mobileNavLinks.map(({ id, pathToImage, pathToPage, label }) => (
          <div key={id}>
            <Link
              className="flex flex-col justify-center items-center"
              href={pathToPage}
            >
              <Image
                src={pathToImage}
                className={`${isDarkMode ? "invert" : "invert-0"} w-8 h-8`}
                alt="alt"
                width={1000}
                height={1000}
              />
              <span
                className={`text-center relative  ${
                  currentPage === pathToPage
                    ? "text-[#d94125] font-semibold"
                    : "text-gray-600"
                }`}
              >
                {label}
                {currentPage === pathToPage && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#d94125] rounded-full"></span>
                )}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export { HeaderForDesktop, HeaderForMobile };
