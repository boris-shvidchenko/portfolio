//  Components
import Link from 'next/link';

// Heroicons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// Hooks
import { useContext } from 'react';
import { useRouter } from 'next/router';

// Context
import { Context } from '../pages/_app';

export default function Project({ id, title, summary, img, url }) {

    // Access the application states
    const { darkTheme } = useContext(Context);

    // Create a router to access project details page
    const router = useRouter();

    // Function will push to specified path when 'More Info' is clicked
    function seeMoreInfo() {
        router.push(`/projects/${id}`)
    }

    return (
        <div className='border border-black p-2'>
            <p>{title}</p>
            <p>{summary}</p>
            <img src={img} className='project-image'/>
            <Link href={url} target='_blank'>Visit</Link>
            <div onClick={seeMoreInfo} className='flex items-center cursor-pointer onhover'>
                <p className='text-lg'>More info</p>
                <ChevronRightIcon className='h-5 w-5 pt-1'/>
            </div>
        </div>
    )
}