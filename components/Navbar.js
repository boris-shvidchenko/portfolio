// Components
import Link from 'next/link';

export default function Navbar() {
    return(
        <nav className='flex justify-between mx-20 mt-7 items-center'>
            <h1 className='ml-3 text-3xl'>Boris Shvidchenko</h1>
            <div className='flex space-x-10'>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
            </div>

        </nav>
    )
}