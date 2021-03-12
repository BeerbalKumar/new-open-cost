import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import AccordionTabs from "../components/AccordionTabs"
import Form from "../components/Form"
import Helmet from "react-helmet"
import SEO from "../components/Seo"



const tabsData = [{
  tabName: `GENERAL`,
  tabData: [{
    title: `Why was Open Coast founded?`,
    content: `Our goal as a company is to empower the global consumer by making a range of merchandise available to anyone in any country. We believe in universal access to products by centralizing a global community of buyers and sellers.`
  }, {
    title: `Where are your offices?`,
    content: `We are headquartered in Brooklyn, New York with other offices in Delhi, India and Singapore.`
  }, {
    title: `Is Open Coast really free?`,
    content: `Yes, membership on our marketplace is completely free. Whether you’re a Supplier or a Retailer, you will never pay a subscription, monthly or transaction fee. We are one of the few cross-border marketplaces in the world that does this. Our goal is to help you grow your business, everything else is secondary.`
  }, {
    title: `How is Open Coast set up to support the international community?`,
    content: `Making our marketplace stretch to every corner of the globe is one of our primary missions. To help achieve this, we now support over 100 currencies. Our platform also allows for over 10 languages and that number is growing as we continue to expand into new markets.`
  }, {
    title: `How does dropshipping work and what are the advantages?`,
    content: `Dropshipping is a fast growing business model and we believe it is the future of retail. It allows a Retailer to sell in-stock inventory without having to physically carry that inventory which allows for a wider product offering. Check out the ‘How it Works’ tab to get more insight.`
  }, {
    title: `Can an account get suspended?`,
    content: `Unfortunately, yes it can. We hope all the participants conduct themselves in a professional manner but if Suppliers are missing shipments, Retailers aren’t completing purchases or we detect attempts to take transactions offline—all of these offenses can lead to an indefinite account suspension. But we hope it doesn’t come to that!`
  }, {
    title: `What's the Return Policy?`,
    content: `Open Coast does not have a universal return policy. Instead this varies from supplier to supplier so if you are an eRetailer pay close attention to these policies before selecting products to sell.`
  }, {
    title: `Can Suppliers and Retailers within the same country be connected, or is it only international?`,
    content: `Domestic transactions between Suppliers and Retailers in the same country are certainly welcomed through our Marketplace. In fact, domestic transactions are just as a common as international ones; it’s all about what makes the most sense for your business.`
  }, {
    title: `Why have you partnered with the One Tree Planted?`,
    content: `We are committed to sustainability and trying to preserve the well being of our planet which has been in gradual ecological decline. As a marketplace, we understand that the shipping and transportation of merchandise globally has adverse effects on the environment, so as a socially responsible company, we’ve decided to partner with organizations like One Tree Planted to reduce our environmental impact. We do this through planting Trees for every package shipped through our platform.`
  }]
}, {
  tabName: `RETAILERS & MARKETPLACES`,
  tabData: [{
    title: `What product categories do you offer?`,
    content: `We started out with Fashion & Accessories, and that continues to be our main focus but we have great offerings in other popular categories like Electronics, Beauty & Cosmetics, Baby & Maternity as well as many others.`
  }, {
    title: `Are there are any restrictions on how to price products?`,
    content: `We try to work with Brands and Suppliers who grant complete pricing flexibility. You have the freedom to mark up products as you see fit. But keep in mind that your goal is to drive transactions so create pricing that will be attractive to your consumers.`
  }, {
    title: `What payments do you accept?`,
    content: `We accept all major debit and credit cards from Retailers in every country. Other countries may have additional options such direct bank and debit payments as well as Bitcoin.`
  }, {
    title: `Can the same product be selected by more than one Retailer?`,
    content: `Yes it can. Products from popular brands will most likely be on more than one channel but we keep inventory synchronized so when it is ordered its availability will be updated accordingly.`
  }, {
    title: `How do I know what shipping and duty costs will be?`,
    content: `For shipping, this cost is covered. The price of the good you see has no additional fees. For duties and tariffs, we are working on a very powerful tool that calculates what customs costs will be for the item based on the destination country so you can make your customers aware of these additional costs, if any.`
  }, {
    title: `As a Retailer, can I get a product shipped to me or my distribution center before the consumer receives it?`,
    content: `Sure. You’ll need to specify the destination address on the Order Dashboard so the Supplier is aware. Once you receive it, all additional shipments and costs to the end customer you’ll be responsible for.`
  }, {
    title: `Who are the Brands and Suppliers that sell on the Marketplace?`,
    content: `These are brands of all sizes. Some names you may recognize immediately, others are more up-and-coming. We make sure to work only with brands who maintain high standards of quality and craftsmanship. Outside of that, 3rd party suppliers are companies who work as authorized re-sellers of brands; they also purchase from the brands directly or top department stores that carry those brands.`
  }, {
    title: `What do you require from Brands & Suppliers to sell on your platform?`,
    content: `We verify all their business details, require them to have a handful of high quality images for each product and make sure all product descriptions are accurate. Additionally, we request references from other companies who have worked with them in the past. And we also inspect products they sell to make sure they are of a certain quality.`
  }, {
    title: `When does the Supplier ship the product(s) to my customer?`,
    content: `Once the consumer places the order on your retail platform or marketplace, a notification is sent to the supplier so they can prepare the shipment. Once you’ve paid the cost of the item with your preferred payment method, the supplier ships and updates the tracking information.`
  }, {
    title: `How do I get my money back for Returns?`,
    content: `Once your customer’s item has been accepted by the Supplier and complies with their Return policy, the cost of the good will be refunded to you.`
  }]
}, {
  tabName: `BRANDS & SUPPLIERS`,
  tabData: [{
    title: `Can the same products be selected by more than one Retailer?`,
    content: `Yes. When you have popular products at attractive prices more than one Retailer will most likely select it for final sale. If it is purchased, the updated inventory will be reflected on Retailers sites who carry the product.`
  }, {
    title: `What kinds of Retailers and Marketplaces will be on the Open Coast Platform?`,
    content: `You’ll be able to transact business with Retailers and marketplaces of all sizes and specialties. These will range from smaller eShops to much larger marketplaces who have millions of customers. There will be some who focus on one area versus others who will have a multi-category offering.`
  }, {
    title: `What’s the Return Policy?`,
    content: `Open Coast allows for a standard 7 day return policy from when the item arrives to the end consumer. Any returned items must not be damaged in any material way and must have the original tags. You’ll have the option to use our standard policy or create your own.`
  }, {
    title: `What if the end customer places an order for an item but the Retailer doesn’t pay for the item to complete the transaction?`,
    content: `This rarely happens because it damages the Retailer’s reputation with the customer. But as a reminder: do not ship until payment has been made by the Retailer for the product in question.`
  }, {
    title: `What if I don’t want to ship internationally or want to deal with customs forms?`,
    content: `As a Supplier or Brand, it is important you recognize how valuable having a global presence can be for growing your business. These forms are very straightforward and only take a couple minutes to fill out.`
  }, {
    title: `Will I be responsible for Shipping costs as a Supplier?`,
    content: `No you won’t, the Retailer and their customers are responsible for all courier costs. But you will be required to fill out any Flat Shipping Rates you offer for different regions of the world. All shipping and customs fees are added to the total cost of all items when the Retailer completes an order.`
  }, {
    title: `How will I get notified when an order needs to be fulfilled?`,
    content: `An alert will come into your Open Coast dashboard but you also have the option to be notified via phone and email — these settings you can adjust in your Seller Profile. We recommend you keep the Open Coast tab open on your browser at all times to be able to respond to orders quickly.`
  }, {
    title: `What happens if my products don’t get selected by a Retailer or Marketplace?`,
    content: `We have a dedicated team of individuals who actively promote all Suppliers and Brands. This is done through email newsletters, social media and other mechanisms designed to connect Retailers with products that fit their specific criteria. Lucky for you, selling on our platform is completely free so you won’t incur any costs while you wait to transact business.`
  }, {
    title: `How should an item be packaged for fulfillment?`,
    content: `We insist you package items in a neat and presentable manner. If you are a Supplier sending branded merchandise, please try to include as much original packaging as possible such as the original brand box, lightweight paper used for stuffing or wrapping, any authenticity documentation etc. For Brands, you may include promotional materials about your Brand so the customer can get more familiar with your Brand, product offering and story.`
  }, {
    title: `How often should I update inventory?`,
    content: `We use advanced technology to ensure that when transactions happen inventory is updated automatically, even across multiple channels. But in order to ensure 100% accuracy we encourage you to add or remove any products based on availability as often as possible.`
  }]
}]

const formData =[{
  type: 'name',
  placeholder: 'Your Name'
}, {
  type: 'number',
  placeholder: 'Your Phone Number'
}, {
  type: 'email',
  placeholder: 'Your Email Address'
}, {
  type: 'company',
  placeholder: 'Your Company'
}, {
  type: 'message',
  placeholder: 'Your Message'
}]

export default class Support extends Component {

  render() {

    return (
      <div>
        <Helmet title="Open Coast | Support"/>
        <SEO
         title="Support"
         description="Still have more questions or want a custom solution?"
         />
        <Header />
        <main className="support">
          <HeroBanner
            isLargeBanner={ false }
            hasOverlay={ true }
            titleBanner="Support"
            backgroundImagePath="banner-support.jpg"
          />

          <AccordionTabs
            tabTitle="Frequently Asked Questions"
            tabData={ tabsData }
          />

          <Form
            action="/"
            btnText="SUBMIT"
            content={ formData }
            title="Still have more questions or want a custom solution?"
            text="Leave your details below and we'll have someone from our team reach out directly!"
          />
        </main>
        <Footer />
      </div>
    )
  }
}
