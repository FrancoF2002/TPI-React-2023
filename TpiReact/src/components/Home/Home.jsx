
import { useAuth } from "../../context/authContext";
import Loader from "../shared/Loader/Loader";
import Movies from "./Movies/Movies";
import Series from "./Series/Series";
const Home = () => {

  const {loading} = useAuth()

  if (loading) return <Loader />;

  return (
    <div className="">
      <h2 className=" sides-padding form-title text-start m-0 sm:text-2xl md:text-3xl lg:text-4xl mt-3 mb-2 ">
        Movies
      </h2>
      <Movies />
      <h2 className=" sides-padding form-title text-start m-0 sm:text-2xl md:text-3xl lg:text-4xl mb-3">
        Series
      </h2>
      <Series />
    </div>
  );
};
export default Home;
