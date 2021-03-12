import React, { Component } from "react"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabTitle: this.props.tabTitle,
      tabData: this.props.tabData,
      active: this.props.tabData[0].tabName,
      activeItem: ''
    }
  }

  handleClick = (tabName) => {
    this.setState({ active: tabName })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ active: event.target.value })
  }

  activeItem = (item) => {
    if(item !== this.state.activeItem) {
      this.setState({ activeItem: item})
    } else {
      this.setState({ activeItem: ''})
    }
  }

  render() {
    return (
      <div className="tab-holder">
        <div className="container-custom">
          <ObserverWrapper>
            <h3 className="tab-holder-title">{ this.state.tabTitle }</h3>
            <ul className="tab-holder-list">
              {this.state.tabData.map((data, index) => {
                return <li key={index} className={ this.state.active === data.tabName ? 'active' : '' } onClick={() => this.handleClick(data.tabName)}>{ data.tabName }</li>
              })}
            </ul>
            <div className="select-wrapper">
              <select className="tab-holder-dropdown" onChange={this.handleChange}>
                {this.state.tabData.map((data, index) => {
                  return <option key={index} className={ this.state.active === data.tabName ? 'active' : '' } value={ data.tabName }>{ data.tabName }</option>
                })}
              </select>
            </div>
            <div className="accordion-wrapper">
              <ul className="accordion-list">
                {this.state.tabData.map(data => {
                  return data.tabData.map((item, index) => {
                    if(data.tabName === this.state.active) {
                      return <li key={ index } className={this.state.activeItem === item ? "accordion-item active" : "accordion-item"} onClick={() => this.activeItem(item)}>
                        <span className="plus"><i className="fa fa-plus"></i></span>
                        <span className="minus"><i className="fa fa-minus"></i></span>
                        <p className="accordion-title">{item.title}</p>
                        <div className={this.state.activeItem === item ? "item-content selected" : "item-content"}>
                          <p>{item.content}</p>
                        </div>
                      </li>
                    } else {
                      return null;
                    }
                  })
                })}
              </ul>
            </div>
          </ObserverWrapper>
        </div>
      </div>
    )
  }
}
