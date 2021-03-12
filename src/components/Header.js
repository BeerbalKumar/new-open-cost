import React, { Component } from "react"

import NavLarge from "./NavLarge"
import NavSmall from "./NavSmall"

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFixed: false,
      isDefault: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if(!this.state.isFixed && winScroll > 90) {
      this.setState({ isFixed: true, isDefault: false })
    } 

    if(this.state.isFixed && (winScroll < 90)) {
      this.setState({ isDefault: true, isFixed: false })
    }
  }

  render() {
    return (
      <div className={"header" 
        + (this.state.isFixed ? " fixed" : "") 
        + (this.state.isDefault ? " default" : "")
      }>
        <div className="container-custom">
          <NavLarge />
          <NavSmall />
        </div>
      </div>
    )
  }
}