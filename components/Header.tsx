"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import brainwave from "@/assets/brainwave.svg";
import { navigation } from "@/constants/index";
import Button from "./Button";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HambugerMenu } from "@/components/design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-80/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link href={"#hero"} className="block w-[12rem] xl:mr-8">
          <Image src={brainwave} width={190} height={40} alt="BrainLight" />
        </Link>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                className={`block relative font-code text-2xl uppercase text-n-1 transition hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === window.location.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                key={item.id}
                href={item.url}
                onClick={handleClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HambugerMenu />
        </nav>
        <Link
          href={"#signup"}
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </Link>
        <Button className="hidden lg:flex" href={"#login"}>
          Sign in
        </Button>
        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;