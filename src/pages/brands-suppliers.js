import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import FeatureList from "../components/FeatureList"
import PreFooter from "../components/PreFooter"
import Highlight from "../components/Highlight";
import Helmet from "react-helmet"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import SEO from "../components/Seo"


const headerFeature = [
  {
    title: "Go global",
    svg: require("../assets/svg/new/Go Global.svg")
  },
  {
    title: "No monthly fee",
    svg: require("../assets/svg/new/No Monthly Fee .svg")
  },
  {
    title: "No minimum transaction size",
    svg: require("../assets/svg/new/No Minimum Transaction Size.svg")
  }
]

const highlightData = [
  {
    title: `Reach`,
    text: `Leading online retailers worldwide are always seeking to showcase new products from reliable suppliers. They know the Open Coast marketplace attracts the world's most reputable suppliers. If sales growth is your top goal, millions of prospective customers who shop on our Retailer partner sites are waiting to buy your products.`,
    image: `reach.png`,
    isInverted: false,
    hasBackground: false,
    hasClass: `reach-wrapper`,
  }, {
    title: `International Market Expertise`,
    text: `Our global retailers are experts in their markets. From culture to local regulations, they are in the best position to know what will sell. So you won't have to guess — just upload your products and let retailers list which ones have the best chance of success in their markets. If you have experience shipping globally, this option is for you.`,
    image: `international-market.png`,
    isInverted: true,
    hasBackground: true,
    hasClass: `international-market-wrapper`,
  }, {
    title: `Free for Suppliers`,
    text: `There are no fees whatsoever to be a supplier on our marketplace — no registration fee, no monthly subscription. Upload and sell as many products as you like.`,
    image: `for-suppliers.png`,
    isInverted: false,
    hasBackground: false,
    hasClass: `free-suppliers-wrapper`,
  }, {
    title: `Easy Product Upload`,
    text: `Choose the upload method that works for you. Bulk upload your product catalog using a CSV, or use our custom one-click import tool to grab all products from your Shopify or Magento store.`,
    subText: `If you have a complex EDI, FTP or API inventory system, our Supplier Integration team will help you onboard quickly`,
    image: `easy-product.png`,
    isInverted: true,
    hasBackground: true,
    hasClass: `easy-product-wrapper`,
  }
]

const footerFeature = [
  {
    title: "Advanced Dashboard",
    text: "See all your retailer connections, orders, products, notifications, and analytics in one user-friendly interface.",
    svg: require("../assets/svg/new/Advance Dashboard.svg")
  },
  {
    title: "Improve SEO & Exposure",
    text: "With your merchandise being sold in multiple online stores globally, your brand and products get more visibility around web.",
    svg: require("../assets/svg/new/Improved SEO and Exposure.svg")
  },
  {
    title: "Immediate Payment",
    text: "Sell. Profit. Repeat. Your account is credited as soon as a sale is made. No payment schedules.",
    svg: require("../assets/svg/new/Immediate Payment.svg")
  }
]


export default class BrandsSuppliers extends Component {

  render() {
    return (
      <div>
        <Helmet title="Open Coast | Brands Suppliers" />
        <SEO
         title="Brands Suppliers"
         description="Our unique platform makes it easy for quality suppliers to grow sales"
         />
        <Header />
        <main className="brands-supplier">
          <HeroBanner
            isLargeBanner={ true }
            hasOverlay={ true }
            titleBanner="Our unique platform makes it easy for quality suppliers to grow sales"
            subtitleBanner="Every day thousands of online Retailer search our marketplace for new products to offer their customers."
            otherText="Get seen. Increase distribution"
            backgroundImagePath="banner-brands-suppliers.jpg"
            buttonText="SIGN UP FOR FREE"
            buttonLink="http://app.opencoastb2b.com/"
          />

          <div className="header-feature">
            <FeatureList featureContent={headerFeature} />
          </div>

          <ObserverWrapper>
            <div className="full-service-wrapper">
              <h3 className="full-service-title">Our full-service supplier marketing & sales platform is the most user-friendly option around</h3>
            </div>
          </ObserverWrapper>

          {highlightData.map((data, index) => {
            return (
              <Highlight
                key={ index }
                title={ data.title }
                text={ data.text }
                subText={ data.subText }
                image={ data.image }
                isInverted={ data.isInverted }
                hasBackground={ data.hasBackground }
                hasClass={ data.hasClass }
              />
            )
          })}

          <div className="footer-feature">
            <FeatureList featureContent={footerFeature} />
          </div>

          <PreFooter
              title="Start increasing sales today"
              buttonType="external"
              buttonText="SIGN UP FOR FREE"
              buttonLink="http://app.opencoastb2b.com/"
            />

        </main>
        <Footer />
      </div>
    )
  }
}
