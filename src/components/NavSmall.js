import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class NavSmall extends Component {
  constructor(props) {

    super(props)

    this.state = {
      isOpen: false
    }
  }

  handleClickMenu = () => {
    let updatedMenu = this.state.isOpen

    updatedMenu = !updatedMenu

    document.body.classList.toggle('no-scroll')

    this.setState({
      isOpen: updatedMenu
    })
  }

  componentWillUnmount() {
    document.body.classList.remove('no-scroll')
  }

  render() {

    return (
      <nav className="nav nav-sm">
        <div>
          <Link to="/">
            <img src={ require('../assets/images/site-logo.png') } className="nav-logo" alt= "Open Coast Logo"/>
          </Link>
        </div>

        <div className={"nav-burger-bar" + (this.state.isOpen ? ' active-burger-bar' : '')} onClick={this.handleClickMenu}>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </div>

        <div className={"nav-burger-menu" + (this.state.isOpen ? ' is-open' : '')}>
          <div className="menu-link-list">
            <Link
              to="/retailers-marketplaces"
              className="menu-link"
              activeClassName="active"
              partiallyActive={true}>Online Stores &amp; Retailers</Link>
            <Link
              to="/brands-suppliers"
              className="menu-link"
              activeClassName="active"
              partiallyActive={true}>Brands &amp; Suppliers</Link>
            <a
              href="http://app.opencoastb2b.com/"
              className="menu-link">Log in</a>
            <a
              href="http://app.opencoastb2b.com/"
              className="btn-blue">Sign up for free</a>

            <div className="menu-link-social">
              <a href="https://www.facebook.com/OpenCoastB2B/" target="_blank" rel="noopener noreferrer nofollow" className="link-social-media"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/open_coast" target="_blank" rel="noopener noreferrer nofollow" className="link-social-media"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/open_coast/" target="_blank" rel="noopener noreferrer nofollow" className="link-social-media"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
