import { useSelector } from 'react-redux'
import Card from './Card'

const HorizontalScrollCard = () => {
   const trendingData = useSelector(state => state.movieoData.bannerData)
   return (
      <div className="container mx-auto px-3 my-10">
         <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white">Trending Shows</h2>

         <div className="overflow-hidden">
            <div className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll">
               {
                  trendingData.map((data, i) => {
                     return(
                     <Card key={data.id} data={data} index={i+1} trending={true} />
                  )})
               }
            </div>
         </div>
      </div>
   )
}

export default HorizontalScrollCard