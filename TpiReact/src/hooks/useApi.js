

 const useApi = () => {

const apiKey = import.meta.env.VITE_API_MOVIES_TOKEN;

  const getTopRatedMovies = () => {

    for (let i = 0; i < 10 ; i++) {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => console.log(data.results[i].title))
      .catch((err) => console.log(err));
    }
    
  };


  

  return { getTopRatedMovies };


  //https://api.themoviedb.org/3/movie/upcoming
};
export default useApi;


TODO: "Video de youtube"

// import axios from 'axios'
// const apiKey = import.meta.env.VITE_API_MOVIES_TOKEN;

// const getTopRatedMovies = async () => {

//   const response = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
//   console.log(response)
// }

// export {
//   getTopRatedMovies
// }