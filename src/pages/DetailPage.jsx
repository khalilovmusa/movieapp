import { useParams } from "react-router-dom"
import { useFetchDetails } from '../hooks/useFetchDetails'


const DetailPage = () => {
  const params = useParams();
  const { data, loading } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data:castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage