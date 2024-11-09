import Link from "next/link"

const Navbar = () =>{
    return(
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href="/" className="text-2xl font-bold text-white">TakaAnimeList</Link>
                <input placeholder="cari anime......"/>
            </div>
        </header>
    )
}
export default Navbar   