// Components
import Head from 'next/head'; 
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Bio from '../components/Bio';

// Context
import { Context } from './_app';

// Hooks
import { useContext } from 'react';

export default function Contact() {

    // Access the application states
    const { modal, darkTheme, mobileView } = useContext(Context);

    return(
        <div>
            <Head>
                <title>Boris Shvidchenko - Contact</title>
            </Head>
            <main>
                <Navbar />
                {modal && <Modal />}
                {mobileView.width <= 768 && <Bio />}
                {mobileView.width <= 768 && <ProjectContainer />}
                Contact Page
                {/* Contact Component */}
            </main>
        </div>
    )
}