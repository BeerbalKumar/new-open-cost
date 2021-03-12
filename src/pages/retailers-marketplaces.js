import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import Perks from "../components/Perks"
import Highlight from "../components/Highlight"
import Tabs from "../components/Tabs"
import PreFooter from  "../components/PreFooter"
import Helmet from "react-helmet"
import SEO from "../components/Seo"


const perksInventory = [
  {
    hasIcon: true,
    perksImg: "inventory.png",
    perksTitle: "No Inventory Risk",
    perksText: "Select as many products as you want — pay when an order is placed. No minimum order requirements.",
    perksAlt: "Inventory image showing no inventory risk"
  },
  {
    hasIcon: true,
    perksImg: "shipping.png",
    perksTitle: "Fast & Free Shipping",
    perksText: "No added shipping costs or other fees — the price you see is the final wholesale price.",
    perksAlt: "Shipping image showing fast and free shipping"
  },
  {
    hasIcon: true,
    perksImg: "updates.png",
    perksTitle: "Real-time Inventory Updates",
    perksText: "Our technology monitors supplier inventory levels in real time — so you'll never have to offer out of stock merchandise to your customers.",
    perksAlt: "Updates image showing real-time inventory updates"
  },
  {
    hasIcon: true,
    perksImg: "pricing.png",
    perksTitle: "True Wholesale Pricing",
    perksText: "Our supplier merchandise is priced from 40 to 80% off Retail — giving you the ability to mark-up products so you can comfortably hit profit targets.",
    perksAlt: "Pricing image showing true wholesale pricing"
  }
]

const perksAuthenticity = [
  {
    hasIcon: false,
    perksImg: "specialty-one.png",
    perksTitle: "Authenticity Guarantee",
    perksText: "Our pre-screened suppliers are authorized brand resellers who have been thoroughly vetted to meet rigorous quality standards.",
    perksAlt: "Image showing authenticity guarantee of Open Coast"
  },
  {
    hasIcon: false,
    perksImg: "specialty-one.png",
    perksTitle: "Suppliers Based in Major Fashion Markets",
    perksText: "Based in major markets including New York, London, Los Angeles, Milan, Paris, and others, our suppliers have a finger on the pulse of fashion.",
    perksAlt: "Image showing Suppliers Based in Major Fashion Markets"
  },
  {
    hasIcon: false,
    perksImg: "specialty-one.png",
    perksTitle: "Quality-Assurance Testing",
    perksText: "All Open Coast products undergo strict quality-assurance testing before shipment from suppliers.",
    perksAlt: "Image showing Quality-Assurance testing"
  },
  {
    hasIcon: false,
    perksImg: "specialty-one.png",
    perksTitle: "110% Cash-Back Guarantee",
    perksText: "Because we are confident in our suppliers and stand behind them, we offer a 110% cash-back guarantee on all products sold.",
    perksAlt: "Image showing Open Coast 110% Cash-Back Guarantee"
  }
]

const tabsEnterprise = [{
  tabName: `For enterprise retailers`,
  tabData: [
    {
      isBullet: true,
      listItem: [
        `Large, online retailers around the globe trust Open Coast. Our one-size-fits-all solution works for large or complex operations.`,
        `Reduce inventory carrying costs and risk. Don't let unsold merchandise weigh on your balance sheet.`,
        `Our suppliers ship globally. So if there is demand for affordable, branded merchandise in your market, partner with us. We work with retailers from Japan, Singapore, Turkey, Thailand, China, Australia, India, Korea, Indonesia, Dubai, and other major markets.`
      ]
    },
    {
      imagePath: require("../assets/images/retailers-marketplaces/retailers-tab-img.png"),
    },
  ]
}, {
  tabName: `FOR ENTERPRISE MARKETPLACES`,
  tabData: [
    {
      isBullet: true,
      listItem: [
        `Customer loyalty depends on your ability to offer a large selection of quality merchandise. Open Coast sellers are vetted for quality products and reliability. Partner with us to see dramatic improvements in your customer satisfaction.`,
        `Our team is here to help you succeed. Tell us which brands, categories, and price points are best sellers and we'll create a custom inventory feed with top brands you can integrate into your system.`,
        `Our technology automates live inventory and ordering on the backend to streamline and simplify your operations.`,
      ]
    },
    {
      imagePath: require("../assets/images/retailers-marketplaces/marketplaces-tab-img.png"),
    },
  ]
}]

const tabsRetailers = [{
  tabName: `Brick and mortars`,
  tabData: [
    {
      imagePath: require("../assets/images/retailers-marketplaces/tab-img-1.jpg"),
    },
    {
      imagePath: ``,
      step: ``,
      title: `We make it easy for Brick & Mortars and boutiques who have an online store to increase their visibility. Source products from our platform that complement your in-store offerings while also driving local foot traffic.`,
    }
  ]
},
{
  tabName: `Consignment retailers`,
  tabData: [
    {
      imagePath: require("../assets/images/retailers-marketplaces/tab-img-2.jpg"),
    },
    {
      imagePath: ``,
      step: ``,
      title: `If you have previously worked on consignment with your suppliers and prefer not to spend money upfront for inventory, Open Coast is your solution. Simply drag and drop products from our marketplace to your online store — and pay only when a sale is made.`,
    },
  ]
}]

export default class RetailersMarketplaces extends Component {

  render() {

    return (
      <div>
        <Helmet title="Open Coast | Retailers & Marketplaces" />
        <SEO
         title="Retailers & Marketplaces"
         description="Search, Select and Sell with Confidence"
         />
        <Header />
        <main className="retailers-marketplaces">
          <HeroBanner
            isLargeBanner={ false }
            hasOverlay={ true }
            titleBanner="Search, Select and Sell with Confidence"
            subtitleBanner="Discover in-demand, branded merchandise from reliable suppliers who do the warehousing and shipping"
            backgroundImagePath="banner-retailers-marketplaces.jpg"
            buttonText="Sign Up For Free"
            buttonLink="http://app.opencoastb2b.com/"
          />

          <div className="product-counter">
            <div className="container-custom">
              <p className="product-counter-heading">
                Our global sourcing and fulfillment platform is the most effective solution for Retailers of all sizes
              </p>
              <div className="product-counter-wrapper">
                <div className="product-counter-content">
                  <p className="product-counter-num">70,000+</p>
                  <p className="product-counter-title">Products</p>
                </div>
                <div className="product-counter-content">
                  <p className="product-counter-num">600+</p>
                  <p className="product-counter-title">Brands</p>
                </div>
              </div>
            </div>
          </div>

          <Perks
            isInverted={ false }
            hasBackground={ false }
            perksImg="clothes.png"
            perksContent={perksInventory}
          />

          <Perks
            isInverted={ true }
            hasBackground={ true }
            hasClass="perks-authenticity"
            perksImg="authenticity.png"
            perksContent={perksAuthenticity}
          />

          <Highlight
            isInverted={ true }
            hasBackground= { false }
            hasClass="free-up-dollars-wrapper"
            title="Free Up Dollars for Marketing & Promotion"
            text="Partnering with Open Coast removes the risk and expense of carrying inventory. With just few clicks, you can upload hundreds, even thousands, of quality products for sale. Increase your budget allocation for marketing and PR, then sit back and watch the sales roll in."
            image="marketing.png"
          />

          <Tabs
            hasClass="tab-holder-bg tab-enterprise"
            tabTitle="Enterprise"
            tabData= {tabsEnterprise}
          />

          <Tabs
            hasClass="tab-retailers"
            tabTitle="Other Retailers"
            tabData= {tabsRetailers}
          />

          <PreFooter
            hasBackground={true}
            title="Grow your business with less risk. Sign up for free below and start exploring the catalog"
            buttonType="external"
            buttonText="Sign up for free"
            buttonLink="http://app.opencoastb2b.com/"
          />
        </main>
        <Footer />
      </div>
    )
  }
}
