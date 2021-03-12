import React, { Component } from "react"
import { Link } from "gatsby"

import addToMailchimp from "gatsby-plugin-mailchimp"
import Alert from "../components/Alert"
import ObserverWrapper from "@emarketeross/simple-react-intersection-observer"
import CookieConsent from "./CookieConsent";

import './../stylesheets/components/landingPageFooter.scss'

const footerContent = [

  {
    title: "Connect",
    click: false,
    childElems: [
      {
        type: "internal",
        url: "/blog",
        text: "Blog",
      },
      {
        type: "external",
        url: "https://www.instagram.com/open_coast/",
        text: "Instagram",
      },
      {
        type: "external",
        url: "https://www.facebook.com/OpenCoastB2B/",
        text: "Facebook",
      },
      {
        type: "external",
        url: "https://twitter.com/open_coast",
        text: "Twitter",
      },
    ],
  }
]
export default class LandingPageFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      footerLink: footerContent,
      email: "",
      alertIsShown: false,
      alert: "",
      alertMessage: "",
    }
  }

  handleClick = id => {
    const updateInfo = this.state.footerLink
    updateInfo[id].click = !updateInfo[id].click
    this.setState(updateInfo)
  }

  handleChange(e) {
    this.setState({ email: e.target.value })
  }

  handleNewsLetter = e => {
    e.preventDefault()

    addToMailchimp(this.state.email, {
      PATH: "Newsletter",
    }).then(data => {
      console.log(data)

      this.setState({
        email: "",
        alertIsShown: true,
        alert: data.result,
        alertMessage: data.msg,
      })
    })
  }

  toggleAlert = () => {
    this.setState({ alertIsShown: !this.state.alertIsShown })
    return this.state.alertIsShown
  }

  render() {
    return (
      <>
        <div className="footer">
          <div className="container-custom">
            <ObserverWrapper>
              <div className="footer-wrapper">
                <div className="footer-logo-wrapper">
                  <Link to="/">
                    <img
                      src={require("../assets/images/site-logo-footer.png")}
                      className="footer-logo"
                      alt="Open Coast Logo"
                    />
                  </Link>
                  <ul className="footer-location">
                    <li>Open Coast HQ</li>
                    <li>240 Kent Avenue</li>
                    <li>Brooklyn, New York</li>
                    <li>11249</li>
                  </ul>
                </div>

                <div className="footer-link-wrapper">
                  {footerContent.map((item, i) => {
                    return (
                      <div
                        className={
                          "footer-link-item" +
                          (item.click ? " active-dropdown" : "")
                        }
                        key={i}
                      >
                        <p
                          className="footer-link-title"
                          onClick={id => this.handleClick(i)}
                        >
                          {item.title}
                        </p>
                        <ul className="footer-link-list">
                          {item.childElems.map((value, j) => (
                            <li key={j}>
                              {value.type === "internal" ? (
                                <Link to={value.url} className="footer-link">
                                  {value.text}
                                </Link>
                              ) : (
                                ""
                              )}
                              {value.type === "external" ? (
                                <a
                                  href={value.url}
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                  className="footer-link"
                                >
                                  {value.text}
                                </a>
                              ) : (
                                ""
                              )}
                              {value.type === "mail" ? (
                                <a href={value.url} className="footer-link">
                                  {value.text}
                                </a>
                              ) : (
                                ""
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                <div className="footer-sign-up">
                  <form onSubmit={e => this.handleNewsLetter(e)}>
                    <p className="_newsletter_txt">SIGNUP FOR NEWSLETTER</p>
                    <div className="sign-up-wrapper">
                      <input
                        className="input"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                        type="email"
                        placeholder="johndev@gmail.com"
                        required
                      />
                      <input
                        className="btn-grey"
                        type="submit"
                        value="SUBSCRIBE"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </ObserverWrapper>
          </div>
        </div>
        <CookieConsent />
      </>
    )
  }
}
