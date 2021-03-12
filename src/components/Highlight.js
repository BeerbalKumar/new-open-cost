import React, { Component } from "react"

import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class Highlight extends Component {
  render() {

    const {
      title,
      text,
      image,
      subText,
      isInverted,
      hasBackground,
      hasClass
    } = this.props

    return (
      <div className={hasClass ? ' ' + hasClass : ''}>
        <div className={hasBackground ? "highlight-wrapper highlight-background" : "highlight-wrapper"}>
          <div className="container-custom">
            <ObserverWrapper>
              <div className={ isInverted ? "highlight-holder inverted-highlight" : "highlight-holder"}>
                <div className="highlight-holder-first">
                  <h3>{ title }</h3>
                  <p>{ text }</p>
                  {subText ? <p>{ subText }</p> : null}
                </div>
                <div className="highlight-holder-second">
                  <img src={require(`../assets/images/highlights/highlight-${ image }`)} className="image-highlight" alt={title} />
                </div>
              </div>
            </ObserverWrapper>
          </div>
        </div>
      </div>
    )
  }
}
