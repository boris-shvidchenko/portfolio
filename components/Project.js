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
        <div className={`proj-main max-w-96 ${bgColor} ${textColor}`}>
            <p className='proj-title'>{title}</p>
            <div className='proj-div1'> 
                <Link href={url} target='_blank'><img src={img} alt={`Example image of the ${title} build`} className='proj-link'/></Link>
            </div>
            <div className='proj-div2'>
                <p>{summary}</p>
                <div onClick={seeMoreInfo} className={`proj-info ${textColor2}`}>
                    <p className='proj-p'>More info</p>
                    <ChevronRightIcon className='h-4 w-4 pt-1'/>
                </div>
            </div>
        </div>
    )
}