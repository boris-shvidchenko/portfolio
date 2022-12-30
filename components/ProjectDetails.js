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
        <main className={`px-7 pb-4 md:pb-10 pt-2 lg:px-20 md:pr-8 xl:px-32 2xl:px-40 md:mt-8 lg:flex md:space-x-6 lg:space-x-10 ${txtColor} ${bgColor}`}>
            <img src={`../${data?.img}`} alt={`Example image of the ${data?.title} build`} className='w-screen md:object-cover md:w-[500px] md:h-[204px] lg:h-[450px] lg:w-[450px] mt-5 md:mt-2 md:mb-8 md:mx-auto md:object-top lg:object-center rounded-md shadow-lg drop-shadow-lg' />
            <section className=' md:px-7 pb-5 md:pb-0 lg:text-md'>
                <p className='text-2xl mt-5 md:mt-0 mb-3 lg:mb-5 font-semibold'>{data?.title}</p>
                <p className='mb-2 lg:mb-4'>{data?.description}</p>
                <p className='mb-2 lg:mb-4'>{data?.description2}</p>
                <section className={`flex space-x-5 text-[#ffffff] ${txtColor2} md:text-black`}>
                    <Link 
                        href={data?.url} 
                        target='_blank' 
                        className={`w-28 mt-7 sm:left-0 sm:static flex space-x-2 rounded-md md:border ${borderMedium} p-2 ${bgBtnColor} ${bgColorMedium} min-w-fit onhover-social onhover`}
                        >
                        <p className='w-40 text-center'>Check out the build</p>
                    </Link>
                    <Link 
                        href={data?.url2} 
                        target='_blank' 
                        className={`w-28 mt-7 sm:left-0 sm:static flex space-x-2 rounded-md md:border ${borderMedium} p-2 ${bgBtnColor} ${bgColorMedium} min-w-fit onhover-social onhover`}
                        >
                        <p className='w-28 text-center'>Source Code</p>
                    </Link>
                </section>
            </section>
        </main>
    )
}
