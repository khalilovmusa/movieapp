import { useParams } from "react-router-dom";
import { useFetchDetails } from '../hooks/useFetchDetails';
import { useFetch } from '../hooks/useFetch';
import { useSelector } from "react-redux";
import moment from "moment";
import { Divider } from "../components/Divider";
import HorizontalScrollCard from '../components/HorizontalScrollCard';


const DetailPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURL)
  const { data, loading } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data:castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const { data: similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const { data: recommendedData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)

  const duration = (parseInt(data?.runtime)/60).toFixed(1).split(".");
  const writer = castData?.crew?.filter((crew) => crew.job === "Writer")?.map((el) => el?.name)?.join(', ')
  if (loading) {
    return <div className="w-full h-full flex align-middle items-center">Loading...</div>
  }

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
        <div className=" relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
            <img 
            src={imageURL+data?.poster_path}
            className="h-80 w-60 object-cover rounded" 
            alt="Poster image"
          />
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">{data?.title || data?.name}</h2>
          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />

            <div className="flex items-center gap-3">
              <p>
                Rating : {parseInt(data?.vote_average).toFixed(1)}+
              </p>
              <span>|</span>
              <p>
                Views : {parseInt(data?.vote_count)}
              </p>
              <span>|</span>
              <p>
                Duration : {duration[0]}h {duration[1]}m
              </p>
            </div>
            <Divider />
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
            <p>{data?.overview}</p>
              <Divider />
            <div className="flex gap-3 items-center my-3 text-center">
              <p>
                Status : {data?.status}
              </p>
              <span>|</span>
              <p>
                Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>
                Revenue : {parseInt(data?.revenue)}
              </p>
            </div>
              <Divider />  
          </div>

          <div>
            <p><span className="text-white">Director</span> : {castData?.crew[0]?.name}</p>
              <Divider />
            <p><span className="text-white">Writer</span> : {writer}</p>
          </div>
          <Divider />

          <h2 className="font-bold text-lg">Cast : </h2>

          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
            {
              castData?.cast?.filter((el) => el?.profile_path).map((cast, index) => (
                <div key={index}>
                  <div>
                    <img 
                      src={imageURL+cast.profile_path} 
                      alt={cast.name}
                      className="w-24 h-24 object-cover rounded-full"
                     />
                  </div>
                  <p className="font-bold text-center text-sm">{cast.name}</p>
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div>
        <HorizontalScrollCard 
          data={similarData} 
          heading={`Similar ${params?.explore}${params.explore === "tv" ? " Shows" : "'s"}`}  
          media_type={params?.explore}
          />

          <HorizontalScrollCard
          data={recommendedData}
          heading={`Recommended ${params?.explore}${params.explore === "tv" ? " Shows" : "'s"}`}
          media_type={params?.explore}
        />
      </div>
    </div>
  )
}

export default DetailPage