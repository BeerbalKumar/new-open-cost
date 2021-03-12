import React, { Component } from "react"
import { Link } from "gatsby"

export default class NavLarge extends Component {
  render() {
    return (
      <nav className="nav nav-lg">
        <div>
          <Link to="/">
            <img src={ require("../assets/images/site-logo.png") } className="nav-logo" alt= "Open Coast Logo"/>
          </Link>
        </div>
        <div className="nav-links">
          <Link
            to="/retailers-marketplaces"
            className="nav-link-item"
            activeClassName="active"
            partiallyActive={true}>Online Stores &amp; Retailers</Link>
          <Link
            to="/brands-suppliers"
            className="nav-link-item"
            activeClassName="active"
            partiallyActive={true}>Brands &amp; Suppliers</Link>
          <a
            href="http://app.opencoastb2b.com/"
            className="nav-link-item">Log in</a>
          <a
            href="http://app.opencoastb2b.com/"
            className="btn-blue">Sign up for free</a>
        </div>
      </nav>
    )
  }
}
