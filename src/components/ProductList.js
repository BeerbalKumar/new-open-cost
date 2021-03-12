import React, {Component} from "react"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class ProductList extends Component {
  render() {

    const {
      productClass,
      productListTitle,
      productListSubtitle,
      productList,
      productBtnLink,
      productBtnText
    } = this.props

    return (
      <div className={"product-list-wrapper " + (productClass.length ? productClass : null)} >
        <div className="container-custom">
          <ObserverWrapper>
            <p className="list-title-text">{productListTitle}</p>
            <p className="list-subtitle-text">{productListSubtitle}</p>

            <div className="product-list">
              {productList.map((productItem, i) => {
                return (
                  <div className="product-item" key={i}>
                    <div className="product-link">
                      <img src={require("../assets/images/" + productItem.img)} className="product-img" alt={productItem.name} />
                      <p className="product-name">{productItem.name}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {productBtnLink ?
              <div className="product-btn">
                <a href={productBtnLink} className="btn-blue">{productBtnText}</a>
              </div> : null}
          </ObserverWrapper>
        </div>
      </div>
    )
  }
}

