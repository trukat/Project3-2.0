import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PostContainer from "../components/PostContainer";
import UserContext from "../context/UserContext";

const Home = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <div>
      <h1>Hello from Home</h1>
      <h3>
        Hello my name is {userData.user?.firstName} {userData.user?.lastName}
      </h3>
      <PostContainer />
    </div>
  );
};

export default Home;
