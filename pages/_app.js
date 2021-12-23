import App from "next/app";
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";
import Layout from "../components/Layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";

class MyApp extends App {
  //Component is the Active page.
  static async getInitialProps({ Component, ctx }) {
    // Check if there is a token
    const { token } = parseCookies(ctx);

    let pageProps = {};

    // Those Are protected Routes
    const protectedRoutes =
      ctx.pathname === "/" ||
      ctx.pathname === "/[username]" ||
      ctx.pathname === "/post/[postid]";

    // If there is no User, that means the User is not loggedin.
    if (!token) {
      // If the User tries to navigate to protect routes and he is not Signedin, we redirect him to Home page
      protectedRoutes && redirectUser(ctx, "/login");
    } else {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      try {
        const res = await axios.get(`${baseUrl}/api/auth`, {
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
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
