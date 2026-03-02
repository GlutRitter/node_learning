import MyButton from "../UI/button/MyButton";
import { forwardRef } from "react";

const PostItem = forwardRef(({ post, number, remove }, ref) => {
  const { title, body } = post;
  return (
    <div className="post" ref={ref}>
      <div className="post_content">
        <strong>
          {number} {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
});

export default PostItem;
