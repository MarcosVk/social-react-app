import { useState,useEffect } from "react"
import axios from 'axios'
const useAxiosFetch = (dataUrl) => {
    const[data,setData]=useState([])
    const[fetchErr,setFetchErr]=useState('')
    const[isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        let isMounted=true
        const handleData=async(url)=>{
            try{
                const response=await axios.get(url);
                if(isMounted){
                    setData(response.data)
                    setFetchErr("")
                }
                
            }
            catch(err)
            {
                if(isMounted)setFetchErr(err.message)
            }
            finally{
                isMounted && setTimeout(()=>{
                    setIsLoading(false)
                },2000)
            }
        }
        handleData(dataUrl)
        return()=>{isMounted=false}
    },[dataUrl])
    
  return {data,fetchErr,isLoading}
}

export default useAxiosFetch