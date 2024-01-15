import  {useState , useEffect} from "react";

const useIsOnline = () => {
    const [status , setStatus ] = useState(true)
    
    const isOnline = ()=>{
        setStatus(true);
    }
    
    const isOffline = () =>{
        setStatus(false)
    }
    useEffect(()=>{
        window.addEventListener('online',isOnline)
        window.addEventListener('offline',isOffline)

        return () => {
            //cleanup code
            window.removeEventListener('online' , isOnline)
            window.removeEventListener('offline' , isOffline)
        }
    },[])


    return status
}   
export default useIsOnline