import React, { useState } from "react";

const PostContainer = () => {
  const [form, setForm] = useState({ title: "", text: "" });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = (e) => {
    e.preventDefault();
    console.log(form);
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
