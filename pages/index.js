import React from "react";
import axios from "axios";

function Index({ posts }) {
  return (
    <div>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <h1 key={post._id}>{post.title}</h1>)}
    </div>
  );
}

// Here we get posts and pass them as a Chield on the Index page.
Index.getInitialProps = async (ctx) => {
  try {
    const res = axios.get("https://jsonplaceholder.typicode.com/posts");

    const { name } = ctx.query;
    console.log(name);

    return {
      posts: (await res).data,
    };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default Index;
