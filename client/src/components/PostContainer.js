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

      setPost([...post, newPost]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    (async () => {
      try {
        const allPost = await axios.get("/post", {
          cancelToken: source.token,
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        });
        setPost(allPost.data);
      } catch (err) {
        console.log(err, "hello");
      }
    })();
    return () => source.cancel();
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
