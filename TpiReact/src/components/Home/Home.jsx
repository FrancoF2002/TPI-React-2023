import { Nav, NavItem, NavLink } from "reactstrap";
import { useAuth } from "../../context/authContext";

import { useState, useEffect } from "react";
import CardMovie from "./Movies/Movies";

const Home = () => {
  const { user, logOut, loading } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  if (loading) return <h1> Loading...</h1>;

  return (
    <div className="">
      <button onClick={handleLogOut}>Log out</button>

      <CardMovie />
    </div>
  );
};
export default Home;
