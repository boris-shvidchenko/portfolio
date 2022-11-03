//  Components
import Link from 'next/link';

// Context
import { Context } from '../pages/_app';

// Hooks 
import { useContext } from 'react';

export default function ProjectDetails() {

    // Access the application states
    const { modal, darkTheme, mobileView, projectData } = useContext(Context);

    return (
        <main className={`px-7 pt-5 md:px-20 xl:px-32 2xl:px-40 md:mt-8 md:flex md:space-x-6 lg:space-x-10 h-100vh md:h-[calc(100vh-140px)] lg:h-[calc(100vh-144px)] ${darkTheme ? 'text-white' : 'text-black'}`}>
            <img src={projectData?.img} alt={`Example image of the ${projectData?.title} build`} className='w-screen md:w-80 md:h-80 lg:h-[450px] lg:w-[450px] md:mt-2 rounded-sm' />
            <section className='pb-5 md:pb-0'>
                <p className='text-2xl mt-5 mb-3 lg:mb-5 font-semibold'>{projectData?.title}</p>
                <p className='mb-2 lg:mb-5'>{projectData?.description}</p>
                <Link 
                    href={projectData?.url} 
                    target='_blank' 
                    className={`w-28 mt-5 sm:left-0 sm:static flex space-x-2 rounded-md md:border ${darkTheme ? 'md:border-none' : 'md:border-black'} p-2 ${darkTheme ? 'bg-[#424141]' : 'bg-gray-400'} ${darkTheme ? 'md:bg-[#424141]' : 'md:bg-[#d7dee1]'} min-w-fit onhover-social`}
                    >
                    <p>Check out the build</p>
                </Link>
            </section>
        </main>
    )
}
