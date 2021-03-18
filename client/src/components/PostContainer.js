import React, { useState, useEffect } from "react";
import axios from "axios";

const PostContainer = () => {
  const [form, setForm] = useState({ title: "", text: "" });

  const [post, setPost] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      const newPost = await axios.post("/post", form, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const allPost = await axios.get("/post", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      setPost(allPost.data);
    })();
  }, []);

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

      <div className="allPost">
        {post.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
