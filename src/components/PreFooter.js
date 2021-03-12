import React, { Component } from "react"
import { Link } from "gatsby"

import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class PreFooter extends Component {

  render() {
    const {
      hasBackground,
      title,
      subtitle,
      buttonType,
      buttonText,
      buttonLink,
      otherSubtitle,
      email,
    } = this.props

    return (
      <ObserverWrapper>
        <div className={"pre-footer" + (hasBackground ? ' pre-footer-bg': '')}>
            <h2>{ title }</h2>
            {subtitle ? <p>{ subtitle }</p> : null}
            {buttonType === 'external' ? <a href={ buttonLink } className="btn-blue">{ buttonText }</a> : <Link to={ buttonLink } className="btn-blue">{ buttonText }</Link>}
            {otherSubtitle ? <p>{ otherSubtitle }</p> : null}
            {email ? <p>Email us at <a href={"mailto:" + email + "?Subject=Open%20Coast%20Questions"} className="email-link">{ email }</a></p> : null}
        </div>
      </ObserverWrapper>
    )
  }
}
