import { useParams } from "react-router-dom"
import { useFetchDetails } from '../hooks/useFetchDetails'
import { useSelector } from "react-redux";


const DetailPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURL)
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data:castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)

  const duration = data
  console.log(data)
  return (
    <div>

      <div className="w-full h-70 relative hidden lg:block">
        <div className="w-full h-full">
            <img 
            src={imageURL+data?.backdrop_path}
            className="h-full w-full object-cover" 
            alt="Backdrop image"
          />
          <div className="absolute w-full h-full top-0 bg-linear-to-t from-neutral-900/90 to-transparent"></div>
        </div>
      </div>
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className=" relative mx-auto lg:-mt-28 lg:mx-0 w-fit">
            <img 
            src={imageURL+data?.poster_path}
            className="h-80 w-60 object-cover rounded" 
            alt="Poster image"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">{data?.title || data?.name}</h2>
          <p className="text-neutral-400">{data.tagline}</p>

          <div>
            <p>
              Rating: {parseInt(data.vote_average).toFixed(1)}
            </p>
            <p>Views: {parseInt(data.vote_count)}</p>
            <p>
              {/* Duration: {duration[0]}h {duration[1]}m */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage