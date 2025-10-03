import React from "react";

type Props = {
  post: BlogPost;
};

export default function Posts({ post }: Props) {
  const content = (
    <div className="px-5">
      <br />
      <p className="text-2xl">Identification: {post.id}</p>
      <p className="text-3xl">Date: {post.date}</p>
      <br />
      <p className="text-4xl">Title: {post.title}</p>
      <p className="text-2xl underline">Content:</p>
      <p className="text-xl">{post.body}</p>
      <hr />
    </div>
  );
  return content;
}
