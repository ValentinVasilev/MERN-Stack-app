import axios from "axios";
import baseUrl from "../utils/baseUrl";
import catchErros from "../utils/catchErrors";
import Router from "next/router";
import cookies from "js-cookie";

export const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

export const registerUser = async (
  user,
  profilePicUrl,
  setError,
  setLoading
) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseUrl}/api/signup`, {
      user,
      profilePicUrl,
    });

    setToken(res.data);
  } catch (error) {
    const errorMsg = catchErros(error);
    setError(errorMsg);
  }
};

export const loginUser = async (user, setError, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseUrl}/api/auth`, { user });

    setToken(res.data);
  } catch (error) {
    const errorMsg = catchErros(error);
    setError(errorMsg);
  }
};

export const redirectUser = (ctx, location) => {
  // This is if User is on Server Side
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};

const setToken = (token) => {
  cookie.set("token", token);
  Router.push("/");
};
