// Components
import Link from 'next/link';

// Heroicons
import { SunIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function Modal() {

    // Access the application states
    const { setModal, darkTheme, setDarkTheme } = useContext(Context);


    // Function used to close the modal by changing the modal state to false
    function closeModal() {
        setModal(false)
    };

    // Function used to change the website theme (dark/light) by updating state to true/false
    function changeTheme() {
        setDarkTheme(prevTheme => !prevTheme)
    }

    return (
        <nav className='flex flex-col pt-52 items-center space-y-10 mx-auto fixed top-0 w-screen h-screen text-white bg-black/80 z-20'>
            <XMarkIcon className='icons fixed top-10 right-7' onClick={closeModal} />
            <Link href='/' onClick={closeModal}><p className='text-4xl onhover'>Home</p></Link>
            <Link href='/projects' onClick={closeModal}><p className='text-4xl onhover'>Projects</p></Link>
            <Link href='/contact' onClick={closeModal}><p className='text-4xl  onhover mb-6'>Contact</p></Link>
            <SunIcon onClick={changeTheme} className='h-9 w-9 cursor-pointer'/>
        </nav>
    )
}