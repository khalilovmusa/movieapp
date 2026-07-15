import { useSelector } from "react-redux"
import BannerHome from "../components/BannerHome"
import HorizontalScrollCard from "../components/HorizontalScrollCard"
import { useFetch } from "../hooks/useFetch";


const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData);
  const { data: nowPlayingData } = useFetch('/movie/now_playing');
  const { data: topRatedData } = useFetch('/movie/top_rated');
  const { data: popularTvShowData } = useFetch('/tv/popular');
  const { data: onTheAirShowData } = useFetch('/tv/on_the_air');


  return (
    <div className="w-full">
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"}/>
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"}/>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Shows"}/>
      <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"}/>
    </div>
  )
}

export default Home