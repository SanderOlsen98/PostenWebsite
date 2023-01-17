import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}wp/v2/posts`;
    console.log(url);
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, []);
  console.log("posts", posts);

  return (
    <>
      <h1 classname="text-4xl font-bold text-center">Posts</h1>
      {posts &&
        posts.map((post) => {
          console.log("post", post);
          return (
            <div className="max-w-full rounded overflow-hidden shadow-lg mt-36">
              <div key={post.id} className=" ">
                <div className="h-100 w-100">
                  <img
                    className=""
                    src="https://via.placeholder.com/500"
                    alt={post.title.rendered}
                  />
                </div>
                <h2 className="text-lg font-bold">{post.title.rendered}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                ></p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Posts;
