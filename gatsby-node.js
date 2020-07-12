const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  //using gatsby createPages api.
  const { createPage } = actions

  //1. Get path to template
  //2. Get markdown data
  //3. Create new pages

  const blogTemplate = path.resolve("./src/templates/blog.js") //this creates absolute path from the harddrive.
  const blogContentfulTemplate = path.resolve(
    "./src/templates/blogContentful.js"
  )

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogContentfulTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
