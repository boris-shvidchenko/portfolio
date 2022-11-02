//  Components
import Link from 'next/link';

// Heroicons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function Project({ title, summary, img, url }) {

    // Access the application states
    const { darkTheme } = useContext(Context);

    return (
        <div className='border border-black p-2'>
            <p>{title}</p>
            <p>{summary}</p>
            <img src={img} className='project-image'/>
            <Link href={url} target='_blank'>Visit</Link>
            <Link href='#' className='flex items-center cursor-pointer onhover'>
                <p className='text-lg'>More info</p>
                <ChevronRightIcon className='h-5 w-5 pt-1'/>
            </Link>
        </div>
    )
}