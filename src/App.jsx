import AppLayout from "./Pages/AppLayout"
import ErrorPage from "./Pages/ErrorPage"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Movies from "./Pages/Movies"
import MovieDetail from "./UI/MovieDetails"
import { getMovieData} from './api/GetMovieData'
import { getMovieDetail } from './api/GetMovieDetails'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout />,
      errorElement : <ErrorPage />,
      children : [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/about',
          element : <About />
        },
        {
          path : '/contact',
          element : <Contact />
        },
        {
          path : '/movies',
          element : <Movies />,
          loader : getMovieData,
        },
        {
          path : '/movies/:movieID',
          element : <MovieDetail />,
          loader : getMovieDetail,
        }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
