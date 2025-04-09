import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const is404 = error.status === 404;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
        
        {/* 🎬 Emoji */}
        <div className="text-7xl mb-4 animate-bounce">
          {is404 ? "🎬" : "🚧"}
        </div>

        {/* 🔢 Error Code */}
        <h1 className="text-4xl font-bold text-red-600 mb-2">
          {is404 ? "404 - Page Not Found" : "Oops! Something went wrong"}
        </h1>

        {/* 📜 Message */}
        <p className="text-gray-600 mb-4">
          {is404
            ? "Looks like you're lost in the movie multiverse 🎥"
            : error.statusText || error.message}
        </p>

        {error?.data && (
          <p className="text-sm text-gray-500 mb-4">{error.data}</p>
        )}

        {/* 🔘 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium text-sm transition"
          >
            🔙 Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium text-sm transition"
          >
            🏠 Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
