"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavigationClient({ session }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="z-20 text-xl relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden p-2 focus:outline-none text-accent-400 z-30 relative"
            >
                {isOpen ? (
                    <span className="text-[54px]">&times;</span> 
                ) : (
                    <span className="text-[32px]">&#9776;</span> 
                )}
            </button>


            {isOpen && (
                <div className="fixed inset-0 bg-primary-800 flex items-center justify-center text-primary-50 z-20">
                    <ul className="flex flex-col items-center gap-8">
                        <li>
                            <Link
                                href="/cabins"
                                className="hover:text-accent-400 transition-colors text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Cabins
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-accent-400 transition-colors text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            {session?.user?.image ? (
                                <Link
                                    href="/account"
                                    className="hover:text-accent-400 transition-colors flex items-center gap-4 text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <img
                                        src={session.user.image}
                                        className="h-8 rounded-full"
                                        alt={session.user.name}
                                        referrerPolicy="no-referrer"
                                    />
                                    <span>Guest area</span>
                                </Link>
                            ) : (
                                <Link
                                    href="/account"
                                    className="hover:text-accent-400 transition-colors text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Guest area
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            )}

            <ul className="hidden sm:flex gap-16 items-center">
                <li>
                    <Link href="/cabins" className="hover:text-accent-400 transition-colors">
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-accent-400 transition-colors">
                        About
                    </Link>
                </li>
                <li>
                    {session?.user?.image ? (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center gap-4"
                        >
                            <img
                                src={session.user.image}
                                className="h-8 rounded-full"
                                alt={session.user.name}
                                referrerPolicy="no-referrer"
                            />
                            <span>Guest area</span>
                        </Link>
                    ) : (
                        <Link href="/account" className="hover:text-accent-400 transition-colors">
                            Guest area
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
