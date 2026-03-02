import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { createRef } from "react"; // Add createRef

import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>There are no posts yet</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <TransitionGroup className="r-grid">
        {posts.map((post, index) => {
          // 1. Create a ref for this specific post
          const nodeRef = createRef(null);

          return (
            <CSSTransition
              key={post.id}
              nodeRef={nodeRef} // 2. Pass the ref to CSSTransition
              classNames="post"
              timeout={200}
            >
              {/* 3. Pass the same ref to your PostItem */}
              <PostItem
                ref={nodeRef} 
                remove={remove}
                number={index + 1}
                post={post}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}