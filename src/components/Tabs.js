import React, { Component } from "react"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasClass: this.props.hasClass,
      tabTitle: this.props.tabTitle,
      tabData: this.props.tabData,
      isBullet: this.props.isBullet,
      listItem: this.props.listItem,
      active: this.props.tabData[0].tabName
    }
  }

  handleClick = (tabName) => {
    this.setState({ active: tabName })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ active: event.target.value })
  }

  render() {
    return (
      <div className={"tab-holder " + (this.state.hasClass ? this.state.hasClass : '')}>
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
            <div className="alter-grid-holder">
              {this.state.tabData.map(data => {
                return data.tabData.map((content, index) => {
                  if(data.tabName === this.state.active) {
                    if(!data.isSteps && !content.isBullet) {
                      return (
                        <div key={ index } className={"tab-content" + (!content.imagePath ? " tab-content-text" : "")} style={ content.imagePath !== '' ? { backgroundImage: `url(${ content.imagePath })`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' } : {}}>
                          <div className="tab-details">
                            <h4>{content.step ? <span className="step">{ content.step } </span> : null} { content.title }</h4>
                            <p>{ content.description }</p>
                          </div>
                        </div>
                      )
                    } else if(data.isSteps) {
                      return (
                        <div key={ index } className="tab-steps">
                          <div className="step-icon-holder">
                            <img src={content.imagePath} className="step-icon" alt="Steps Icon" />
                          </div>
                          <div className="tab-details">
                            <h4><span className="step">{ content.step } </span> { content.title }</h4>
                            <p>{ content.description }</p>
                          </div>
                        </div>
                      )
                    } else {
                      return (
                        <ul key={ index } className="bullet-holder">
                          {content.listItem.map((item, i) => {
                            return(
                              <li className="bullet-item" key={ i } >
                                {item}
                              </li>
                            )
                          })}
                        </ul>
                      )
                    }
                  } else {
                    return null;
                  }
                })
              })}
            </div>
          </ObserverWrapper>
        </div>
      </div>
    )
  }
}
