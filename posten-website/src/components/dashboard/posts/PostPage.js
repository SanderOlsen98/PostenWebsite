import { Link } from "react-router-dom";
import DashboardPosts from "../DashboardPosts";
import PostList from "./PostList";

export default function PostPage() {
  return (
    <DashboardPosts>
      <p>
        <Link to="/dashboard/posts/add">Add post</Link>
      </p>
      <PostList />
    </DashboardPosts>
  );
}
