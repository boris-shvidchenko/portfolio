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
    const { modal, setModal, mobileView, darkTheme, setDarkTheme } = useContext(Context);

    // Function used to open the modal by changing the modal state to true
    function openModal() {
        setModal(true)
    };

    // Function used to change the website theme (dark/light) by updating state to true/false
    function changeTheme() {
        setDarkTheme(prevTheme => !prevTheme)
    }

    return(
        <nav className={`${darkTheme ? 'border-b shadow-md border-b-[#1a1a1a] md:border-none' : 'border-b shadow-md border-b-[#cacaca] md:border-none'} bg-[#272727] flex justify-between px-7 md:px-20 xl:px-32 2xl:px-40 py-5 items-center sticky top-0 ${darkTheme ? 'text-white' : 'text-black'} ${darkTheme ? 'md:bg-[#424141]' : 'bg-[#ffffff]'} z-10 headers`}>
            <div className='flex items-center space-x-6 lg:space-x-8'>
                <Image src={!darkTheme ? '/images/profile-logo-light.png' : '/images/profile-logo-dark.png'} alt='Profile logo' height={40} width={40} />
                <Link href='/'><p className='font-semibold text-2xl lg:text-4xl'>Boris Shvidchenko</p></Link>
            </div>
            <div className='hidden md:space-x-6 lg:space-x-10 mt-1 items-center md:flex'>
                <Link href='/'><p className='text-lg lg:text-xl onhover'>Home</p></Link>
                <Link href='/projects'><p className='text-lg lg:text-xl onhover'>Projects</p></Link>
                <Link href='/contact'><p className='text-lg lg:text-xl onhover'>Contact</p></Link>
                <SunIcon onClick={changeTheme} className='icons'/>
            </div>
            {!modal && <Bars3Icon onClick={openModal} className='icons mt-1 md:hidden'/>}
        </nav>
    )
}

