import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';

export default function NavBar(): React.JSX.Element {
    return (
        <nav className='fixed flex flex-row justify-evenly items-center top-12 left-[48%] transform -translate-x-1/2 mt-1 bg-zinc-900 w-2/3 md:w-1/3 pl-10 pr-10 h-auto rounded-md pt-5 pb-5 gap-6 z-40'>
            <ul className='flex flex-row gap-6'>
                <Link href={"#intro"}>
                    <li className='cursor-pointer text-neutral-400 hover:text-white transition duration-300 ease-in-out'>
                        Go up
                    </li>
                </Link>
            </ul>
            <ul className='flex flex-row items-center gap-6'>
                <Link href={"https://github.com/Ghanem10"}>
                    <li>
                        <Icon.Github className='text-zinc-600 w-5 h-5 hover:text-zinc-400 transition duration-300 ease-in-out' />
                    </li>
                </Link>
                <Link href={"https://www.linkedin.com/in/ghanem-alhamad/"}>
                    <li>
                        <Icon.Linkedin className='text-zinc-500 w-5 h-5 hover:text-sky-700 transition duration-300 ease-in-out' />
                    </li>
                </Link>
                <Link href={"https://twitter.com/Gani10000"}>
                    <li>
                        <Icon.Twitter className='text-zinc-500 w-5 h-5 hover:text-cyan-500 transition duration-300 ease-in-out' />
                    </li>
                </Link>
            </ul>
        </nav>
    ); 
}
