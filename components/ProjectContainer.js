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

    // Project data array will be mapped and an individual Project component will be returned
    const projectComponents = projectData.map((project) => {
        return (
            <Project 
                id={project.id}
                key={project.key}
                title={project.title}
                summary={project.summary}
                description={project.description}
                img={project.img}
                url={project.url}
            />
        )
    });

    return (
        <main className='md:pb-20 md:px-20 xl:px-32 2xl:px-40 md:h-100vh lg:h-100vh'>
            <section className={`md:mt-8 ${darkTheme ? 'text-[#efefef]' : 'text-black'}`}>
                <h1 className='text-2xl mb-3 lg:mb-5'>Projects</h1>
                <p className='mb-2 lg:mb-5'>Some of the projects that I have worked on can be found here. Unless otherwise noted all of my work has been built with React, Next.js, and Tailwind CSS.  </p>
            </section>
            <section className='md:mt-12 grid md:grid-cols-2 2xl:grid-cols-3 md:gap-x-3 lg:gap-x-10 gap-y-10'>
                {projectComponents} 
            </section>
        </main>
    )
}