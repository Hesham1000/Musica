import { useState, useEffect } from "react";

const SingersHook = (url) => {
    const [singers, setsinger] = useState(null);
    // const [isPending, setPending] = useState(true);
    // const [error404, setError] = useState(null);


    useEffect(() => {
        const ac = new AbortController();
        fetch(url, {signal: ac.signal})
        .then(res => {
            if(!res.ok){
                throw Error("A7A");
            }
            return res.json();
        })
        .then(data => {
            setsinger(data);
            // setPending(false);
            // setError(null);
        })
        .catch(err => {
            if(err.name === "AbortError"){
                console.log("Done");
            }
            else{
                // setPending(false);
                // setError(err.message);
            }
        })
        
        return () => ac.abort();
    }, [url]);
    return (singers);
}
export default SingersHook;