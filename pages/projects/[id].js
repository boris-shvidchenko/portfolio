// Components
import Head from 'next/head'; 
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';

// Context
import { Context } from '../_app';

// Hooks 
import { useContext } from 'react';

export default function ProjectInfo() {
    
    // Access the application states
    const { modal, darkTheme, mobileView, projectData } = useContext(Context);

    return (
        <main className={` ${darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]'}`}>
            <Head>
                <title>{`Boris Shvidchenko - ${projectData?.title}`}</title>
            </Head>
            <Navbar />
            <p>{projectData?.id}</p>
            <p>{projectData?.title}</p>
            <p>{projectData?.description}</p>
            <img src={projectData?.img}></img>
            <p>{projectData?.url}</p>
            {modal && <Modal />}

        </main>
    )
}