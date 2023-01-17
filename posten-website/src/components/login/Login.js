import React from "react";
import LoginForm from "./LoginForm";

function login() {
  return (
    <>
      <div className=" flex flex-col justify-center min-h-screen overflow-hidden">
        <div className=" w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className=" text-3xl font-semibold text-center text-gray-700">
            Sign In
          </h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default login;
