import Loader from "../Loader/Loader";

function Carousel({filmsArray}) {

  console.log(filmsArray)

  if(!filmsArray){

    return <Loader/>
  }

  return (
    <div
      id="default-carousel"
      className="relative w-full"
    >
      <div className="w-full h-auto">
        {filmsArray.map((film) => {
          <div className=" duration-700 ease-in-out">
            <img
              src={"https://image.tmdb.org/t/p/w500//2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg" }
              className=" block w-full h-96"
              alt="Carousel Imagen"
            />
          </div>;
        })}
      </div>

    </div>
  );
}

export default Carousel;
