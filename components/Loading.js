// Hooks
import { usePromiseTracker } from 'react-promise-tracker';

// Spinner
import { TailSpin } from 'react-loader-spinner';

export default function Loading() {

    // Boolean value where true = loading, false = not loading
    const { promiseInProgress } = usePromiseTracker(); 
    
    return (
        promiseInProgress &&
        <TailSpin
            height="25"
            width="25"
            color="#000000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            visible={true}
        />
    )
}