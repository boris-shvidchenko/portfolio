//  Components
import Link from 'next/link';
import Project from './Project';

// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function ProjectContainer() {
    return (
        <div>
            Project Container
            <Project />    
        </div>
    )
}