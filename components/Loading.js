// Hooks
import { usePromiseTracker } from 'react-promise-tracker';
import { useContext } from 'react';

// Context
import { Context } from '../pages/_app';

// Spinner
import { TailSpin } from 'react-loader-spinner';

export default function Loading() {

    // Access the application states
    const { darkTheme } = useContext(Context);

    // Boolean value where true = loading, false = not loading
    const { promiseInProgress } = usePromiseTracker(); 
    
    return (
        promiseInProgress &&
        <TailSpin
            height="25"
            width="25"
            color={`${darkTheme ? '#ffffff' : '#000000'}`}
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            visible={true}
        />
    )
}