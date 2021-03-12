import React, { Component } from "react"
import Swiper from "react-id-swiper"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import "react-id-swiper/lib/styles//scss/swiper.scss"

export default class ProductListSwiper extends Component {
  render() {
    const {
      productClass,
      productListTitle,
      productListSubtitle,
      productList,
      productBtnLink,
      productBtnText,
      navigationProps
    } = this.props

    const productSwiperParams = {
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      breakpoints: {
        767: {
          slidesOffsetAfter: 250
        },

        575: {
          spaceBetween: 0,
          slidesOffsetAfter: 110
        }
      }
    }
    
    return (
      <div className={"product-list-wrapper " + (productClass.length ? productClass : '')} >
        <div className="container-custom">
          <ObserverWrapper>
            <p className="list-title-text">{productListTitle}</p>
            <p className="list-subtitle-text">{productListSubtitle}</p>

            <div className="product-list">
              <Swiper {...productSwiperParams} {...navigationProps}>
              {productList.map((productItem, i) => {
                return (
                  <div className="product-item" key={i}>
                    <div className="product-link">
                      <img src={require("../assets/images/" + productItem.img)} className="product-img" alt={productItem.name} />
                      <p className="product-name">{productItem.name}</p>
                { productItem.retailerPrice ? <p className="product-price">Retail: {productItem.retailerPrice}, Our price: <span className="blurred-text">{productItem.ourPrice}</span></p> : null }
                    </div>
                  </div>
                )
              })}
              </Swiper>
            </div>

            {productBtnLink ?
              <div className="product-btn">
                <a href={productBtnLink} className="btn-blue">{productBtnText}</a>
              </div> : ''
            }
          </ObserverWrapper>
        </div>
      </div>
    )
  }
}
