// Hooks
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

export default function ContactContainer() {

    // Access the application states
    const { darkTheme } = useContext(Context);

    return(
        <div>Contact Page</div>
    )
}