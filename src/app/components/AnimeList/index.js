import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-2">
      <Link href={`/${id}`} className="block cursor-pointer group">
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
          <Image
            src={images}
            alt={title}
            width={350}
            height={350}
            className="w-full max-h-64 object-cover transition-opacity duration-300 group-hover:opacity-90 "
          />
        </div>
        <h3 className="font-bold text-md md:text-xl p-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </Link>
    </div>

  );
};
export default AnimeList;
