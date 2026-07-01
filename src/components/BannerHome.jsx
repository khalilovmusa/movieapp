import { useSelector } from "react-redux"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import { useEffect, useState } from "react"

const BannerHome = () => {
   const bannerData = useSelector(state => state.movieoData.bannerData)
   const imageURL = useSelector(state => state.movieoData.imageURL)
   const [currentImage, setCurrentImage] = useState(0)

   const handleNext = () => {
      if (currentImage < bannerData.length - 1 ){
         setCurrentImage(prev => prev + 1)
      }
   }

   const handlePrevious = () => {
      if(currentImage > 0){
         setCurrentImage(prev => prev - 1)
      }
   }

   useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(prev => {
         if( prev < bannerData.length - 1) {
            return prev + 1
         }
         return 0
        })
      }, 4000)

      return () => clearInterval(interval)
   },[bannerData, imageURL])

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh]">
         {
            bannerData.map((data, index) => {
               return(
                  <div key={index} className="min-w-full min-h-112.5 lg:min-h-full overflow-hidden relative group transition-all duration-500" style={{ transform: `translateX(-${currentImage * 100}%)`}}>
                     <div className="w-full h-full">
                        <img 
                           src={imageURL+data.backdrop_path}
                           className="h-full w-full object-cover"
                        />
                     </div>

                     {/* next and previous image change button */}
                     <div className="absolute top-0 w-full h-full hidden items-center justify-between px-3 group-hover:lg:flex">
                        <button 
                        className="bg-white p-1 rounded-full text-xl z-10 text-black cursor-pointer"
                        onClick={handlePrevious}
                        >
                           <FaAngleLeft />
                        </button>
                        <button 
                        className="bg-white p-1 rounded-full text-xl z-10 text-black cursor-pointer"
                        onClick={handleNext}
                        >
                           <FaAngleRight />
                        </button>
                     </div>

                     <div className="absolute top-0 w-full h-full bg-linear-to-t from-neutral-900 to-transparent"></div>
                     <div className="container mx-auto">
                        <div className=" w-full absolute bottom-0 max-w-md px-3">
                           <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">{data?.title || data?.name}</h2>
                           <p className="text-ellipsis line-clamp-3 my-1">{data.overview}</p>
                           <div className="flex items-center gap-4">
                              <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                                 <span>|</span>
                              <p>Views: {Number(data.popularity).toFixed(0)}</p>
                           </div>
                           <button className="px-4 py-2 text-black font-bold rounded-full mt-4 bg-white hover:bg-linear-to-l from-red-700 to-orange-500 shadow-md transition-all duration-300 hover:scale-105">
                              Play Now
                           </button>
                        </div>
                     </div>
                  </div>
               )
            })
         }
      </div>
    </section>
  )
}

export default BannerHome