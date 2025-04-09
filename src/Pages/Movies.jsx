
import { useLoaderData } from 'react-router-dom';
import Cards from '../UI/Cards';
import { useState, useEffect } from 'react';

const Movies = () => {
  const searchMovie = useLoaderData();
  const [search, setSearch] = useState("");
  const [isSticky, setIsSticky] = useState(false); // For sticky state

  const searchData = searchMovie?.Search?.filter((currMovie) =>
    currMovie.Title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTimeout(() => {  // Adding delay when scroll happens
          setIsSticky(true);
        }, 500);  // Delay after 500ms
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 pb-12">

      {/* 🔝 Sticky Top Search Bar */}
      <div
        className={`w-full bg-white shadow-md py-4 px-6 z-50 transition-all duration-500 ease-in-out ${
          isSticky
            ? 'sticky top-[57px] transform translate-y-0 opacity-100'
            : 'relative transform translate-y-[-100px] opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Movies</h2>

          <div className="w-full sm:max-w-md">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-1.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-300 transition">
              <input
                type="text"
                placeholder="Search movies..."
                className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* Optional Search Icon or Disabled Button */}
              <button
                disabled
                className="ml-3 px-4 py-1 bg-gray-300 text-white text-sm font-medium rounded-full cursor-not-allowed"
              >
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🎬 Movie Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 mt-10">
        {searchData?.length > 0 ? (
          searchData.map((currMovie) => (
            <Cards key={currMovie.imdbID} currMovie={currMovie} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg font-medium">
            No movies found.
          </div>
        )}
      </ul>
    </div>
  );
};

export default Movies;

