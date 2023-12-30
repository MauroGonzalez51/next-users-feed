"use client";

import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { Link as LinkInterface } from "@/app/lib/definitions";
import { FaAddressBook } from "react-icons/fa";
import { usePathname } from "next/navigation";

const links: LinkInterface[] = [
    {
        name: "Register",
        href: "/register",
        icon: FaAddressBook,
    },
];

function SideNav() {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 gap-y-2">
            <Link
                href="/"
                className="flex h-20 items-center justify-center md:items-end md:justify-start rounded-md bg-gray-600 p-4 md:h-40"
            >
                <div className="flex gap-x-4 items-center justify-center text-slate-200">
                    <IoHomeSharp className="text-3xl" />
                    <p className="text-base hidden md:inline-block">Home</p>
                </div>
            </Link>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-16 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-base font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 
                        
                            ${pathname === link.href && "text-blue-600"}
                        `}
                    >
                        <LinkIcon />
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}

export default SideNav;
