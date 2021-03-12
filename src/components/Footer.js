import React, { Component } from "react"
import { Link } from "gatsby"

import addToMailchimp from "gatsby-plugin-mailchimp"
import Alert from "../components/Alert"
import ObserverWrapper from "@emarketeross/simple-react-intersection-observer"
import CookieConsent from "./CookieConsent"

const footerContent = [
  {
    title: "Company",
    click: false,
    childElems: [
      // {
      //   type: "internal",
      //   url: "/pricing",
      //   text: "Pricing",
      // },
      {
        type: "internal",
        url: "/brands-suppliers",
        text: "Brands and Suppliers",
      },
      {
        type: "internal",
        url: "/retailers-marketplaces",
        text: "Retailers and Marketplaces",
      },
      {
        type: "internal",
        url: "/sustainability",
        text: "Sustainability",
      },
    ],
  },
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
  },
  {
    title: "Support",
    click: false,
    childElems: [
      {
        type: "internal",
        url: "/how-it-works",
        text: "How it Works",
      },
      {
        type: "mail",
        url: "mailto:info@opencoastb2b.com",
        text: "Help",
      },
      {
        type: "internal",
        url: "/terms-service",
        text: "Terms of Service",
      },
      {
        type: "internal",
        url: "/privacy-policy",
        text: "Privacy Policy",
      },
    ],
  },
]
export default class Footer extends Component {
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
                    <p className="sign-up-title">Sign up for newsletter</p>
                    <div className="sign-up-wrapper">
                      <input
                        className="form-input"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                      <input
                        className="btn-blue"
                        type="submit"
                        value="Sign Up"
                      />
                    </div>
                    <Alert
                      type={this.state.alert}
                      text={this.state.alertMessage}
                      status={this.state.alert}
                      showAlert={this.state.alertIsShown}
                      toggleAlert={this.toggleAlert}
                    />
                  </form>
                </div>
              </div>
            </ObserverWrapper>
          </div>
          <div className="copyright-wrapper">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Open Coast. All Rights Reserved.{" "}
              <span className="copyright-text-notif">
                Designated trademarks and brands are the property of their
                respective owners
              </span>
            </p>
          </div>
        </div>
        <CookieConsent />
      </>
    )
  }
}
