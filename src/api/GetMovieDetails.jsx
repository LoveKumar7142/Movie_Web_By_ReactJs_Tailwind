// export const getMovieDetail = async(movieID) => {
//     try{
//         const response = await fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=${import.meta.env.VITE_API_KEY}`);
//         const data = await response.json();
//         return data;
//     }catch(error){
//         console.log(error)
//     }
// }
export const getMovieDetail = async({params}) => {
    const movieID = params.movieID;
    try{
        const response = await fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}