import Axios from "axios";
export const axios =()=>{
    const ISSERVER = typeof window === "undefined";
    if(!ISSERVER) {
        // Access localStorage
        Axios.create({
          baseUrl: "https://localhost:44369",
          
        });
    }


} 
