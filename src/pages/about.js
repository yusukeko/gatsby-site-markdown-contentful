import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <h1>About</h1>
      <p>This page talks about what this website is about.</p>
      <p>
        If you have any questions, <Link to="/contact">please contact me</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
