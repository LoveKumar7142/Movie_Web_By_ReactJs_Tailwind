// import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom';

// const Cards = ({currMovie}) => {
//   const {Title, Year, Type, Poster,imdbID} = currMovie;
//   return (
//     <li>
//         <div className="card">
//             <img src={Poster} alt={Title} />
//             <h3>{Title}</h3>
//             <p>{Year}</p>
//             <p>{Type}</p>
//             <NavLink to = {`/movies/${imdbID}`} >
//               <button>Watch Now</button>
//             </NavLink>
//         </div>
//     </li>
//   )
// }

// Cards.propTypes = {
//   currMovie: PropTypes.object.isRequired,
// }

// export default Cards

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Cards = ({ currMovie }) => {
  const { Title, Year, Type, Poster, imdbID } = currMovie;

  return (
    <li className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <NavLink to={`/movies/${imdbID}`} className="block h-full">
        {/* Poster Image */}
        <div className="relative w-full h-72 overflow-hidden">
          <img
            src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
            alt={Title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <p className="text-white text-sm font-semibold bg-black bg-opacity-60 px-4 py-1 rounded-full">
              Watch Now
            </p>
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-black truncate">{Title}</h3>
          <p className="text-sm text-gray-600">{Year} • {Type}</p>
        </div>
      </NavLink>
    </li>
  );
};

Cards.propTypes = {
  currMovie: PropTypes.object.isRequired,
};

export default Cards;
