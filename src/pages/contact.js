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
        If you have any questions about this site or anything I might be help,
        please contact{" "}
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="yusukeko0203@gmail.com"
        >
          <b>yusukeko0203@gmail.com</b>.
        </Link>
      </p>
      <p>
        or Twitter
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="https://twitter.com/yusuky"
          target="_blank"
        >
          <b>@yusuky</b>.
        </Link>
      </p>
    </Layout>
  )
}

export default contactPage
