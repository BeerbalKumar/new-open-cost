import React, {Component} from "react"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class FeatureList extends Component {
  render() {
    const featureContent = this.props.featureContent

    return (
      <div className="feature-wrapper">
          <div className="container-custom">
            <ObserverWrapper>
              <div className="feature-list">
                {featureContent.map((featureItem, i) => {
                    return (
                      <div className="feature-item" key={i}>
                        <div className="feature-img">
                          {featureItem.img ? <img src={require("../assets/images/features/" + featureItem.img)} alt={featureItem.title}/> : <img src={ featureItem.svg } className="svg-icon" alt={featureItem.title}/>}
                        </div>
                        <div>
                          <p className="feature-title">{featureItem.title}</p>
                          {featureItem.text ? <p className="feature-text">{featureItem.text}</p> : null}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </ObserverWrapper>
          </div>
        </div>
    )
  }
}
