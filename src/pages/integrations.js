import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import Form from "../components/Form"
import Helmet from "react-helmet"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import SEO from "../components/Seo"

const logoList = [
  {
    filename: '2.png',
    alt: 'CS.Cart Logo'
  },
  {
    filename: '3.png',
    alt: 'Big Commerce Logo'
  },
  {
    filename: '4.png',
    alt: 'Ace Shop Logo'
  },
  {
    filename: '5.png',
    alt: 'ASP.NET Store Front Logo'
  },
  {
    filename: '6.png',
    alt: 'Virtue Mart Logo'
  },
  {
    filename: '7.png',
    alt: 'Volusion Logo'
  },
  {
    filename: '8.png',
    alt: 'Ubercart Logo'
  },
  {
    filename: '9.png',
    alt: 'Gambio Logo'
  },
  {
    filename: '11.png',
    alt: 'XCart Logo'
  },
  {
    filename: '10.png',
    alt: 'WP e-Commerce Logo'
  },
  {
    filename: '13.png',
    alt: 'Webasyst Logo'
  },
  {
    filename: '12.png',
    alt: 'Woo Commerce Logo'
  },
  {
    filename: '14.png',
    alt: 'Zencart Logo'
  },
  {
    filename: '15.png',
    alt: '3dcart Logo'
  },
  {
    filename: '16.png',
    alt: 'Oxid esales Logo'
  },
  {
    filename: '17.png',
    alt: 'XT: Commerce Logo'
  },
  {
    filename: '18.png',
    alt: 'Tomato Cart Logo'
  },
  {
    filename: '19.png',
    alt: 'MobiCart Logo'
  },
  {
    filename: '20.png',
    alt: 'Shopware Logo'
  },
  {
    filename: '21.png',
    alt: 'PrestaShop Logo'
  },
  {
    filename: '22.png',
    alt: 'Shopify Plus Logo'
  },
  {
    filename: '23.png',
    alt: 'PinnacleCart Logo'
  },
  {
    filename: '24.png',
    alt: 'Shop Script Logo'
  },
  {
    filename: '25.png',
    alt: 'OS Commerce Logo'
  },
]

const formData =[{
  type: 'email',
  placeholder: 'Your Email Address'
}, {
  type: 'cartName',
  placeholder: 'Your Shopping Cart Name'
}, {
  type: 'message',
  placeholder: 'Your Message'
}]

export default class Integrations extends Component {

  render() {

    return (
      <div>
        <Helmet title="Open Coast | Integrations"/>
        <SEO
         title="Integrations"
         description="No other global marketplace supports more Shopping Carts and CMS than we do!"
         />
        <Header />
        <main className="integrations">
          <HeroBanner
            isLargeBanner={ false }
            hasOverlay={ true }
            titleBanner="Integrations"
            backgroundImagePath="banner-integrations.jpg"
          />

          <div className="integrations-wrapper">
            <p className="integrations-wrapper-text">No other global marketplace supports more Shopping Carts and CMS than we do! <br /> If you use any of these platforms we make it easy to either <br /> upload products or migrate products to your store.</p>
            <img src={require("../assets/images/integrations-logo/1.png")} className="integrations-wrapper-shopify" alt="Shopify Logo" />
          </div>

          <div className="container-custom">
            <div className="coming-soon-wrapper">
              <h3>Coming soon.</h3>
              <div className="hr-wrapper">
                <hr className="hl" />
              </div>
              <div className="integrations-logo-wrapper">
                <ObserverWrapper>
                  {logoList.map((logo, i) => {
                    return <img key={ i } src={require(`../assets/images/integrations-logo/${ logo.filename }`)} className="integ-logo" alt={ logo.alt } />
                  })}
                </ObserverWrapper>
              </div>
            </div>
          </div>

          <Form
            btnText="SUBMIT"
            content={ formData }
            title="Don't see your shopping cart here?"
            text="Leave your email and Cart name below so we can work on getting it added!"
          />

        </main>
        <Footer />
      </div>
    )
  }
}
