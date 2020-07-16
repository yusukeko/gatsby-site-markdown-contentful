import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <h1>About</h1>
      <p>
        I was born in Japan and have been a resident of San Francisco Bay Area
        in the US for over a decade. I'm passionate about learning and pondering
        all things in tech (and food!). So living in Silicon Valley, the place
        of technical innovations with the melting pot of diverse cultures had
        been one of my dreams-come-true. Though the living cost here in the Bay
        Area is getting astronomically expensive(!), I was fortunate enough to
        be able to thrive and enjoy life with my family — my wife and 3
        beautiful daughters. This is a site about me keeping up-to-date with
        tech world as well as sharing thoughs and my skills hoping to make a
        contribution to humanity:-)
      </p>
      <p>
        If you have any questions, <Link to="/contact">please contact me</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
