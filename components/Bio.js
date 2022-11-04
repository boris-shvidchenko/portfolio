//  Components
import Link from 'next/link';

// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function Bio() {

    // Access the application states
    const { darkTheme } = useContext(Context);

    return (
        <main className='md:px-20 xl:px-32 2xl:px-40 md:h-[calc(100vh-140px)] lg:h-[calc(100vh-144px)]'>
            <section className='md:flex md:space-x-6 lg:space-x-10 md:mt-8'>
                <img src='../images/profile-picture.png' alt='Profile picture' className='w-screen md:w-80 h-full lg:w-[450px] md:mt-2 md:rounded-sm' />
                <div className={`bg-gradient-to-b from-black/70 md:bg-none text-white ${darkTheme ? 'md:text-[#efefef]' : 'md:text-black'} pt-32 md:pt-0 pb-8 md:pb-0 absolute top-0 px-7 md:px-none md:relative md:top-0`}>
                    <h1 className='text-2xl mb-3 lg:mb-5 font-semibold'>About Me</h1>
                    <div>
                        <p className='mb-2 lg:mb-5'>I am a front end developer with a background in geospatial data analysis and GIS. My interersts include web development and building functional and useful applications for a variety of fields. I enjoy the process of designing clean and effective websites, from the initial planning and design phases all the way to the problem solving and debugging, and the creativity and logic that is required in order to successfully deploy a project. The more complex the build, the better!</p>
                        <p className='mb-2 lg:mb-5'>Take a look at some of my personal projects and feel free to contact me at any time.</p>
                        <p className=''>When not working you can find me paragliding, trail running, traveling, and training for future goals and adventures.</p>
                    </div>
                    <div className='mt-5 sm:flex space-x-5 md:mt-3 lg:mt-10'>
                        <Link 
                            href='https://github.com/boris-shvidchenko' 
                            target='_blank' 
                            className={`w-28 flex space-x-2 rounded-md md:border ${darkTheme ? 'md:border-none' : 'md:border-black'} p-2 ${darkTheme ? 'bg-[#424141]' : 'bg-gray-400'} ${darkTheme ? 'md:bg-[#424141]' : 'md:bg-[#d7dee1]'} min-w-fit onhover-social onhover`}>
                            <img src='https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg' alt="Boris Shvidchenko Github Profile" className='w-7 opacity-80' />
                            <p>Github</p>
                        </Link>
                        <Link 
                            href='https://www.linkedin.com/in/boris-shvidchenko-80101214b/' 
                            target='_blank' 
                            className={`absolute left-2 w-28 mt-3 sm:mt-0 sm:left-0 sm:static flex space-x-2 rounded-md md:border ${darkTheme ? 'md:border-none' : 'md:border-black'} p-2 ${darkTheme ? 'bg-[#424141]' : 'bg-gray-400'} ${darkTheme ? 'md:bg-[#424141]' : 'md:bg-[#d7dee1]'} min-w-fit onhover-social onhover`}>
                            <img src='https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg' alt="Boris Shvidchenko Linkedin Profile" className='w-7 opacity-80' />
                            <p>Linkedin</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}



