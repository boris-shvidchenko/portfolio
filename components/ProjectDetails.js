//  Components
import Link from 'next/link';

// Context
import { Context } from '../pages/_app';

// Hooks 
import { useContext } from 'react';

export default function ProjectDetails({ data }) {

    // Access the application states
    const { darkTheme } = useContext(Context);

    return (
        <main className={`px-7 pb-4 pt-5 md:px-20 xl:px-32 2xl:px-40 md:mt-8 md:flex md:space-x-6 lg:space-x-10 h-screen sm:h-full md:h-[calc(100vh-108px)] lg:h-[calc(100vh-112px)] ${darkTheme ? 'text-white' : 'md:text-black'}`}>
            <img src={data?.img} alt={`Example image of the ${data?.title} build`} className='w-screen md:w-80 md:h-80 lg:h-[450px] lg:w-[450px] md:mt-2 rounded-sm' />
            <section className='md:px-7 pb-5 md:pb-0'>
                <p className='text-2xl mt-5 md:mt-0 mb-3 lg:mb-5 font-semibold'>{data?.title}</p>
                <p className='mb-2 lg:mb-5'>{data?.description}</p>
                <Link 
                    href={data?.url} 
                    target='_blank' 
                    className={`w-28 mt-5 sm:left-0 sm:static flex space-x-2 rounded-md md:border ${darkTheme ? 'md:border-none' : 'md:border-black'} p-2 ${darkTheme ? 'bg-[#424141]' : 'bg-gray-400'} ${darkTheme ? 'md:bg-[#424141]' : 'md:bg-[#d7dee1]'} min-w-fit onhover-social onhover`}
                    >
                    <p>Check out the build</p>
                </Link>
            </section>
        </main>
    )
}
