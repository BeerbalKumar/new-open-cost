import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
const Blog = ({ data }) => {
  return (
    <>
      <Header></Header>
      <section className="banner banner-sm banner-overlay">
        {" "}
        <div className="container-custom">
          <div className="banner-hero">
            <h1 className="banner-title">Blog</h1>
          </div>
        </div>
      </section>{" "}
      <main className="container-custom blog-index  ">
        <div className="posts">
          {data.allContentfulPost.nodes.map((post, i, ar) => {
            return (
              <Link
                to={post.slug}
                className={`card${i === ar.length - 1 ? " card-last" : ""}`}
              >
                <BackgroundImage fluid={post.featuredImage.fluid}>
                  {" "}
                  <div className="thumbnail" />
                </BackgroundImage>
                <div className="body">
                  {post.title && <h3>{post.title}</h3>}
                  {post.excerpt.excerpt && <p>{post.excerpt.excerpt}</p>}
                </div>
                {post.author && (
                  <div className="info">By {post.author.name}</div>
                )}
              </Link>
            )
          })}
        </div>
        {data.totalCount > 12 && <div className="read-more">Load more</div>}
      </main>
      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  query($limit: Int, $skip: Int) {
    allContentfulPost(limit: $limit, skip: $skip) {
      totalCount
      nodes {
        slug
        title
        excerpt {
          excerpt
        }
        author {
          name
        }
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Blog
