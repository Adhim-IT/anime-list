
import Link from "next/link";
import AnimeList from "./components/AnimeList";
const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  )
  const anime = await response.json()
  
  return (
    <div>
      <div className="flex justify-between items-center  p-5 ">
      <h1 className="md:text-3xl text-2xl font-bold  text-gray-800">Paling Populer</h1>
      <Link href="/popular" className="md:text-xl text-sm  underline hover:text-blue-600 transition-colors duration-300" >Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-4 px-4"> 
      {anime.data.map(data => {
        return (
          <div key={data.mal_id} className="shadow-2xl">
            <AnimeList title={data.title} images={data.images.jpg.image_url} id={data.mal_id} />
            
          </div>
        )
      })}
     </div>
    </div>
  );
};
export default Home;
