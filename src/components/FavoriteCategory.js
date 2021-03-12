import React, { Component } from "react"
import Swiper from "react-id-swiper"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import "react-id-swiper/lib/styles//scss/swiper.scss"

export default class FavoriteCategory extends Component {
  render() {

    const {
      favCategoryTitle,
      favCategorySubtitle,
      favCategoryContent
    } = this.props

    const favCatSwiperParams = {
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      breakpoints: {
        767: {
          slidesOffsetAfter: 100
        },

        575: {
          spaceBetween: 0,
          slidesOffsetAfter: 110
        }
      }
    }

    return (
      <div className="fav-category-wrapper">
        <div className="container-custom">
          <ObserverWrapper>
            <p className="list-title-text">{favCategoryTitle}</p>
            <p className="list-subtitle-text">{favCategorySubtitle}</p>

            <div className="fav-category-list">
              <Swiper {...favCatSwiperParams}>
                {favCategoryContent.map((favCategoryItem, i) => {
                    return (
                      <div className="fav-category-item" key={i}>
                        <div className="fav-category-link">
                          <img src={require("../assets/images/" + favCategoryItem.img)} className="fav-category-img" alt={favCategoryItem.name} />
                          <p className="fav-category-name">{favCategoryItem.name}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </Swiper>
            </div>
          </ObserverWrapper>
        </div>
      </div>
    )
  }
}
