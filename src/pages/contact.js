import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const contactPage = () => {
  return (
    <Layout>
      <Head title="Contact"></Head>
      <h1>Contact</h1>
      <p>
        If you have any questions about this site, please contact{" "}
        <Link to="yusukeko0203@gmail.com">yusukeko0203@gmail.com</Link>
      </p>
      <p>
        or, Twitter
        <Link to="https://twitter.com/yusuky" target="_blank">
          @yusuky
        </Link>
      </p>
    </Layout>
  )
}

export default contactPage
