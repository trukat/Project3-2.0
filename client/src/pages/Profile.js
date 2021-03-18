import React, { useContext, useEffect } from "react";
import PostContainer from "../components/PostContainer";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Profile = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  const deleteProfile = async () => {
    try {
      await axios.delete("/user", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>
        Hello my name is {userData.user?.firstName} {userData.user?.lastName}
      </h1>
      <PostContainer />
      <button onClick={deleteProfile}>Delete</button>
    </div>
  );
};

export default Profile;
