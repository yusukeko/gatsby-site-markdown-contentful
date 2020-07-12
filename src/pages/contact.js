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
        Please contact <Link to="yusukeko@gmail.com">yusukeko@gmail.com</Link>
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
