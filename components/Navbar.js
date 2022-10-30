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
    const { modal, setModal, darkTheme, setDarkTheme } = useContext(Context);

    // Function used to open the modal by changing the modal state to true
    function openModal() {
        setModal(true)
    };

    // Function used to change the website theme (dark/light) by updating state to true/false
    function changeTheme() {
        setDarkTheme(prevTheme => !prevTheme)
    }

    return(
        <nav className='flex justify-between px-7 md:px-20 xl:px-32 2xl:px-40 py-9 items-center sticky top-0 bg-white z-10'>
            <h1 className='font-semibold text-3xl lg:text-4xl'>Boris Shvidchenko</h1>
            <div className='hidden md:space-x-8 lg:space-x-10 mt-1 items-center md:flex'>
                <Link href='/'><p className='text-lg lg:text-xl'>Home</p></Link>
                <Link href='/projects'><p className='text-lg lg:text-xl'>Projects</p></Link>
                <Link href='/contact'><p className='text-lg lg:text-xl'>Contact</p></Link>
                <SunIcon onClick={changeTheme} className='icons'/>
            </div>
            {!modal && <Bars3Icon onClick={openModal} className='icons mt-1 md:hidden'/>}
        </nav>
    )
}

