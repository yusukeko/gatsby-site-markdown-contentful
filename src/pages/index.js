import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hell World!</h1>
      <p>
        I'm Yusuke, a product manager and a full-stack web developer living in
        San Francisco Bay Area with my wife and 3 beautiful daughters.
      </p>
      <p>
        Need a technical product manager who can code and build APIs?
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
