"use client"
import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const CommonNav = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [{ name: "Home", href: "/" }, { name: "Templates", href: "/templates-preview" }, { name: "Contact Us", href: "/contact-us" }];


    return (
        <div>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                isBordered
                className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} shadow-sm`}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href="/" className='lg:-ms-32' passHref>
                            <Image
                                src="https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/wqen.png"
                                alt="logo"
                                width={112} // adjust as needed
                                height={72}
                                className=""
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-12 lg:ms-20" justify="center">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={item.name}>
                            <Link
                                color={index === 1 ? "warning" : "foreground"}
                                className="hover:text-purple-600 transition-colors"
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarMenu className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <Link
                                className="w-full py-2 text-lg"
                                color={index === 1 ? "warning" : "foreground"}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    )
}

export default CommonNav
