// Context
import { Context } from '../_app';

// Hooks 
import { useContext } from 'react';

export default function ProjectDetails() {

    // Access the application states
    const { modal, darkTheme, mobileView, projectData } = useContext(Context);

    return (
        <main className=''>
            <p>{projectData?.id}</p>
            <p>{projectData?.title}</p>
            <p>{projectData?.description}</p>
            <img src={projectData?.img}></img>
            <p>{projectData?.url}</p>
        </main>
    )
}