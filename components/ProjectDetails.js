//  Components
import Link from 'next/link';

// Context
import { Context } from '../pages/_app';

// Hooks 
import { useContext } from 'react';

export default function ProjectDetails({ data }) {

    // Access the application states
    const { darkTheme } = useContext(Context);

    // Styles
    const borderMedium = darkTheme ? 'md:border-none' : 'md:border-black';
    const bgBtnColor = darkTheme ? 'bg-[#424141]' : 'bg-gray-400';
    const bgColorMedium = darkTheme ? 'md:bg-[#424141]' : 'md:bg-[#d7dee1]';
    const bgColor = darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]';
    const txtColor = darkTheme ? 'text-white' : 'md:text-black';
    const txtColor2 = darkTheme ? 'md:text-white' : 'md:text-black';

    return (
        <main className={`proj-details-main ${txtColor} ${bgColor}`}>
            <img src={`../${data?.img}`} alt={`Example image of the ${data?.title} build`} className='proj-details-img' />
            <section className='proj-details-sec1 lg:text-md'>
                <p className='proj-details-title'>{data?.title}</p>
                <p className='para'>{data?.description}</p>
                <p className='para'>{data?.description2}</p>
                <section className={`proj-details-sec2 ${txtColor2}`}>
                    <Link 
                        href={data?.url} 
                        target='_blank' 
                        className={`proj-details-link ${borderMedium} ${bgBtnColor} ${bgColorMedium}`}
                        >
                        <p className='w-40 text-center'>Check out the build</p>
                    </Link>
                    <Link 
                        href={data?.url2} 
                        target='_blank' 
                        className={`proj-details-link ${borderMedium} ${bgBtnColor} ${bgColorMedium}`}
                        >
                        <p className='w-28 text-center'>Source Code</p>
                    </Link>
                </section>
            </section>
        </main>
    )
}
