import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import axios from "axios";
import PostEdit from "./PostEdit";
// import SearchBar from "./SearchBar";
// import ListPage from "./ListPage";

const Store = () => {
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_BASE_URL}wp/v2/posts?_embed`;
    axios.get(url).then((res) => {
      setPosts(res.data);
      setSearchResult(res.data);
    });
  }, []);
  console.log("posts", posts);

  return (
    <>
      <div className="">
        <div className=" fixed flex top-0 right-0 px-10 py-2 mr-6 sm:mt-36 mt-24 text-white border-none rounded-lg">
          <PostEdit />
        </div>
      </div>

      <div className=" mt-36 text-center font-bold">Important Posts</div>
      <div className=" mt-36 text-center font-bold">Posts</div>
      {/* <SearchBar posts={posts} setSearchResult={setSearchResult} />
      <ListPage searchResult={searchResult} /> */}
      <Posts />
    </>
  );
};

export default Store;
