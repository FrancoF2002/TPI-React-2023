import CardMovie from "./Movies/Movies";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import Loader from "../shared/Loader/Loader";
const Home = () => {
  const { user, logOut, loading } = useAuth();

  if (loading) return <Loader />;
  // useEffect(() => {
  //   console.log(user);
  // }, []);

  return (
    <div className="">
      <CardMovie />
    </div>
  );
};
export default Home;
