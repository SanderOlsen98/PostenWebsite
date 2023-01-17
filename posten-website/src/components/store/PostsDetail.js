import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Posts from "./Posts";
import Post_URL from "../../constants/PostApi";
import { BASE_API_URL } from "../../constants/api";
import PostsItem from "./PostsItem";

function PostDetail() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  if (!id) {
    navigate.push("/");
  }

  const url = "http://localhost/JWT-login/wp-json/wp/v2/posts" + "/" + id;
  console.log(url);

  useEffect(
    function () {
      async function getPost() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setPosts(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getPost();
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(posts);
  return (
    <div>
      <PostsItem post={posts} />
    </div>
  );
}

export default PostDetail;
