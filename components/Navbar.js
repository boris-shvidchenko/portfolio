// Components
import Link from 'next/link';
import Image from 'next/image';

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

    // Styles
    const navBorder = darkTheme ? 'border-b-[#404040]' : 'border-b-[#cacaca]';
    const navTextColor = darkTheme ? 'text-white' : 'text-black';
    const navBgColor = darkTheme ? 'bg-[#424141]' : 'bg-[#ffffff]';

    // Function used to open the modal by changing the modal state to true
    function openModal() {
        setModal(true);
    };

    // Function used to change the website theme (dark/light) by updating state to true/false
    function changeTheme() {
        setDarkTheme(prevTheme => !prevTheme);
    }

    return(
        <nav className={`${navBorder} border-b md:border-none shadow-md bg-[#272727] flex justify-between px-7 md:px-20 xl:px-32 2xl:px-40 py-5 items-center sticky top-0 ${navTextColor} ${navBgColor} z-10 headers`}>
            <div className='flex items-center space-x-4 sm:space-x-6 lg:space-x-8'>
                <Image src={!darkTheme ? '/images/profile-logo-light.png' : '/images/profile-logo-dark.png'} alt='Profile logo' height={40} width={40} />
                <Link href='/'><p className='text-2xl lg:text-4xl'>Boris Shvidchenko</p></Link>
            </div>
            <div className='hidden md:space-x-6 lg:space-x-10 mt-1 items-center md:flex'>
                <Link href='/'><p className='text-lg lg:text-xl w-20 text-center pl-1 onhover'>Home</p></Link>
                <Link href='/projects'><p className='text-lg lg:text-xl w-20 text-center onhover'>Projects</p></Link>
                <Link href='/contact'><p className='text-lg lg:text-xl w-20 text-center onhover'>Contact</p></Link>
                <SunIcon onClick={changeTheme} className='h-7 w-7 lg:h-8 lg:w-8 cursor-pointer'/>
            </div>
            {!modal && <Bars3Icon onClick={openModal} className='icons mt-1 md:hidden'/>}
        </nav>
    )
}

