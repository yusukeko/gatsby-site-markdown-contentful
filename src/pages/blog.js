import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import Head from "../components/head"
import Blogcard from "../components/blogcard"
import blogcardStyles from "../components/blogcard.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog"></Head>
      <h1>Thoughts on Tech, Work, Life and Food</h1>
      <div className={blogcardStyles.band}>
        {data.allContentfulBlogPost.edges.map((edge, index) => (
          <Blogcard
            hero={index === 0 ? blogcardStyles.item_1 : blogcardStyles.item}
            key={edge.node.slug}
            post={`/blog/${edge.node.slug}`}
            title={edge.node.title}
            date={edge.node.publishedDate}
            excerpt={`${edge.node.body.json.content[0].content[0].value.slice(
              0,
              100
            )}...`}
            URL={
              edge.node.body.json.content.find(content => {
                return content.nodeType === "embedded-asset-block"
              })
                ? edge.node.body.json.content.find(content => {
                    return content.nodeType === "embedded-asset-block"
                  }).data.target.fields.file["en-US"].url
                : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
            }
          ></Blogcard>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage
