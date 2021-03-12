import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import Highlight from "../components/Highlight"
import Tabs from "../components/Tabs"
import PreFooter from "../components/PreFooter"
import Helmet from "react-helmet"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import SEO from "../components/Seo"

// const tabsData = [{
//   tabName: `Suppliers & Brands`,
//   tabData: [
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: ``,,
//       step: `Step 01: `,
//       title: `Import Products`,
//       description: `Upload product feed using your supported Cart or CMS (Shopify, Magento, etc). Once merchandise is imported, make sure all images, prices, descriptions are up to date and accurate.`
//     },
//     {
//       imagePath: ``,
//       step: `Step 02: `,
//       title: `Complete Full Seller Profile`,
//       description: `Fill out a few more details about your company like logo, how you want to be notified with orders and how you'd like to accept payments from us. This also give interested Retailers more info about your business.`
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: ``,
//       step: `Step 03: `,
//       title: `Retailer Selects, Customers Buys`,
//       description: `Once a retailer selects your items, they'll move it to their store or marketplace for final sale. When an end customer places an order for the item, you'll be noticed.`
//     },
//     {
//       imagePath: ``,
//       step: `Step 04: `,
//       title: `Receive Payment`,
//       description: `Once the Retailer pays for the good, you'll see the funds immediately in your Wallet. We'll release those funds to your bank account once the period for Returns has passed.`
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: ``,
//       step: `Step 05: `,
//       title: `Fullfill Orders`,
//       description: `If shipping domestically please include a return label. If international we'll handle the Return process. Be sure to also input tracking # into your order dashboard so packages can be monitored effectively`
//     },
//   ]
// },
// {
//   tabName: `Online Stores & Retailers`,
//   tabData: [
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: ``,
//       step: `Step 01: `,
//       title: `Get Integrated`,
//       description: `Once you sign up, it's important to get syncved up with our system in order to be able to migrate items from our platform to yours and get orders sent to the supplier automatically. We've made this process very easy!`
//     },
//     {
//       imagePath: ``,
//       step: `Step 02: `,
//       title: `Search, Select, and Sell`,
//       description: `Find the right items by seasrching by brand, category or use other filters. Once producs are selected, you should price them in a way that will appeal to yours customers. And lastly, migrate everthing to your e-store with one click.`
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: ``,
//       step: `Step 03: `,
//       title: `Receive Orders`,
//       description: `Once your end customers make a purchase, you and the supplier will be notified instantly. The product is shipped once you submit payment.`
//     },
//     {
//       imagePath: ``,
//       step: `Step 04: `,
//       title: `Make Payment`,
//       description: `Your order total covers everthing including shipping. But if there are any customs or duties charges for your customers you'll know ahead of time and be able communicate it to them to avoid any surprises.`
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: require("../assets/images/image-placeholder.png"),
//     },
//     {
//       imagePath: ``,
//       step: `Step 05: `,
//       title: `Shipping & Returns`,
//       description: `Every item comes with a tracking # which you can pass along to your customers. If a customer needs to do a return, be sure to refund themn once they've followed all instructions for item returns.`
//     },
//   ]
// }]

const tabsData = [{
  tabName: `Suppliers & Brands`,
  isSteps: true,
  tabData: [
    {
      imagePath: require("../assets/images/how-it-works/1.png"),
      step: `Step 01: `,
      title: `Import Products`,
      description: `Upload product feed using your supported Cart or CMS (Shopify, Magento, etc). Once merchandise is imported, make sure all images, prices, descriptions are up to date and accurate.`
    },
    {
      imagePath: require("../assets/images/how-it-works/2.png"),
      step: `Step 02: `,
      title: `Complete Full Seller Profile`,
      description: `Fill out a few more details about your company like logo, how you want to be notified with orders and how you'd like to accept payments from us. This also give interested Retailers more info about your business.`
    },
    {
      imagePath: require("../assets/images/how-it-works/3.png"),
      step: `Step 03: `,
      title: `Retailer Selects, Customers Buys`,
      description: `Once a retailer selects your items, they'll move it to their store or marketplace for final sale. When an end customer places an order for the item, you'll be noticed.`
    },
    {
      imagePath: require("../assets/images/how-it-works/4.png"),
      step: `Step 04: `,
      title: `Receive Payment`,
      description: `Once the Retailer pays for the good, you'll see the funds immediately in your Wallet. We'll release those funds to your bank account once the period for Returns has passed.`
    },
    {
      imagePath: require("../assets/images/how-it-works/5.png"),
      step: `Step 05: `,
      title: `Fullfill Orders`,
      description: `If shipping domestically please include a return label. If international we'll handle the Return process. Be sure to also input tracking # into your order dashboard so packages can be monitored effectively`
    },
  ]
},
{
  tabName: `Online Stores & Retailers`,
  isSteps: true,
  tabData: [
    {
      imagePath: require("../assets/images/how-it-works/6.png"),
      step: `Step 01: `,
      title: `Get Integrated`,
      description: `Once you sign up, it's important to get synced up with our system in order to be able to migrate items from our platform to yours and get orders sent to the supplier automatically. We've made this process very easy!`
    },
    {
      imagePath: require("../assets/images/how-it-works/7.png"),
      step: `Step 02: `,
      title: `Search, Select, and Sell`,
      description: `Find the right items by searching by brand, category or use other filters. Once products are selected, you should price them in a way that will appeal to yours customers. And lastly, migrate everthing to your e-store with one click.`
    },
    {
      imagePath: require("../assets/images/how-it-works/8.png"),
      step: `Step 03: `,
      title: `Receive Orders`,
      description: `Once your end customers make a purchase, you and the supplier will be notified instantly. The product is shipped once you submit payment.`
    },
    {
      imagePath: require("../assets/images/how-it-works/9.png"),
      step: `Step 04: `,
      title: `Make Payment`,
      description: `Your order total covers everthing including shipping. But if there are any customs or duties charges for your customers you'll know ahead of time and be able communicate it to them to avoid any surprises.`
    },
    {
      imagePath: require("../assets/images/how-it-works/10.png"),
      step: `Step 05: `,
      title: `Shipping & Returns`,
      description: `Every item comes with a tracking # which you can pass along to your customers. If a customer needs to do a return, be sure to refund them once they've followed all instructions for item returns.`
    },
  ]
}]

export default class HowItWorks extends Component {

  render() {
    return (
      <div>
        <Helmet title="Open Coast | How it Works" />
        <SEO
         title="How it Works"
         description="Whether you're a Supplier or Retailer, getting set up and growing your business has never been easier"
         />
        <Header />
        <main className="how-it-works">
          <HeroBanner
            isLargeBanner={ false }
            hasOverlay={ true }
            titleBanner="How it works"
            backgroundImagePath="banner-how-it-works.jpg"
          />

          <Highlight
            isInverted={ false }
            title="We've designed our system to be as user-friendly and simple as possible."
            text="Whether you're a Supplier or Retailer, getting set up and growing your business has never been easier"
            image="how-it-works.png"
          />

          <div className="container-custom">
            <ObserverWrapper>
              <div className="video-wrapper">
                <h3 className="video-title">Meet Open Coast!</h3>
                <div className="video-holder">
                  <iframe className="open-coast-video" src="https://www.youtube.com/embed/pWtkIb2atfI?rel=0" title="Meet Open Coast!" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="video-details">
                  <p>Open Coast is a sourcing and dropship marketplace. Connecting suppliers of premium merchandise to online stores globally.</p>
                </div>
              </div>
            </ObserverWrapper>

            <div className="hr-wrapper">
              <hr className="hl" />
            </div>

            <Tabs
              tabTitle="How it Works"
              tabData={tabsData}
            />
          </div>

          <PreFooter
            title="Have more questions?"
            subtitle="See our Frequently Asked Questions"
            buttonText="FAQ"
            buttonLink="/support"
            otherSubtitle="or"
            email="info@opencoastb2b.com"
          />

        </main>
        <Footer />
      </div>
    )
  }
}
