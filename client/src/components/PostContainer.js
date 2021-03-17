import React, { useState } from "react";
import axios from "axios";

const PostContainer = () => {
  const [form, setForm] = useState({ title: "", text: "" });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();

    try {
      const newPost = await axios.post("/post", form, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      console.log(newPost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Hello from post container</h1>
      <form onSubmit={submitPost}>
        <label>Title:</label>
        <input onChange={onChange} type="text" name="title" />
        <label>Text:</label>
        <input onChange={onChange} type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostContainer;
