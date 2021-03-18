import React, { useState } from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [form, setForm] = useState();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post("/user/register", form);
      console.log(newUser);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="registerBody">
      <form className="registerForm" onSubmit={submit}>
        <h1 className="registerHeader">Register</h1>
        <input
          onChange={onChange}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="password"
          placeholder="password"
        />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="passwordCheck"
          placeholder="Re-enter password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
