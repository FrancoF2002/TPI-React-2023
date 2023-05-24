





const useApi = () => {

const apiKey = import.meta.env.VITE_API_MOVIES_TOKEN;

  const getTopRatedMovies = () => {

 
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };


  

  return { getTopRatedMovies };


  //https://api.themoviedb.org/3/movie/upcoming
};
export default useApi;