import React, { useEffect, useState } from "react";
import axios from "axios";
import { StarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let url = `${process.env.REACT_APP_BASE_URL}wp/v2/posts?_embed`;
    axios.get(url).then((res) => {
      setPosts(res.data);
      console.log(res.data);
    });
  }, []);
  console.log("posts", posts);

  return (
    <>
      <div className="w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
        {posts &&
          posts.map((post) => {
            console.log("post", post);
            return (
              <>
                <div
                  key={post.id}
                  className="card p-3 w-[330px] shadow-lg rounded-lg flex gap-5 flex-col cursor-pointer"
                >
                  <a
                    key={posts.id}
                    post={post}
                    onClick={() => {
                      navigate(`/detail/${post.id}`);
                    }}
                  >
                    <img
                      className=" h-[200px] w-[300px]"
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={"Post Image"}
                    />
                    <h2 className="text-lg font-bold mt-5">
                      {post.title.rendered}
                    </h2>
                    <p
                      className=" mt-5"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>
                    <p className=" mt-5">Last Modified: {post.modified}</p>
                  </a>
                  <StarIcon className=" w-5 flex fill-red-600" />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
