import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PostContainer = () => {
  const [form, setForm] = useState({ title: "", text: "" });

  const [post, setPost] = useState([]);
  const history = useHistory();

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
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      await axios.delete("/post", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updatePost = async () => {
    try {
      const updateUserPost = await axios.patch("/post/edit", form, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      console.log(updateUserPost.data);
    } catch (err) {
      console.log(err, "hi");
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
        console.log(err);
      }
    })();
    return () => source.cancel();
  }, []);

  return (
    <div>
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
            <button onClick={updatePost}>Update</button>
            <button onClick={deletePost}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
