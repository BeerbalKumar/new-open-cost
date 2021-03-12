require("dotenv").config({
  path: `.env.${
    process.env.NODE_ENV == "development" ? "development" : "production"
  }`,
})
module.exports = {
  siteMetadata: {
    title: `Sourcing and Fulfillment Platform`,
    author: `Alex M`,
    about: `  Open Coast is a sourcing and fulfillment marketplace, connecting suppliers of premium merchandise to online stores globally.`,
    description: `Open Coast is a sourcing and fulfillment marketplace, connecting suppliers of premium merchandise to online stores globally.`,
    siteUrl: `https://opencoastb2b.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    "gatsby-plugin-playground",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
        host: process.env.preview
          ? "preview.contentful.com"
          : "cdn.contentful.com",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us3.list-manage.com/subscribe/post?u=edea1500691c7a11878bebcd7&amp;id=134f1788af",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("autoprefixer")()],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "346179549362417",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://opencoastb2b.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.gaTrackingId,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.gtManagerId,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}
