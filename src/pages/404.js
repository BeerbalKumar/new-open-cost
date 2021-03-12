import React, { Component } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Helmet from "react-helmet"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import SEO from "../components/Seo"


export default class NotFound extends Component {

  render() {

    return (
      <div>
        <Helmet title="Open Coast | 404" />
        <SEO
         title="404"
         description="404 Page"
         />
        <Header />
        <main className="sustainability">

          <div className="highlight-wrapper" style={{height: "100%", marginBottom: "5%" }}>
            <div className="container-custom">
              <ObserverWrapper>
                <div className="highlight-holder">
                  <div className="highlight-holder-first">
                    <h3>The Page Was Not Found</h3>
                    <p>The link is broken or the page has been moved. Try any of the pages below instead</p>
                  </div>
                  <div className="highlight-holder-second">
                    <img src={require("../assets/images/highlights/404.png")} className="image-highlight" alt="404 Image"/>
                  </div>
                </div>
              </ObserverWrapper>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    )
  }
}
