import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

const PostsItem = (props) => {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div
          key={props.id}
          className="card p-3 w-[330px] shadow-lg rounded-lg flex gap-5 flex-col mt-56 mb-56"
        >
          <img src={props.post._links["wp:featuredmedia"][0].href} alt={""} />
          <h1 className="text-lg font-bold">{props.post.title.rendered}</h1>
          <h1
            className=" mt-5"
            dangerouslySetInnerHTML={{ __html: props.post.excerpt.rendered }}
          ></h1>
          <p>Last Modified: {props.post.modified}</p>
          <StarIcon className=" w-5 flex fill-red-600" />
        </div>
      </div>
    </>
  );
};

export default PostsItem;
