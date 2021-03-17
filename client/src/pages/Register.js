import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <form onSubmit={submit}>
        <label>First Name</label>
        <input onChange={onChange} type="text" name="firstName" />
        <label>Last Name</label>
        <input onChange={onChange} type="text" name="lastName" />
        <label>Email</label>
        <input onChange={onChange} type="text" name="email" />
        <label>Password</label>
        <input onChange={onChange} type="text" name="password" />
        <label>Password Check</label>
        <input onChange={onChange} type="text" name="passwordCheck" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
