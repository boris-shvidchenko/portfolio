//  Components
import Project from './Project';

// Project Data
import { projectData } from '../projectData.js';

// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function ProjectContainer() {

    // Access the application states
    const { darkTheme } = useContext(Context);

    // Styles
    const textColor = darkTheme ? 'text-[#efefef]' : 'text-black';
    const bgColor = darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]';

    // Project data array will be mapped and an individual Project component will be returned
    const projectComponents = projectData.map((project) => {
        return (
            // Note: Passing props by {...project} doesnt work since the key prop is not recognized by Vercel on deployment.
            <Project 
                id = {project.id}
                key = {project.key}
                title = {project.title}
                summary = {project.summary}
                description = {project.description}
                description2 = {project.description2}
                img = {project.img}
                url = {project.url}
             />
        )
    });

    return (
        <main className={`proj-cont-main ${bgColor}`}>
            <div id='project-container' className='relative -top-[100px]'></div>
            <section className={`proj-cont-sec1 ${textColor}`}>
                <h1 className='header'>Projects</h1>
                <p className='mb-2 lg:mb-5'>Some of the projects that I have worked on can be found here. Unless otherwise noted all of my work has been built with React, Next.js, and Tailwind CSS.</p>
            </section>
            <section className='proj-cont-sec2'>
                {projectComponents} 
            </section>
        </main>
    )
}

