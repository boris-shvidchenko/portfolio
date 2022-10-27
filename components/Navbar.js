// Components
import Link from 'next/link';

// Heroicons
import { SunIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';


export default function Navbar() {
    return(
            <nav className='flex justify-between px-20 py-9 items-center sticky top-0 bg-white z-100 border-b border-b-stone-500 md:border-none'>
                <h1 className='text-3xl'>Boris Shvidchenko</h1>
                <div className='hidden space-x-10 mt-1 items-center md:flex'>
                    <Link href='/about'><p className='text-lg lg:text-xl'>About</p></Link>
                    <Link href='/projects'><p className='text-lg lg:text-xl'>Projects</p></Link>
                    <Link href='/contact'><p className='text-lg lg:text-xl'>Contact</p></Link>
                    <SunIcon className='icons'/>
                </div>
                <Bars3Icon className='icons mt-1 md:hidden'/>

            </nav>
    )
}

