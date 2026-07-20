import axios from "axios"
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false)

   const fetchData = async() => {
      try{
         setLoading(true)
         const response = await axios.get(endpoint);
         setData(response.data.results)
      }catch(e) {
         console.log("error ocurred", e)
      }finally{
         setLoading(false)
      }
   }

   useEffect(() => {
      fetchData()
   },[endpoint])
   
   return { data, loading }
}