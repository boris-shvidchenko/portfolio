// Components
import Head from 'next/head'; 
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import Bio from '../components/Bio';
import ProjectContainer from '../components/ProjectContainer';
import ContactContainer from '../components/ContactContainer';

// Context
import { Context } from './_app';

// Hooks 
import { useContext } from 'react';


export default function Projects() {

    // Access the application states
    const { modal, darkTheme, mobileView } = useContext(Context);

    return(
        <main className={`${darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]'}`}>
            <Head>
                <title>Boris Shvidchenko - Projects</title>
            </Head>
            <Navbar />
            {modal && <Modal />}
            {mobileView.width <= 768 && <Bio />}
            <ProjectContainer />
            {mobileView.width <= 768 && <ContactContainer />}
        </main>
    )
}