import React from "react";
import {postId, title} from "../src/components/postsPage";
import { Link } from "react-router-dom"; // If you're using React Router

function Post({ postId, title }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">
        <Link to={`/posts/${postId}`}>{title}</Link> {/* Adjust the link path */}
      </h2>
    </div>
  );
}

export default Post;
