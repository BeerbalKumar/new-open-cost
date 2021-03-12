import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import GatsbyImage from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import get from "lodash.get"
import {
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa"
import { ShareButtonRoundSquare, ShareBlockStandard } from "react-custom-share"
import Form from "../components/Form"
import SEO from "../components/Seo"
const formData = [
  {
    type: "email",
    placeholder: "Your Email Address",
  },
]

const BlogPost = ({ data: { contentfulPost, relatedPosts } }) => {
  const {
    title,
    featuredImage,
    content,
    date,
    categories,
    author,
    excerpt: { excerpt },
  } = contentfulPost
  const shareBlockProps = {
    url: typeof window !== "undefined" ? window.location.href : "",
    button: ShareButtonRoundSquare,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "Email", icon: FaEnvelope },
      {
        network: "Pinterest",
        icon: FaPinterest,
        media: featuredImage ? featuredImage.fluid.src : null,
      },
      { network: "Linkedin", icon: FaLinkedin },
    ],
    text: title ? title : "",
    longtext: excerpt ? excerpt : "",
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const image = get(node, 'data.target.fields.file["en-US"].url', null)
        console.log(image, node)

        return (
          <>
            {image && (
              <img style={{ maxWidth: "100%" }} src={image + "?w=768"}></img>
            )}
          </>
        )
      },
    },
  }
  console.log(date)

  return (
    <>
      <Header></Header>
      <SEO title={title} description={excerpt} />
      <BackgroundImage fluid={featuredImage.fluid}>
        <section className="banner banner-sm  blogpost-banner vertical-align">
          {" "}
          <div className="container-custom">
            <div className="banner-hero">
              <h1 className="banner-title">{title}</h1>
            </div>
          </div>
        </section>{" "}
      </BackgroundImage>
      <main className="container-custom blogpost">
        <div className="info">
          <div>{date}</div>
          By <span className="author">{author.name}</span>{" "}
          {categories.length > 0 && (
            <>
              {" "}
              <span className="divider"> | </span> In
              {categories.map((cat, i, ar) => (
                <span key={i} className="category">
                  {cat.displayName}
                  {ar.length - 1 !== i && ","}
                </span>
              ))}
            </>
          )}
        </div>
        {documentToReactComponents(content.json, options)}
        <ShareBlockStandard {...shareBlockProps} />
        <h3 style={{ marginTop: "1rem" }}>About the author</h3>
        <div className="author-box">
          <div className="image">
            <GatsbyImage fixed={author.image.fixed}></GatsbyImage>
          </div>
          <div className="about">
            <h4 className="name">{author.name}</h4>
            <p>{author.about.about}</p>
          </div>
        </div>
        <Form
          btnText="SIGN UP"
          content={formData}
          title="Stay updated with news, limited time offers and giveaways by signing up to our newsletter"
        />
      </main>

      <section className="related-posts-bg">
        <div className="container-custom related-posts">
          {" "}
          <h3 style={{ margin: "2rem 0" }}>See Related Posts</h3>
          <div className="posts" style={{ padding: "0rem 0" }}>
            {relatedPosts.nodes.map((post, i, ar) => {
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
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}
export const query = graphql`
  query($slug: String, $categories: [String]) {
    contentfulPost(slug: { eq: $slug }) {
      title
      categories {
        displayName
      }
      excerpt {
        excerpt
      }
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      author {
        name
        image {
          fixed(width: 150, height: 150) {
            ...GatsbyContentfulFixed
          }
        }
        about {
          about
        }
      }
      content {
        json
      }
    }
    relatedPosts: allContentfulPost(
      limit: 3
      filter: {
        slug: { ne: $slug }
        categories: { elemMatch: { displayName: { in: $categories } } }
      }
    ) {
      nodes {
        slug
        title
        excerpt {
          excerpt
        }
        author {
          name
        }
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export default BlogPost
