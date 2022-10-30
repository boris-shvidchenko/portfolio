//  Components
import Image from 'next/image';
import Link from 'next/link';

// Heroicons

// Profile Picture
import profilePicture from '../public/images/profile-picture.png';

export default function Bio() {
    return (
        <main className='px-20 xl:px-32 2xl:px-40 h-full border'>
            <h1>About Me</h1>
            <section className='flex border'>
                <Image 
                    src={profilePicture}
                    width='500'
                    height='500'
                    alt='Profile picture'
                />
                <div>
                    <p>I am a front end developer with a background in geospatial data analysis and GIS. My interersts include web development and building functional and useful applications for a variety of fields. I enjoy the process of designing clean and effective websites, from the initial planning and design phases all the way to the problem solving and debugging, and the creativity and critical thinking that is required in order to successfully deploy a project. The more complex the build, the better!</p>
                    <p>Take a look at some of my personal projects and feel free to contact me at any time.</p>
                    <p>When not working you can find me paragliding, trail running, traveling, and training for future goals and adventures.</p>
                    <p>{'- Boris'}</p>
                    <div className='flex space-x-5 border'>
                        <Link 
                            href='https://github.com/boris-shvidchenko' 
                            target='_blank' 
                            className='flex space-x-2'>
                            <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="Boris Shvidchenko Github Profile" className='w-7 opacity-80' />
                            <p>Github</p>
                        </Link>
                        <Link 
                            href='https://www.linkedin.com/in/boris-shvidchenko-80101214b/' target='_blank' className='flex space-x-2'>
                            <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Boris Shvidchenko Linkedin Profile" className='w-7 opacity-80' />
                            <p>Linkedin</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}



