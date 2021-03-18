import React, { useContext, useEffect } from "react";
import PostContainer from "../components/PostContainer";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
    console.log("from home", userData.user);
  }, [userData.user, history]);

  return (
    <div>
      <h1>Hi from Profile</h1>
      <h3>
        Hello my name is {userData.user?.firstName} {userData.user?.lastName}
      </h3>
      <PostContainer />
    </div>
  );
};

export default Profile;
