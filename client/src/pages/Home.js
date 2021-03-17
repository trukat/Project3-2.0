import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = (props) => {
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
      <button onClick={props.logout}>logout</button>
    </div>
  );
};

export default Home;
