import React, { Component } from "react"

import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
export default class Perks extends Component {

  render() {

    const {
      isInverted,
      hasBackground,
      hasClass,
      perksImg,
      perksContent,
      perksAlt
    } = this.props

    return (
      <div className={"perks-wrapper" + (hasBackground ? ' perks-bg' : '') + (hasClass ? ' ' + hasClass : '')}>
        <div className="container-custom">
          <div className="perks-content">
            <ObserverWrapper>
              <div className={"perks-img-holder" + (isInverted ? ' perks-img-invert': '')}>
                <img src={require("../assets/images/retailers-marketplaces/" + perksImg)} className="perks-img" alt={perksAlt} />
              </div>
            </ObserverWrapper>

              <div className="perks-list">
                <ObserverWrapper>
                  {perksContent.map((perksItem, i) => {
                      return (
                        <div className="perks-item" key={i}>
                          {perksItem.hasIcon ?
                            <div className="perks-item-img-holder">
                              <img src={require("../assets/images/retailers-marketplaces/" + perksItem.perksImg)} className="perks-item-img" alt={perksAlt} />
                            </div>
                          : ''}
                          <p className="perks-title">{perksItem.perksTitle}</p>
                          <p className="perks-text">{perksItem.perksText}</p>
                        </div>
                      )
                    })
                  }
                </ObserverWrapper>
              </div>

          </div>
        </div>
      </div>
    )
  }
}
