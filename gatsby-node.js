const path = require("path")
const fs = require("fs")
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return graphql(`
    {
      allContentfulPost {
        nodes {
          slug
          categories {
            displayName
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    let posts = result.data.allContentfulPost.nodes

    // Create blog posts pages.
    const postsPerPage = 12
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      i !== 0 &&
        createPage({
          path: `/blog/${i + 1}`,
          component: path.resolve("./src/templates/blog-pagination.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
    })
    posts.forEach((post, index) => {
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          slug: post.slug,
          categories: post.categories.map(cat => cat.displayName),
        },
      })
    })

    return null
  })
}
