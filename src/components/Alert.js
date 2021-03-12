import React, { Component } from "react"
export default class NavLarge extends Component {

  closeAlert = (e) => {
    console.log(this.props.showAlert = false)
  }

  render() {

    return (
      <div className={ this.props.type === 'success' ? "alert alert-success " + (this.props.status) + (this.props.showAlert? ' active' : ''): "alert alert-error " + (this.props.status) + (!this.props.showAlert ? '' : ' active')}>
        <p><i className={ this.props.type === 'success' ? "fas fa-check" : "fas fa-times-circle"}></i> <span className="alert-link" dangerouslySetInnerHTML={{ __html: this.props.text }}></span></p>
        <i className="fas fa-times" onClick={() => this.props.toggleAlert()}></i>
      </div>
    )
  }
}
