import App from "next/app";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import baseURL from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";

import "semantic-ui-css/semantic.min.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    //Component is the Active page.

    // Check if there is a token
    const { token } = parseCookies(ctx);
    let getPageProps = {};

    const protectedRoutes = ctx.pathName === "/";

    // If there is no User, that means the User is not loggedin.
    if (!token) {
      // If the User tries to navigate to protect routes and he is not Sinedin, we redirect him to Home page
      protectedRoutes && redirectUser(ctx, "/login");
    } else {
      // If therer is User
      if (Component.getInitialProps) {
        getPageProps = await Component.getInitialProps(ctx);
      }
    }

    // We make call at the Back end to get Logged User credentials.
    try {
      const res = await axios.get(`${baseURL}/api/auth`, {
        headers: { Authorization: token },
      });

      const { user, userFollowStats } = res.data;

      if (user) !protectedRoutes && redirectUser(ctx, "/");

      pageProps.user = user;
      pageProps.userFollowStats = userFollowStats;
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }

    return { getPageProps };
  }

  render() {
    const { Component, getPageProps } = this.props;

    return (
      <Layout {...getPageProps}>
        <Component {...getPageProps} />
      </Layout>
    );
  }
}

export default MyApp;
