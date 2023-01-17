import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import { AuthContext } from "../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const authContext = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      authContext.setAuth(response.data);
      navigate("/");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
      console.log(error.response.data);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" mt-6">
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div className=" mb-2">
            <input
              name="username"
              placeholder="Username"
              className=" block w-full px-4 py-2 mt-2 text-gray-600-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <input
              name="password"
              placeholder="Password"
              className=" block w-full px-4 py-2 mt-2 text-gray-600-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
              {...register("password", { required: true })}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <div className=" mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-600">
              {submitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
