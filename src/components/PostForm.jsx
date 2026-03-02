import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          placeItems: "center",
          margin: "6px auto",
          gap: "5px"
        }}
      >
        <MyInput
          type="text"
          placeholder="Post Title"
          value={post.title}
          onChange={(e) =>
            setPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <MyInput
          type="text"
          placeholder="Post Description"
          value={post.body}
          onChange={(e) =>
            setPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <MyButton onClick={addNewPost}>Create New Post</MyButton>
      </div>
    </form>
  );
}
