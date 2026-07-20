import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchDetails = (endpoint) => {
   const [ loading, setLoading ] = useState(false);
   const [ data, setData ] = useState();

   const fetchDetailedData = async () => {
      try {
         setLoading(true);
         const response = await axios.get(endpoint);
         setData(response.data)
      } catch (error) {
         console.log(error)
      }finally{
         setLoading(false)
      }
   }
   
   useEffect(() => {
      fetchDetailedData()
   }, [endpoint])

   return { data, loading }
}
