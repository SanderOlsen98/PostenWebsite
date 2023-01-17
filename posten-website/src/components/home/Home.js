import React, { useContext } from "react";
import "../../index.css";
import headerPicture from "../../img/postenbring.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Posts from "../store/Posts";

console.log(headerPicture);

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${headerPicture})`,
  };
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const navigate = useNavigate();

  return (
    <>
      {authContext.auth ? (
        <div style={backgroundImageStyle} className="px-8 py-32 bg-cover">
          <div className="flex flex-col items-center justify-center py-32 ">
            <h1 className="text-5xl font-bold text-white">Welcome</h1>
            <div className=" py-11">
              <button className="text-2xl font-semibold items-center justify-center bg-red-500 border-none mt-5 cursor-pointer rounded-lg text-white py-1 px-10 shadow-lg">
                <Link
                  to="/dashboard"
                  className=" hover:text-red-400 duration-500"
                >
                  View Dashboard
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={backgroundImageStyle} className="px-8 py-32 bg-cover">
          <div className="flex flex-col items-center justify-center py-32 ">
            <h1 className="text-5xl font-bold text-white">Welcome</h1>
            <div className=" py-11">
              <button className="text-2xl font-semibold items-center justify-center bg-red-500 border-none mt-5 cursor-pointer rounded-lg text-white py-1 px-10">
                <Link to="/login" className=" hover:text-red-400 duration-500">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-center text-3xl justify-start items-center font-bold p-10">
        Updates/News from Leader
      </h1>
      <Posts />
    </>
  );
}

export default Home;
