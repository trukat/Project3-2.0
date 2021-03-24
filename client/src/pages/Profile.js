import React, { useContext, useEffect,Component } from "react";

import PostContainer from "../components/PostContainer";
import UserContext from "../context/userContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./pages.css";
import Upload from "./Upload";


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
    <div className="grid-container">
      <div className="profileHeader">
        <h1>
          Hello my name is {userData.user?.firstName} {userData.user?.lastName}
        </h1>
      </div>
      <div className="aboutMe">
        <h2>AboutMe</h2>
       <Upload/> 
      </div>
      <div className="postContainer">
        <PostContainer />
      </div>
      <div className="allPost">
        <button onClick={deleteProfile}>Delete</button>
      </div>
    </div>
  );
};

export default Profile;
