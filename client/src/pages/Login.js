import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLogInForm = async (e) => {
    e.preventDefault();
    try {
      const loggedIn = await axios.post("/user/login", form);
      console.log(loggedIn);
    } catch (err) {
      console.log(err.response);
    }
  };
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
