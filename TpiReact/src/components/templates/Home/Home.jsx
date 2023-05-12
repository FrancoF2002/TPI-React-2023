import { useAuth } from "../../../context/authContext";

const Home = () => {
  const { user, logOut, loading } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  if (loading) return <h1> Loading...</h1>;

  return (
    <div>
      <h1 className=" mx-auto text-4xl ">Welcome {user.displayName} {user.email}</h1>

      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};
export default Home;
