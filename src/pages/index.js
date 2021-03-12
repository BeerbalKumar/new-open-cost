import React, { Component } from "react"
import { Link } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import FavoriteCategory from "../components/FavoriteCategory"
import ProductListSwiper from "../components/ProductListSwiper"
import Tabs from "../components/Tabs"
import Testimonial from "../components/Testimonial"
import FeatureList from "../components/FeatureList"
import PreFooter from "../components/PreFooter"
import Helmet from "react-helmet"
import ObserverWrapper from "@emarketeross/simple-react-intersection-observer"
import SEO from "../components/Seo"

const specialtyContent = [
  {
    number: "01",
    img: "specialty-one.png",
    title: "No Inventory Risk",
    text:
      "Select as many products as you want without any upfront costs — only pay when your customers place orders",
    alt: "Select as many products as you want without any upfront costs",
  },
  {
    number: "02",
    img: "specialty-two.png",
    title: "Authenticity Guaranteed",
    text:
      "Open Coast only allows the sale of authentic designer goods. All products and suppliers are screened in advance. 110% money back",
    alt: "Open Coast only allows the sale of authentic designer goods.",
  },
  {
    number: "03",
    img: "specialty-three.png",
    title: "True Wholesale Pricing",
    text:
      "Our supplier merchandise is priced from 40 to 80% off retail, giving you the opportunity for big margins as a reseller",
    alt: "Our supplier merchandise is priced from 40 to 80% off retail",
  },
]

const favCategoryContent = [
  {
    img: "fav-cat-1.png",
    name: "Shoes",
  },
  {
    img: "fav-cat-2.png",
    name: "Clothing",
  },
  {
    img: "fav-cat-3.png",
    name: "Bags",
  },
  {
    img: "fav-cat-4.png",
    name: "Jewelry",
  },
  {
    img: "fav-cat-5.png",
    name: "Accessories",
  },
]

const productBestSeller = [
  {
    link: "/",
    img: "product-1.jpg",
    name: "Supreme Shirt",
  },
  {
    link: "/",
    img: "product-2.jpg",
    name: "Burberry Clutch",
  },
  {
    link: "/",
    img: "product-3.jpg",
    name: "Gucci Sunglasses",
  },
  {
    link: "/",
    img: "product-4.jpg",
    name: "Lascoste Hat",
  },
]

const tabsData = [
  {
    tabName: `Suppliers & Brands`,
    tabData: [
      {
        imagePath: require("../assets/images/tab-img-1.jpg"),
      },
      {
        imagePath: ``,
        step: `Step 1: `,
        title: `Upload products and make sure product listings are accurate and up-to-date`,
      },
      {
        imagePath: ``,
        step: `Step 2: `,
        title: `Receive order and payment notifications then prepare products for shipment`,
      },
      {
        imagePath: require("../assets/images/tab-img-2.jpg"),
      },
      {
        imagePath: require("../assets/images/tab-img-3.jpg"),
      },
      {
        imagePath: ``,
        step: `Step 3: `,
        title: `Ship out products and input tracking number into Open Coast dashboard so Retailers can track merchandise`,
      },
    ],
  },
  {
    tabName: `Online Stores & Retailers`,
    tabData: [
      {
        imagePath: require("../assets/images/tab-img-4.jpg"),
      },
      {
        imagePath: ``,
        step: `Step 1: `,
        title: `Register for an account and start searching products of interest — you can filter by brand, price or category`,
      },
      {
        imagePath: ``,
        step: `Step 2: `,
        title: `Migrate products of interest over to your online store with one click and make them available for purchase to your customers`,
      },
      {
        imagePath: require("../assets/images/tab-img-5.jpg"),
      },
      {
        imagePath: require("../assets/images/tab-img-6.jpg"),
      },
      {
        imagePath: ``,
        step: `Step 3: `,
        title: `Once your customers place an order, you then purchase the product at wholesale through the Open Coast platform. The Supplier ships to the address you specify and provides tracking information`,
      },
    ],
  },
]

const productRetailerSelling = [
  {
    link: "/",
    img: "product-5.jpg",
    name: "Tory Burch Shoes",
    retailerPrice: "$224",
    ourPrice: "$120",
  },
  {
    link: "/",
    img: "product-6.jpg",
    name: "Michael Kors Earrings",
    retailerPrice: "$85",
    ourPrice: "$35",
  },
  {
    link: "/",
    img: "product-7.jpg",
    name: "Vans Sweatshirt",
    retailerPrice: "$55",
    ourPrice: "$25",
  },
  {
    link: "/",
    img: "product-8.jpg",
    name: "MCM Belt",
    retailerPrice: "$295",
    ourPrice: "$175",
  },
  {
    link: "/",
    img: "product-14.jpg",
    name: "Puma Low-Top Sneakers",
    retailerPrice: "$110",
    ourPrice: "$70",
  },
  {
    link: "/",
    img: "product-13.jpg",
    name: "Levi’s Denim Jacket",
    retailerPrice: "$180",
    ourPrice: "$95",
  },
  {
    link: "/",
    img: "product-12.jpg",
    name: "Aqua Puffer Vest",
    retailerPrice: "$80",
    ourPrice: "$40",
  },
  {
    link: "/",
    img: "product-11.jpg",
    name: "Adidas Track Pants",
    retailerPrice: "$70",
    ourPrice: "$35",
  },
  {
    link: "/",
    img: "product-10.jpg",
    name: "Kate Spade Card Case",
    retailerPrice: "$80",
    ourPrice: "$30",
  },
  {
    link: "/",
    img: "product-9.jpg",
    name: "Chloe Sandals",
    retailerPrice: "$350",
    ourPrice: "$160",
  },
]

const testimonialContent = [
  {
    profileImg: "testimonial-profile-1.png",
    text:
      "Our team was thrilled when we found Open Coast. We're now able to curate our online store with leading designers and our customers have responded really positively. Consistent access to this merchandise used to be a real challenge. Also Open Coast has a Shopify integration that’s super easy to use — we were set up in just a few minutes.",
    job: "Ankita, Founder of Boutique Online Store",
    img: "testimonial-img-1.jpg",
    alt: "Testimonial by Ankita, Founder of Boutique Online Store",
  },
  {
    profileImg: "testimonial-profile-2.png",
    text:
      "We're always looking for reliable, new channels to sell on. Ebay and Amazon are ok but there's so much competition there. Because of Open Coast we now have over 140 Retailers throughout the world selling our products at any given time. We just wait for orders to come in and ship them out. It's simple.",
    job: "Trevor, VP of Wholesale, AppareDealCo",
    img: "testimonial-img-2.jpg",
    alt: "Testimonial by Trevor, VP of Wholesale, AppareDealCo",
  },
  {
    profileImg: "testimonial-profile-3.png",
    text:
      "There is nothing quite like this company. Other services, which have high monthly fees only allow you to sell on the well known marketplaces. But this opens the door to a range of retailers globally. It's online interface is extremely easy to use and has completely changed our business.",
    job: "June, Head of Sales at PurseParade",
    img: "testimonial-img-3.jpg",
    alt: "Testimonial by June, Head of Sales at PurseParade",
  },
  {
    profileImg: "testimonial-profile-4.png",
    text:
      "Open Coast has been a powerful tool for our business. We have a Supplier account which has helped us grow sales of our own branded merchandise. We were taken back by how much interest online retailers had in our brand. This experience has been nothing but positive, could not speak more highly about this platform.",
    job: "Craig, Co-creator of I.L.I.O.T.B",
    img: "testimonial-img-4.jpg",
    alt: "Testimonial by Craig, Co-creator of I.L.I.O.T.B",
  },
  {
    profileImg: "testimonial-profile-5.png",
    text:
      "Open Coast has allowed us to find two new Suppliers in our own country and a handful more overseas. Sales have increased over 75% since forming these new relationships and we've doubled the amount of products offered on our eCommerce store. We weren't expecting this — the results have been truly amazing.",
    job: "Jennifer, Head of Sourcing at Tres Chic",
    img: "testimonial-img-5.jpg",
    alt: "Testimonial by Jennifer, Head of Sourcing at Tres Chic",
  },
]

const featureContent = [
  {
    img: "15.png",
    title: "Free Shipping Worldwide",
    text: "Our suppliers ship to over 200 countries",
  },
  {
    img: "16.png",
    title: "Easy Returns",
    text: "We make returns easy and hassle-free for you and your customers",
  },
  {
    img: "17.png",
    title: "24/7 Support",
    text:
      "Talk to real people not robots, our team is always available by phone and email",
  },
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Open Coast | Home" />
        <SEO
          title="Open Coast"
          description="Open Coast is a sourcing and fulfillment marketplace, connecting suppliers of premium merchandise to online stores globally."
        />
        <Header />
        <main className="home">
          <HeroBanner
            isLargeBanner={true}
            titleBanner="Famous brands &amp; designers at wholesale prices for your online store"
            subtitleBanner="Sign up now and join thousands of Retailers around the world"
            backgroundImagePath="banner-home.jpg"
            buttonText="Sign up for free"
            buttonLink="http://app.opencoastb2b.com/"
          />

          <div className="specialty-wrapper">
            <div className="container-custom">
              <div className="specialty-list">
                {specialtyContent.map((specialtyItem, i) => {
                  return (
                    <div className="specialty-item" key={i}>
                      <div className="specialty-img-holder">
                        <span className="specialty-num">
                          {specialtyItem.number}
                        </span>
                        <img
                          src={require("../assets/images/" + specialtyItem.img)}
                          className="specialty-img"
                          alt={specialtyItem.alt}
                        />
                      </div>
                      <div>
                        <p className="specialty-title">{specialtyItem.title}</p>
                        <p className="specialty-desc">{specialtyItem.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="info-wrapper">
            <div className="container-custom">
              <h5 className="info-title-sm">As seen in</h5>
              <ObserverWrapper>
                <div className="info-title">
                  <img
                    src={require("../assets/images/forbes-logo.png")}
                    className="info-logo"
                    alt="Forbes Logo"
                  />
                </div>

                <div className="info-content">
                  <div>
                    <p className="info-text">
                      Open Coast is a sourcing and fulfillment platform,
                      connecting suppliers of premium merchandise to online
                      stores globally.
                    </p>
                    <Link to="/how-it-works" className="btn-blue">
                      Learn more
                    </Link>
                  </div>

                  <div className="info-img-holder">
                    <img
                      src={require("../assets/images/fobres-main-img.png")}
                      alt="Image for forbes post"
                    />
                  </div>
                </div>
              </ObserverWrapper>
            </div>
          </div>

          <FavoriteCategory
            favCategoryTitle="We cover all all your favorite categories"
            favCategorySubtitle="Look for whats best for your shops!"
            favCategoryContent={favCategoryContent}
          />

          <ProductListSwiper
            productClass="product-list-content"
            productListTitle="Our Best Sellers"
            productListSubtitle="Top items that have the highest sales."
            productList={productBestSeller}
          />

          <Tabs tabTitle="How It Works" tabData={tabsData} />

          <div className="integration-wrapper">
            <div className="container-custom">
              <ObserverWrapper>
                <p className="integration-title">
                  Our technology allows us to easily integrate with your online
                  store
                </p>
                <div className="integration-img-holder">
                  <img
                    src={require("../assets/images/api-integrations.png")}
                    className="integration-img"
                    alt="product integration placeholder image"
                  />
                </div>
                <Link to="/integrations" className="btn-blue">
                  See all integrations
                </Link>
              </ObserverWrapper>
            </div>
          </div>

          <div className="product-counter">
            <div className="container-custom">
              <ObserverWrapper>
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
              </ObserverWrapper>
            </div>
          </div>

          <ProductListSwiper
            productClass="product-sell"
            productListTitle="What Our Retailers Are Selling"
            productListSubtitle="Scroll from right to left for more products"
            productList={productRetailerSelling}
            productBtnLink="https://app.opencoastb2b.com/signup/retailer: "
            productBtnText="See all products &amp; pricing"
            navigationProps={{
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }}
          />

          <div className="product-sold">
            <div className="container-custom">
              <ObserverWrapper>
                <div className="product-sold-content">
                  <div className="product-sold-img-holder">
                    <img
                      src={require("../assets/images/product-sold-img.jpg")}
                      className="product-sold-img"
                      alt="Products sold through marketplace Placeholder"
                    />
                  </div>
                  <div className="product-sold-info">
                    <p className="product-sold-text">
                      Every product sold through our marketplace goes towards
                      planting a tree somewhere in the world. Learn more about
                      our commitment to sustainability
                    </p>
                    <div className="product-sold-btn">
                      <a href="/sustainability" className="btn-green">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </ObserverWrapper>
            </div>
          </div>

          <Testimonial
            testimonialTitle="Trusted by thousands of suppliers and retailers globally"
            testimonialSubtitle="Hear from some of our customers"
            testimonialContent={testimonialContent}
          />

          <FeatureList featureContent={featureContent} />

          <PreFooter
            title="Have the top American and European suppliers dropship premium merchandise directly to your customers or warehouse"
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
