import { Link } from "react-router-dom";

export default function DashboardMenu() {
  return (
    <nav>
      Sections: <Link to="/dashboard/posts">Posts</Link>
    </nav>
  );
}
