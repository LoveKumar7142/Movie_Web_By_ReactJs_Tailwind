// import { useEffect, useState } from "react";
// import { NavLink, useNavigate, useParams } from "react-router-dom"
// import { getMovieDetail } from "../api/GetMovieDetails";
// import Loading from '../Pages/Loading';

// const MovieDetails = () => {
//   const navigate = useNavigate();
//   const [movie,setMovie] = useState(null)
//   const[isLoading,setLoading] = useState(false);
//   const params = useParams();
//   console.log(params)
//   const movieID = params.movieID;

//   useEffect(()=>{
//     const LoadMovie = async() =>{
//       const data = await getMovieDetail(movieID);
//       setMovie(data);
//       setLoading(true);
//     }
//   LoadMovie();

//   },[movieID])
//   if(!isLoading) return <Loading />
//   console.log(movie)
//   const {
//     Title,
//     Year,
//     Rated,
//     Released,
//     Runtime,
//     Genre,
//     Director,
//     Writer,
//     Actors,
//     Plot,
//     Language,
//     Country,
//     Awards,
//     Poster,
//     Ratings,
//     Metascore,
//     imdbRating,
//     imdbVotes,
//     imdbID,
//     Type,
//     DVD,
//     BoxOffice,
//     Production,
//     Website,
//     Response
//   } = movie;

//   const get_Handle_Back_Btn = () =>{
//     navigate(-1);
//   }
  
  
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 pb-12">
      
//       {/* Go Back Button */}
//       <div className="p-4">
//         <button
//           onClick={get_Handle_Back_Btn}
//           className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
//         >
//           ← Go Back
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row w-full h-full max-w-7xl mx-auto px-4">
        
//         {/* Poster Section */}
//         <div className="w-full md:w-[40%] flex items-center justify-center p-4">
//           <div className="w-full max-w-sm relative rounded-xl overflow-hidden shadow-2xl">
//             <div className="relative pb-[140%]">
//               <img
//                 src={Poster}
//                 alt={Title}
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Movie Details */}
//         <div className="flex-1 p-8 space-y-4 text-black">
          
//           <div className="flex justify-between items-center flex-wrap gap-4">
//             <h1 className="text-5xl font-bold">{Title}</h1>

//             <button
//               className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition shadow"
//               onClick={() => alert("Redirecting to Watch Page...")}
//             >
//               ▶ Watch Now
//             </button>
//           </div>

//           <div className="flex gap-3 text-sm flex-wrap">
//             <span className="bg-yellow-400 text-black px-2 py-0.5 rounded font-semibold">
//               ⭐ {imdbRating}
//             </span>
//             <span className="bg-gray-200 px-2 py-0.5 rounded">{Year}</span>
//             <span className="bg-blue-200 px-2 py-0.5 rounded">{Rated}</span>
//             <span className="bg-purple-200 px-2 py-0.5 rounded">{Runtime}</span>
//           </div>

//           <p className="text-base text-gray-800">{Plot}</p>

//           <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
//             <p><strong>Genre:</strong> {Genre}</p>
//             <p><strong>Released:</strong> {Released}</p>
//             <p><strong>Language:</strong> {Language}</p>
//             <p><strong>Country:</strong> {Country}</p>
//             <p><strong>Director:</strong> {Director}</p>
//             <p><strong>Writer:</strong> {Writer}</p>
//             <p><strong>Actors:</strong> {Actors}</p>
//             <p><strong>Awards:</strong> {Awards}</p>
//             <p><strong>Box Office:</strong> {BoxOffice}</p>
//             <p><strong>Metascore:</strong> {Metascore}</p>
//             <p><strong>Votes:</strong> {imdbVotes}</p>
//             <p><strong>DVD:</strong> {DVD}</p>
//             <p><strong>Type:</strong> {Type}</p>
//             <p><strong>ID:</strong> {imdbID}</p>
//             <p><strong>Production:</strong> {Production}</p>
//             <p><strong>Response:</strong> {Response}</p>
//           </div>

//           {/* Ratings */}
//           <div>
//             <h3 className="font-semibold mt-3 mb-1">Ratings:</h3>
//             <ul className="list-disc list-inside text-sm text-gray-800">
//               {Ratings.map((rating, i) => (
//                 <li key={i}>
//                   <strong>{rating.Source}:</strong> {rating.Value}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Website Link */}
//           {Website !== "N/A" && (
//             <NavLink
//               to="/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-5 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold hover:opacity-90 transition"
//             >
//               Visit Official Site
//             </NavLink>
//           )}
//         </div> 
//       </div>
//     </div>
//   );
// };
// export default MovieDetails
// import { useEffect, useState } from "react";
// import { NavLink, useNavigate, useParams } from "react-router-dom"
import { NavLink, useLoaderData, useNavigate} from "react-router-dom"

const MovieDetails = () => {
  const navigate = useNavigate();

  const movie = useLoaderData();

  // const [movie,setMovie] = useState(null)
  // const[isLoading,setLoading] = useState(false);
  // const params = useParams();
  // console.log(params)
  // const movieID = params.movieID;

  // useEffect(()=>{
  //   const LoadMovie = async() =>{
  //     const data = await getMovieDetail(movieID);
  //     setMovie(data);
  //     setLoading(true);
  //   }
  // LoadMovie();

  // },[movieID])
  // if(!isLoading) return <Loading />
  // console.log(movie)
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
    Response
  } = movie;

  const get_Handle_Back_Btn = () =>{
    navigate(-1);
  }
  
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 pb-12">
      
      {/* Go Back Button */}
      <div className="p-4">
        <button
          onClick={get_Handle_Back_Btn}
          className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
        >
          ← Go Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full max-w-7xl mx-auto px-4">
        
        {/* Poster Section */}
        <div className="w-full md:w-[40%] flex items-center justify-center p-4">
          <div className="w-full max-w-sm relative rounded-xl overflow-hidden shadow-2xl">
            <div className="relative pb-[140%]">
              <img
                src={Poster}
                alt={Title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="flex-1 p-8 space-y-4 text-black">
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-5xl font-bold">{Title}</h1>

            <button
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition shadow"
              onClick={() => alert("Redirecting to Watch Page...")}
            >
              ▶ Watch Now
            </button>
          </div>

          <div className="flex gap-3 text-sm flex-wrap">
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded font-semibold">
              ⭐ {imdbRating}
            </span>
            <span className="bg-gray-200 px-2 py-0.5 rounded">{Year}</span>
            <span className="bg-blue-200 px-2 py-0.5 rounded">{Rated}</span>
            <span className="bg-purple-200 px-2 py-0.5 rounded">{Runtime}</span>
          </div>

          <p className="text-base text-gray-800">{Plot}</p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <p><strong>Genre:</strong> {Genre}</p>
            <p><strong>Released:</strong> {Released}</p>
            <p><strong>Language:</strong> {Language}</p>
            <p><strong>Country:</strong> {Country}</p>
            <p><strong>Director:</strong> {Director}</p>
            <p><strong>Writer:</strong> {Writer}</p>
            <p><strong>Actors:</strong> {Actors}</p>
            <p><strong>Awards:</strong> {Awards}</p>
            <p><strong>Box Office:</strong> {BoxOffice}</p>
            <p><strong>Metascore:</strong> {Metascore}</p>
            <p><strong>Votes:</strong> {imdbVotes}</p>
            <p><strong>DVD:</strong> {DVD}</p>
            <p><strong>Type:</strong> {Type}</p>
            <p><strong>ID:</strong> {imdbID}</p>
            <p><strong>Production:</strong> {Production}</p>
            <p><strong>Response:</strong> {Response}</p>
          </div>

          {/* Ratings */}
          <div>
            <h3 className="font-semibold mt-3 mb-1">Ratings:</h3>
            <ul className="list-disc list-inside text-sm text-gray-800">
              {Ratings.map((rating, i) => (
                <li key={i}>
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))}
            </ul>
          </div>

          {/* Website Link */}
          {Website !== "N/A" && (
            <NavLink
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold hover:opacity-90 transition"
            >
              Visit Official Site
            </NavLink>
          )}
        </div> 
      </div>
    </div>
  );
};
export default MovieDetails
