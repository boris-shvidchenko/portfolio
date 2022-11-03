// Components
import Head from 'next/head'; 
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import ProjectDetails from '../../components/ProjectDetails';

// Project Data
import { projectData } from '../../projectData';

// Context
import { Context } from '../_app';

// Hooks 
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function ProjectInfo({ data }) {

    // Access the application states
    const { modal, darkTheme, mobileView } = useContext(Context);

    // Access the page URL and extract the id parameter with router.query. Save the id parameter as 'id' for use in rendering (SSR) the page below.
    const router = useRouter();
    const { id } = router.query;

    // Iterate through the server side props (data) and if the id parameter (from the URL) matches any of the id properties in the server side props (data) then save the object to projData.
    let projData;
    data.forEach(project => {
        if (project.id === id) {
            projData = project;
        }
    })

    return (
        <main className={` ${darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]'}`}>
            <Head>
                <title>{`Boris Shvidchenko - ${projData.title}`}</title>
            </Head>
            <Navbar />
            <ProjectDetails data = {projData}  />
            {modal && <Modal />}
        </main>
    )
}

// Setting up server side props and  fetching data from projectData array for use in [id].js subpage
export async function getServerSideProps() {
    const data = projectData;
    return { props: { data } }
}