"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (

        <header className='border-b border-[#272b33] bg-[#0d0f12]'>
            <nav className='relative flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
                <Link href="/" className='flex items-center gap-2'>
                    <Image src="/logo.png" alt='Fit Log' width={20}
                        height={20}
                        className='h-5 w-5'
                    />
                    <span className='text-s text-white font-medium'>FITLOG</span>
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 items-center hidden gap-2 lg:flex">

                    <Link href="/" className='rounded-full bg-[#ccff00] px-4 py-1 text-xs font-medium text-black'>Workouts</Link>
                    <Link href="/my-plan" className='text-xs font-medium text-[#8b909a] transition hover:text-white'>My plan</Link>

                </div>


                <div>

                </div>
                <div className="hidden items-center lg:flex gap-2">
                    <Link href="/my-plan" className='flex items-center gap-1 text-xs text-[#8b909a]'>Plan <span className='flex h-4 min-w-3 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[10px] font-semibold text-black'>0</span></Link>
                    <Link href="/my-plan" className='flex items-center gap-1.5 text-xs text-[#8b909a]'>Saved <span className='flex h-4 min-w-3 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[10px] font-semibold text-black'>0</span></Link>
                </div>
                <button type="button"
                    onClick={() => setMenuOpen(!menuOpen)} className='flex h-9 w-9 items-center justify-center rounded-md border border-[#272b33] text-white lg:hidden'
                    aria-label='Toggle menu'
                    aria-expanded={menuOpen}>{menuOpen ? "✕" : "☰"}</button>
            </nav>
            {menuOpen && (
                <div className='border-t border-[#272b33] px-4 py-4 lg:hidden'>
                    <div className="mx-auto flex max-w-7xl flex-col gap-2">
                        <Link href="/"
                            onClick={() => setMenuOpen(false)} className='bg-[#ccff00] px-4 py-3 text-xs font-medium text-black'>Workouts</Link>
                        <Link href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-4 py-3 text-xs font-medium text-[#8b909a] hover:bg-[#15181e] hover:text-white">My Plan
                        </Link>
                        <Link
                            href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 text-xs text-[#8b909a]"
                        >
                            Plan
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-semibold text-black">
                                0
                            </span>
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 text-xs text-[#8b909a]"
                        >
                            Saved
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#3a3f48] px-1.5 text-[10px]">
                                0
                            </span>
                        </Link>
                    </div>
                </div>
            )

            }
        </header>

    );
};

export default Navbar;