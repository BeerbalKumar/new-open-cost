import React, {Component} from "react"
import Swiper from "react-id-swiper"
import "react-id-swiper/lib/styles//scss/swiper.scss"
import { Navigation } from "swiper/dist/js/swiper.esm";
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class Testimonial extends Component {
  render() {

    const {
      testimonialTitle,
      testimonialSubtitle,
      testimonialContent
    } = this.props

    const params = {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      speed: 1000,
      slidesPerView: '1',
      spaceBetween: 30,
      // effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true
      },
      breakpoints: {
        575: {
          speed: 500,
          spaceBetween: 0,
        }
      }
    }

    return (
      <div className="testimonial-wrapper">
        <div className="container-custom">
          <ObserverWrapper>
            <p className="testimonial-title">{testimonialTitle}</p>
            <p className="testimonial-subtitle">{testimonialSubtitle}</p>
            <div className="testimonial-content">
              <Swiper {...params}>
                {testimonialContent.map((testimonialItem, i) => {
                    return (
                      <div className="testimonial-item" key={i}>
                        <div className="testimonial-item-content">
                          <img src={require("../assets/images/testimonials/" + testimonialItem.profileImg)} className="testimonial-profile" alt={testimonialItem.job}/>
                          <p className="testimonial-text">{testimonialItem.text}</p>
                          <p className="testimonial-job">{testimonialItem.job}</p>
                        </div>
                        <div className="testimonial-item-img">
                          <img src={require("../assets/images/testimonials/" + testimonialItem.img)} className="testimonial-img" alt={testimonialItem.alt} />
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
