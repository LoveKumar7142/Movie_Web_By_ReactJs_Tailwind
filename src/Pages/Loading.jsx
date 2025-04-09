

// const Loading = () => {
//   return (
//     <div>
//       <h1>Loading....</h1>
//       <p>Please wait while we load the content.</p>
//     </div>
//   )
// }

// export default Loading;

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-spin-slow {
            animation: spin-slow 2s linear infinite;
          }
        `}
      </style>

      {/* 3D Style Pulse Ring */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-2 border-4 border-blue-600 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 bg-blue-500 rounded-full shadow-md shadow-blue-300"></div>
      </div>

      <h1 className="text-xl font-semibold animate-pulse text-blue-700">Loading...</h1>
      <p className="text-sm text-gray-600 mt-1">Please wait while we load the content.</p>
    </div>
  );
};

export default Loading;

