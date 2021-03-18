import React, { useContext, useEffect } from "react";
import PostContainer from "../components/PostContainer";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <div>
      <h1>
        Hello my name is {userData.user?.firstName} {userData.user?.lastName}
      </h1>
      <PostContainer />
    </div>
  );
};

export default Profile;
