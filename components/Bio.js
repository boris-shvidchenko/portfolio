//  Components
import Link from 'next/link';

// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function Bio() {

    // Access the application states
    const { darkTheme, mobileView } = useContext(Context);

    // Styles
    const textColor = darkTheme ? 'md:text-[#efefef]' : 'md:text-black';
    const linkBorderColor = darkTheme ? 'md:border-none' : 'md:border-black';
    const linkBgColor = darkTheme ? 'bg-[#424141]' : 'bg-gray-500';
    const linkBgColorMedium = darkTheme ? 'md:bg-[#424141]' : 'md:bg-[#d7dee1]';
    const linkSmScrn = mobileView.width <= 470 ? 'w-6' : '';
    const bgColor = darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]';

    return (
        <main className={`bio-main ${bgColor}`}>
            <section className='bio-sec'>
                <img src='../images/profile-picture.png' alt='Profile picture' className='bio-img' />
                <div className={`bio-div1 md:px-none ${textColor}`}>
                    <h1 className='header'>About Me</h1>
                    <div className={`${mobileView.width <= 470 ? 'text-sm -mt-2' : ''}`}>
                        <p className='para'>I am a front end developer with a background in geospatial data analysis and GIS. My interests include web development and building functional applications for a variety of uses. I enjoy the process of designing clean and effective websites, from the initial planning and design phases all the way to the problem solving and debugging, and the creativity and logic that is required in order to successfully deploy a project. The more complex the build, the better!</p>
                        <p className='para'>Take a look at some of my personal projects and feel free to contact me at any time.</p>
                        <p>When not working you can find me paragliding, trail running, traveling, and training for future goals.</p>
                    </div>
                    <div className={`${mobileView.width <= 470 ? 'flex' : ''} bio-social`}>
                        <Link 
                            href='https://github.com/boris-shvidchenko' 
                            target='_blank' 
                            className={`${mobileView.width <= 470 ? 'text-sm' : ''} ${linkBorderColor} ${linkBgColor} ${linkBgColorMedium} bio-link`}>
                            <div className='social'>
                                <img src='https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg' alt="Boris Shvidchenko Github Profile" className={`w-7 ${linkSmScrn} opacity-80`} />
                                <p>Github</p>
                            </div>
                        </Link>
                        <Link 
                            href='https://www.linkedin.com/in/boris-shvidchenko-80101214b/' 
                            target='_blank' 
                            className={`${mobileView.width <= 470 ? 'text-sm' : ''} ${linkBorderColor} ${linkBgColor} ${linkBgColorMedium} bio-link absolute left-2  mt-3 sm:mt-0 sm:left-0 sm:static ${mobileView.width <= 470 ? 'mt-0 left-[135px]' : ''}`}>
                            <div className='social'>
                                <img src='https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg' alt="Boris Shvidchenko Linkedin Profile" className={`w-7 ${linkSmScrn} opacity-80`} />
                                <p className='w-[4.2rem]'>Linkedin</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}



