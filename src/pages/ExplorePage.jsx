import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1)

  const fetchData = async() => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params : {
          page : pageNo
        }
      });
      console.log("asd",response.data.results)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <div>ExplorePage</div>
  )
}

export default ExplorePage