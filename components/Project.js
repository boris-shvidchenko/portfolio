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

    // Styles
    const bgColor = darkTheme ? 'bg-[#424141]' : 'bg-[#efefef]';
    const textColor = darkTheme ? 'text-white' : 'text-black';
    const textColor2 = darkTheme ? 'text-[#cfd1d0]' : '';

    // Create a router to access project details page
    const router = useRouter();

    // Function will push to specified path when 'More Info' is clicked
    function seeMoreInfo() {
        router.push(`/projects/${id}`);
    }

    return (
        <div className={`max-h-[480px] max-w-96 p-3 shadow-lg drop-shadow-lg ${bgColor} rounded-md ${textColor}`}>
            <p className='mb-2 text-lg font-semibold'>{title}</p>
            <div className='overflow-hidden rounded-md shadow-md drop-shadow-sm'> 
                <Link href={url} target='_blank'><img src={img} alt={`Example image of the ${title} build`} className='project-image rounded-md hover:scale-105 duration-300'/></Link>
            </div>
            <div className='flex items-center justify-between mt-2'>
                <p>{summary}</p>
                <div onClick={seeMoreInfo} className={`flex items-center cursor-pointer onhover ${textColor2}`}>
                    <p className='italic w-20 text-center'>More info</p>
                    <ChevronRightIcon className='h-4 w-4 pt-1'/>
                </div>
            </div>
        </div>
    )
}