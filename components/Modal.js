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
    const { setModal, setDarkTheme, mobileView } = useContext(Context);

    // Function used to close the modal by changing the modal state to false
    function closeModal() {
        setModal(false);
    }

    // Function used to change the website theme (dark/light) by updating state to true/false
    function changeTheme() {
        setDarkTheme(prevTheme => !prevTheme);
    }

    return (
        <nav onClick={closeModal} className='modal'>
            <XMarkIcon className='icons fixed top-7 right-7'/>
            <Link href='/'><p className='modal-link'>Home</p></Link>
            <Link href={mobileView.width <= 768 ? '/#project-container' : '/projects'}><p className='modal-link'>Projects</p></Link>
            <Link href={mobileView.width <= 768 ? '/#contact-container' : '/contact'}><p className='modal-link mb-6'>Contact</p></Link>
            <SunIcon onClick={changeTheme} className='h-9 w-9 cursor-pointer'/>
        </nav>
    )
}