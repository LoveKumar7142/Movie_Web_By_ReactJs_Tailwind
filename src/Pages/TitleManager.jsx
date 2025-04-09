// TitleManager.jsx
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function TitleManager() {
  const location = useLocation();

  const getTitle = (pathname) => {
    if (pathname === "/") return "Home | CineCraft";
    if (pathname === "/about") return "About | CineCraft";
    if (pathname === "/contact") return "Contact | CineCraft";
    if (pathname === "/movies") return "Movies | CineCraft";

    // Movie Detail - assuming route is /movies/:id
    if (pathname.startsWith("/movies/")) {
      const movieId = pathname.split("/")[2];
      return `Movie ${movieId} | CineCraft`; // You can enhance this later to use actual movie title
    }

    return "CineCraft";
  };

  return (
    <Helmet>
      <title>{getTitle(location.pathname)}</title>
    </Helmet>
  );
}

export default TitleManager;
