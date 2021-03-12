import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import Helmet from "react-helmet"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import SEO from "../components/Seo"


const imageCardList = [
  {
    title: 'Indonesia',
    filename: '2.jpg'
  },
  {
    title: 'Kenya',
    filename: '3.jpg'
  },
  {
    title: 'Costa Rica',
    filename: '3.jpg'
  },
  {
    title: 'United States',
    filename: '5.jpg'
  }
]

export default class Sustainability extends Component {

  render() {

    return (
      <div>
        <Helmet title="Open Coast | Sustainability" />
        <SEO
         title="Sustainability"
         description="We've partnered with OneTreePlanted.Org, one of the world's leading non-profit organizations focused on Reforestation. So for every item ordered through our platform we'll plant a tree somewhere in the world"
         />
        <Header />
        <main className="sustainability">
          <HeroBanner
            isLargeBanner={ false }
            hasOverlay={ true }
            titleBanner="Sustainability"
            backgroundImagePath="banner-sustainability.jpg"
          />

          <div className="highlight-wrapper">
            <div className="container-custom">
              <ObserverWrapper>
                <div className="highlight-holder">
                  <div className="highlight-holder-first">
                    <h3>We've partnered with <a href="https://onetreeplanted.org/" rel="nofollow" className="link">OneTreePlanted.Org</a></h3>
                    <p>One of the world's leading non-profit organizations focused on Reforestation. So for every item ordered through our platform we'll plant a tree somewhere in the world</p>
                  </div>
                  <div className="highlight-holder-second">
                    <img src={require("../assets/images/highlights/highlight-one-tree-planted.png")} className="image-highlight" alt="One Tree Planted"/>
                  </div>
                </div>
              </ObserverWrapper>
            </div>
          </div>

          <div className="container-custom">
            <ObserverWrapper>
              <div className="image-grid-wrapper">
                <h3>We pride ourselves on being a global company so we make sure trees get planted on almost every continent</h3>
                <div className="image-grid-holder">
                  {imageCardList.map((image, i) => {
                    return (
                      <div key={ i } className="image-card">
                        <img src={require(`../assets/images/sustainability/${ image.filename }`)} alt= { image.title } />
                        <h3>{ image.title }</h3>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ObserverWrapper>

            <div className="hr-wrapper">
              <hr className="hl" />
            </div>

            <ObserverWrapper>
              <div className="info-content">
                <div>
                  <p className="info-text">One of our primary goals is to help all members of our marketplace grow and transform their business —while at the same time doing our part to preserve the plant.</p>
                  <p className="info-text">Even though we are the only cross-border B2B eCommerce company making this a priority, we hope to be an example for others to follow.</p>
                </div>
                <div className="info-img-holder">
                  <img src={require("../assets/images/sustainability/image-tile.png")} alt="Image showing company sustainability plan"/>
                </div>
              </div>
            </ObserverWrapper>

            <ObserverWrapper>
              <div className="video-wrapper">
                <div className="video-details">
                  <h3>Corporate Responsibility</h3>
                  <p>Even though we simply create the marketplace for Suppliers and Retailers to seamlessly transact business, we do recognize that the process of manufacturing the products that end up on our platform could have negative ecological implications. These range from the use of fossil fuels to power machinery as well as creation of waste by products.</p>
                  <p>Similarly, the transportation of these items has adverse effects on the environment primarly through emissions of carbon dioxide, methane and other harmful gases that contribute to air pollution, noise, and distruption of natural ecosystem.</p>
                </div>
                <div className="video-holder">
                  <iframe className="open-coast-video" src="https://www.youtube.com/embed/PgotXCZMjCI?&rel=0" title="Meet Open Coast!" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </ObserverWrapper>

          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
