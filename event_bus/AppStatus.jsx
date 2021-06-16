import { useEffect, useState } from "react"
import { globalEventBus } from "./globalEventBus";

export function AppStatus() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const fetchDataSuccessHandler = ({ loading, success, error }) => {
            setIsLoading(!!loading);
            setIsSuccess(!!success);
            setIsError(!!error);
        }
        globalEventBus.addEventListener('fetchData', fetchDataSuccessHandler);

        return () => globalEventBus.removeErrorListener(fetchDataSuccessHandler);
    }, []);


    return (<>
        { isLoading && <span>Loading</span>}
        { isSuccess && <span>Success</span> }
        { isError && <span>Error</span> }
    </>);
    
}