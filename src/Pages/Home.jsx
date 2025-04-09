// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center justify-center text-center px-4">
//       <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6">
//         Welcome to <span className="text-blue-600">CineMate</span>
//       </h1>

//       <p className="text-lg text-gray-600 mb-8 max-w-2xl">
//         Discover top-rated, trending, and classic movies with an intuitive UI. Built for movie lovers by Love Kumar 💙
//       </p>
//       <a href="/movies" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition">
//         Explore Movies
//       </a>
//     </div>
//   );
// };

// export default Home;
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      
      {/* 🏠 Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        {/* ✅ Online Background Image */}
        <div className="absolute inset-0">
        <img
            src="https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg"
            alt="Movie background"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
        </div>

        {/* Content over image */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 animate-pulse">
            Welcome to <span className="text-blue-500">CineCraft</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Your personal gateway to the world of cinema. Discover movies, explore genres, and stay entertained.
          </p>
          <Link
            to="/movies"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            🎬 Explore Movies
          </Link>
        </div>
      </section>

      {/* 🚀 Features */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-2 text-blue-400">Live Search</h3>
            <p className="text-gray-400">
              Search your favorite movies instantly with real-time suggestions powered by OMDb API.
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-2 text-green-400">Responsive Design</h3>
            <p className="text-gray-400">
              Optimized for mobile, tablet, and desktop for the best viewing experience.
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-2 text-pink-400">Modern UI</h3>
            <p className="text-gray-400">
              Built with React & Tailwind for a fast, modern and smooth movie browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* 👤 Developer Note */}
      <section className="py-10 px-6 text-center bg-gray-950">
        <h2 className="text-3xl font-bold text-white mb-4">Built by Love Kumar</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I’m a frontend developer passionate about crafting clean, dynamic user experiences. CineCraft is a project that reflects my love for movies and coding. Let’s connect!
        </p>
        <div className="mt-6">
          <Link
            to="/about"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition"
          >
            More About Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;



// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">

//       {/* 🏠 Hero Section with fixed background image */}
//       <section className="relative h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
        
//         {/* ✅ Background Image */}
//         <img
//           src="https://images.unsplash.com/photo-1598899134739-40a8fca2941e?auto=format&fit=crop&w=1740&q=80"
//           alt="movie background"
//           className="absolute inset-0 w-full h-full object-cover opacity-30"
//         />

//         {/* ✅ Dark overlay */}
//         <div className="absolute inset-0 bg-black opacity-60" />

//         {/* ✅ Content */}
//         <div className="relative z-10 max-w-3xl">
//           <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 animate-pulse">
//             Welcome to <span className="text-blue-500">CineMate</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-300 mb-8">
//             Your personal gateway to the world of cinema. Discover movies, explore genres, and stay entertained.
//           </p>
//           <a
//             href="/movies"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
//           >
//             🎬 Explore Movies
//           </a>
//         </div>
//       </section>

//       {/* 🚀 Features Section (no change) */}
//       <section className="py-20 px-6 bg-gray-950">
//         <div className="max-w-6xl mx-auto text-center mb-10">
//           <h2 className="text-4xl font-bold text-white mb-2">Why CineMate?</h2>
//           <p className="text-gray-400">Built with modern technologies to deliver the best movie experience</p>
//         </div>
//         <div className="grid gap-8 md:grid-cols-3">
//           <div className="bg-gray-800 p-6 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition">
//             <div className="text-4xl mb-4">🔍</div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-400">Live Search</h3>
//             <p className="text-gray-300">Find your favorite movies instantly using real-time search powered by OMDb API.</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition">
//             <div className="text-4xl mb-4">📱</div>
//             <h3 className="text-xl font-semibold mb-2 text-green-400">Responsive Design</h3>
//             <p className="text-gray-300">Optimized for all devices — mobile, tablet, and desktop. CineMate looks great everywhere.</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition">
//             <div className="text-4xl mb-4">⚙️</div>
//             <h3 className="text-xl font-semibold mb-2 text-pink-400">Modern UI</h3>
//             <p className="text-gray-300">Built with React and Tailwind CSS to ensure fast, smooth, and beautiful user experience.</p>
//           </div>
//         </div>
//       </section>

//       {/* 👤 Developer Note */}
//       <section className="py-10 px-6 text-center bg-gray-900">
//         <h2 className="text-3xl font-bold text-white mb-4">Built by Love Kumar</h2>
//         <p className="text-gray-400 max-w-2xl mx-auto">
//           I’m a frontend developer passionate about crafting clean, dynamic user experiences. CineMate is a project that reflects my love for movies and coding. Let’s connect!
//         </p>
//         <div className="mt-6">
//           <a
//             href="/about"
//             className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition"
//           >
//             More About Me
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


