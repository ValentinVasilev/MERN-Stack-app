import App from "next/app";
import Layout from "../components/Layout/Layout";
import "semantic-ui-css/semantic.min.css";

class MyApp extends App {
  static async getInitialProps(appContext) {
    //Component is the Active page.
    const { Component, ctx } = appContext;

    let getPageProps = {};

    if (Component.getInitialProps) {
      getPageProps = await Component.getInitialProps(ctx);
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
