import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState();
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLogInForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/login", form);
      console.log(data);
      setUserData({
        token: data.token,
        user: data.user,
      });

      localStorage.setItem("auth-token", data.token);
      history.push("/");
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    if (userData.user) history.push("/");
  }, [userData.user, history]);

  return (
    <div>
      <form onSubmit={submitLogInForm}>
        <label>Email</label>
        <input onChange={onChange} type="text" name="email" />
        <label>Password</label>
        <input onChange={onChange} type="text" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
