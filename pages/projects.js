// Components
import Head from 'next/head'; 
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import ProjectContainer from '../components/ProjectContainer';

// Context
import { Context } from './_app';

// Hooks 
import { useContext } from 'react';

export default function Projects() {

    // Access the application states
    const { modal } = useContext(Context);

    return(
        <div>
            <Head>
                <title>Boris Shvidchenko - Projects</title>
            </Head>
            <main>
                <Navbar />
                {modal && <Modal />}
                <ProjectContainer />
            </main>
        </div>
    )
}