// Components
import Link from 'next/link';

// Heroicons
import { SunIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';

// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function Navbar() {

    // Access the application states
    const { modal, setModal } = useContext(Context);

    // Function used to open the modal by changing the modal state to true
    function openModal() {
        setModal(true)
    };

    return(
        <nav className='flex justify-between px-20 py-9 items-center sticky top-0 bg-white z-1 border-b border-b-stone-500 md:border-none'>
            <h1 className='text-3xl'>Boris Shvidchenko</h1>
            <div className='hidden space-x-10 mt-1 items-center md:flex'>
                <Link href='/'><p className='text-lg lg:text-xl'>Home</p></Link>
                <Link href='/projects'><p className='text-lg lg:text-xl'>Projects</p></Link>
                <Link href='/contact'><p className='text-lg lg:text-xl'>Contact</p></Link>
                <SunIcon className='icons'/>
            </div>
            {!modal && <Bars3Icon onClick={openModal} className='icons mt-1 md:hidden'/>}
        </nav>
    )
}

