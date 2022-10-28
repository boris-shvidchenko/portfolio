// Components
import Head from 'next/head'; 
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

// Context
import { Context } from './_app';

// Hooks
import { useContext } from 'react';

export default function Contact() {

    // Access the application states
    const { modal } = useContext(Context);

    return(
        <div>
            <Head>
                <title>Boris Shvidchenko - Contact</title>
            </Head>
            <main>
                <Navbar />
                {modal && <Modal />}
                Contact Page
            </main>
        </div>
    )
}