import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
const Blog = ({ data }) => {
  const [posts, setPosts] = useState(data.allContentfulPost.nodes)
  const [next, setNext] = useState("/page-data/blog/2/page-data.json")
  const [hasMore, setHasMore] = useState(data.allContentfulPost.totalCount > 12)
  const [additionalPosts, setAdditionalPost] = useState(null)
  return (
    <>
      <Header></Header>
      <BackgroundImage fluid={data.contentfulBlogHeader.backgroundImage.fluid}>
        <section className=" banner-sm banner-overlay">
          {" "}
          <div className="container-custom">
            <div className="banner-hero">
              <h1 className="banner-title">
                {data.contentfulBlogHeader.title}
              </h1>
            </div>
          </div>
        </section>
      </BackgroundImage>
      <main className="container-custom blog-index  ">
        <div className="posts">
          {posts.map((post, i, ar) => {
            return (
              <Link to={post.slug} className={`card`}>
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
        {hasMore && (
          <div
            className="read-more"
            onClick={e => {
              fetch(next)
                .then(data => data.json())
                .then(data => {
                  const { numPages, currentPage } = data.result.pageContext
                  setHasMore(numPages > currentPage)
                  numPages > currentPage &&
                    setNext(
                      "/page-data/blog/" + currentPage + 1 + "/page-data.json"
                    )
                  setPosts(p => [
                    ...p,
                    ...data.result.data.allContentfulPost.nodes,
                  ])
                })
            }}
          >
            Load more
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  {
    contentfulBlogHeader {
      title
      backgroundImage {
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulPost(limit: 12) {
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
