import { useSelector } from "react-redux"

const Card = ({data, trending, index}) => {
   const imageURL = useSelector(state => state.movieoData.imageURL)
  return (
    <div className="w-full max-w-57.5 h-80 overflow-hidden rounded relative">
      <img
         src={imageURL+data.poster_path} 
      />
      <div className="absolute top-0">
         {
            trending && (
               <div>
                  #{index} Trending
               </div>
            )
         }
      </div>
    </div>
  )
}

export default Card