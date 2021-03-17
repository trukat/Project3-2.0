import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) {
      history.push("/login");
    }
  }, [userData.user, history]);
  return (
    <div>
      <h1>Hello from Home</h1>
    </div>
  );
};

export default Home;
