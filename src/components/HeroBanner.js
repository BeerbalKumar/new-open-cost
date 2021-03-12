import React, { Component } from "react"

export default class HeroBanner extends Component {
  render() {

    const {
      isLargeBanner,
      hasOverlay,
      titleBanner,
      subtitleBanner,
      otherText,
      backgroundImagePath,
      buttonText,
      buttonLink
    } = this.props

    return (
      <div className={(isLargeBanner ? "banner banner-lg" : "banner banner-sm") + (hasOverlay ? " banner-overlay" : '')} style={{
          backgroundImage: `url(${ require('../assets/images/banners/' + backgroundImagePath) })`
        }}
      >
        <div className="container-custom">
          <div className="banner-hero">
            <h1 className="banner-title">{ titleBanner }</h1>
            {subtitleBanner ? <h3 className="banner-subtitle">{ subtitleBanner }</h3> : null}
            {otherText ? <h3 className="banner-subtitle">{ otherText }</h3> : null}
            {buttonText ? <a href={ buttonLink} className="btn-blue">{ buttonText }</a> : null}
          </div>
        </div>
      </div>
    )
  }
}
