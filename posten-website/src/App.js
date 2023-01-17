import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Navbar from "./components/layout/Navbar";
import Store from "./components/store/Store";
import Home from "./components/home/Home";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/layout/footer/Footer";
import PostPage from "./components/dashboard/posts/PostPage";
import AddPost from "./components/dashboard/posts/AddPost";
import EditPost from "./components/dashboard/posts/EditPost";
import PostDetail from "./components/store/PostsDetail";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<DashboardLayout />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/dashboard/posts" element={<PostPage />} />
            <Route path="/dashboard/posts/add" element={<AddPost />} />
            <Route path="/dashboard/posts/edit/:id" element={<EditPost />} />
            <Route path="/detail/:id" element={<PostDetail />} />
          </Routes>
        </Router>
      </AuthProvider>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default App;
