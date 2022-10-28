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
    const { setModal } = useContext(Context);


    // Function used to close the modal by changing the modal state to false
    function closeModal() {
        setModal(false)
    };

    return (
        <div className='flex flex-col pt-52 items-center space-y-10 mx-auto fixed top-0 w-screen h-screen text-white bg-black/80'>
            <XMarkIcon className='icons fixed top-10 right-20' onClick={closeModal} />
            <Link href='/' onClick={closeModal}><p className='text-4xl'>Home</p></Link>
            <Link href='/projects' onClick={closeModal}><p className='text-4xl'>Projects</p></Link>
            <Link href='/contact' onClick={closeModal}><p className='text-4xl mb-6'>Contact</p></Link>
            <SunIcon className='h-9 w-9 cursor-pointer'/>
        </div>
    )
}