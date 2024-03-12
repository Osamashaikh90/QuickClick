import axios from "axios";
import { useEffect, useState } from "react";
// import { getUsername } from "../helpers/Helper";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;


/** custom hook */
const useFetch = (query)=>{
    const [getData, setData] = useState({ isLoading : false, apiData: undefined, status: null, serverError: null })

    useEffect(() => {
if(!query) return;
        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading: true}));
                
                const { data, status } = await axios.get(`/auth/${query}`);

                if(status === 201){
                    setData(prev => ({ ...prev, isLoading: false}));
                    setData(prev => ({ ...prev, apiData : data, status: status }));
                }

                setData(prev => ({ ...prev, isLoading: false}));
            } catch (error) {
                setData(prev => ({ ...prev, isLoading: false, serverError: error }))
            }
        };
        fetchData()

    }, [query]);

    return [getData, setData];
}

export default useFetch;