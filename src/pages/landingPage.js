import React, { Component } from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import LandingPageNavbar from "../components/landingPageNavbar"
import LandingPageFooter from "../components/landingPageFooter"
import Testimonial from "../components/Testimonial"
import LandingPageAccordion from "../components/accordion"
import FirebaseApp from "./../config/firebase"
import Helmet from "react-helmet"
import SEO from "../components/Seo"
import "./../stylesheets/pages/landingPage.scss"
import "bootstrap/dist/css/bootstrap.min.css"

let database = FirebaseApp.database().ref("/")

const testimonialContent = [
  {
    profileImg: "testimonial-profile-1.png",
    text:
      "Our team was thrilled when we found Open Coast. We're now able to curate our online store with leading designers and our customers have responded really positively. Consistent access to this merchandise used to be a real challenge. Also Open Coast has a Shopify integration that’s super easy to use — we were set up in just a few minutes.",
    job: "Ankita, Founder of Boutique Online Store",
    img: "testimonial-img-1.jpg",
    alt: "Testimonial by Ankita, Founder of Boutique Online Store",
  },
  {
    profileImg: "testimonial-profile-2.png",
    text:
      "We're always looking for reliable, new channels to sell on. Ebay and Amazon are ok but there's so much competition there. Because of Open Coast we now have over 140 Retailers throughout the world selling our products at any given time. We just wait for orders to come in and ship them out. It's simple.",
    job: "Trevor, VP of Wholesale, AppareDealCo",
    img: "testimonial-img-2.jpg",
    alt: "Testimonial by Trevor, VP of Wholesale, AppareDealCo",
  },
  {
    profileImg: "testimonial-profile-3.png",
    text:
      "There is nothing quite like this company. Other services, which have high monthly fees only allow you to sell on the well known marketplaces. But this opens the door to a range of retailers globally. It's online interface is extremely easy to use and has completely changed our business.",
    job: "June, Head of Sales at PurseParade",
    img: "testimonial-img-3.jpg",
    alt: "Testimonial by June, Head of Sales at PurseParade",
  },
  {
    profileImg: "testimonial-profile-4.png",
    text:
      "Open Coast has been a powerful tool for our business. We have a Supplier account which has helped us grow sales of our own branded merchandise. We were taken back by how much interest online retailers had in our brand. This experience has been nothing but positive, could not speak more highly about this platform.",
    job: "Craig, Co-creator of I.L.I.O.T.B",
    img: "testimonial-img-4.jpg",
    alt: "Testimonial by Craig, Co-creator of I.L.I.O.T.B",
  },
  {
    profileImg: "testimonial-profile-5.png",
    text:
      "Open Coast has allowed us to find two new Suppliers in our own country and a handful more overseas. Sales have increased over 75% since forming these new relationships and we've doubled the amount of products offered on our eCommerce store. We weren't expecting this — the results have been truly amazing.",
    job: "Jennifer, Head of Sourcing at Tres Chic",
    img: "testimonial-img-5.jpg",
    alt: "Testimonial by Jennifer, Head of Sourcing at Tres Chic",
  },
]

export default class LandingPage extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      website: "",
      errorMessage: "",
    }
  }

  // <<<<<<<<<<<<<<<<< SUBMIT DATA >>>>>>>>>>>>>>>>>>
  submit_handler = () => {
    let { name, email, phoneNumber, website } = this.state
    if (name === "") {
      this.setState({ errorMessage: "Fullname is required" })
    } else if (email === "") {
      this.setState({ errorMessage: "Email is required" })
    } else if (phoneNumber === "") {
      this.setState({ errorMessage: "Phone Number is required" })
    } else if (website === "") {
      this.setState({ errorMessage: "Website is required" })
    } else {
      database.child("Requests/").push({
        name,
        email,
        phoneNumber,
        website,
      })
        .then((res) => {
          console.log("successfully added")
          window.location.reload()
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }
  render() {
    return (
      <div>
        <Helmet title="Open Coast | Home" />
        <SEO
          title="Open Coast"
          description="Open Coast is a sourcing and fulfillment marketplace, connecting suppliers of premium merchandise to online stores globally."
        />
        <LandingPageNavbar />

        <div className="_header_sec" id="home">
          <Container fluid>
            <Row className="justify-content-center">
              <Col lg="5">
                <p className="_heading_txt">
                  FAMOUS BRANDS and DESIGNERS at WHOLESALE PRICES for your
                  ONLINE STORE
                </p>
              </Col>
            </Row>
          </Container>
          <div className="_header_images">
            <div className="header_images-sec">
              <img
                src={require("../assets/images/landingPage/Mask Group 1.png")}
                className="_headerImage1"
              />
            </div>
            <div className="header_images-sec">
              <img
                src={require("../assets/images/landingPage/Mask Group 2.png")}
                className="_headerImage2"
              />
            </div>
            <div className="header_images-sec">
              <img
                src={require("../assets/images/landingPage/Mask Group 3.png")}
                className="_headerImage3"
              />
            </div>
            <div className="header_images-sec">
              <img
                src={require("../assets/images/landingPage/Mask Group 4.png")}
                className="_headerImage4"
              />
            </div>
            <div className="header_images-sec">
              <img
                src={require("../assets/images/landingPage/Mask Group 5.png")}
                className="_headerImage5"
              />
            </div>
          </div>
        </div>

        {/* <<<<<<<<<<<<<<<<<< ABOUT US >>>>>>>>>>>>>>>>>>> */}
        <div id="about-us">
          <Container fluid>
            <Row className="justify-content-center">
              <Col lg="5">
                <div className="_retailers_sec">
                  <p className="_retailers_txt">
                    Trusted by <span className="_thousands_txt">THOUSANDS</span>{" "}
                    of online Retailers globally
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="_brands_sec">
          <p className="_brands_txt">
            Access 600 brands and 70,000 Wholesale products, all in one place
          </p>
          <img
            src={require("../assets/images/landingPage/Screen Shot 2021-03-09 at 5.24.30 PM.png")}
            className="brands_img"
          />
        </div>

        <div className="_as_see_in">
          <p className="_as_see_txt">As see in</p>
          <div className="_as_see_in_images">
            <div>
              <img
                src={require("../assets/images/landingPage/Line 6.png")}
                className="forbes_img"
              />
            </div>
            <div>
              <img
                src={require("../assets/images/landingPage/Image 3.png")}
                className="forbes_img"
              />
            </div>
            <div>
              <img
                src={require("../assets/images/landingPage/Image 4.png")}
                className="forbes_img"
              />
            </div>
            <div>
              <img
                src={require("../assets/images/landingPage/Line 6.png")}
                className="forbes_img"
              />
            </div>
          </div>
        </div>

        <div className="retailer_sec">
          <p className="_retailer_txt">
            Are you an online Retailer that is constantly looking to expand your
            brand offering across all categories?
          </p>
          <p className="_retailer_txt1">You’ve come to the right place</p>
          <Container style={{ marginTop: "50px" }} fluid>
            <Row className="justify-content-center">
              <Col lg="4">
                <div>
                  <img
                    className="_retailer_image1"
                    src={require("../assets/images/landingPage/ezgif.com-gif-maker.png")}
                  />
                </div>
              </Col>
              <Col lg="4">
                <div>
                  <p className="_retailer_des">
                    Our B2B sourcing platform is free and easy-to-use — browse
                    products, brands, pricing from your computer or smartphone.
                    No more struggling with complicated CSV files or
                    spreadsheets. We’ve made everything modern and effortless.
                  </p>
                  <p className="_retailer_des1">
                    We work with authorized distributors of leading fashion
                    brands and designers. All merchandise is certified authentic
                    with a 110% cash back guarantee. All paperwork and sanitized
                    invoices are available upon request.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div>
                  <img
                    className="_retailer_image2"
                    src={require("../assets/images/landingPage/pexels-spencer-selover-775358.png")}
                  />
                  <img
                    className="_retailer_image3"
                    src={require("../assets/images/landingPage/pexels-ksenia-chernaya-3965548.png")}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <<<<<<<<<<<<<<<<<< GET IN TOUCH >>>>>>>>>>>>>>>>>>> */}
        <div className="contact_sec" id="contact-us">
          <Container>
            <Row className="justify-content-center">
              <Col lg="6">
                <div>
                  <p className="_why_us_txt">
                    Why Us{" "}
                    <img
                      src={require("../assets/images/landingPage/Line 8.png")}
                      className="_line_img"
                    />
                  </p>
                  <div className="_contact_box_sec">
                    <div className="_contact_boxes">
                      <img
                        src={require("../assets/images/landingPage/1.png")}
                        className="_box_icon"
                      />
                      <p>No Contracts</p>
                    </div>
                    <div className="_contact_boxes">
                      <img
                        src={require("../assets/images/landingPage/022---Advisor-Fees.png")}
                        className="_box_icon"
                      />
                      <p>No Monthly Membership</p>
                    </div>
                    <div className="_contact_boxes">
                      <img
                        src={require("../assets/images/landingPage/3.png")}
                        className="_box_icon"
                      />
                      <p>No Transaction Fees</p>
                    </div>
                  </div>
                  <div className="contact_points_sec">
                    <img src={require("../assets/images/landingPage/4.png")} />
                    <p className="contact_points_des">
                      Affordable brands ranging from Tommy Hilfiger to Nike, all
                      the way to up Luxury brands like Alexander McQueen and
                      Balenciaga
                    </p>
                  </div>
                  <div className="contact_points_sec">
                    <img src={require("../assets/images/landingPage/4.png")} />
                    <p className="contact_points_des">
                      We cover all the major fashion categories including:
                      Clothing, Shoes, Bags, Accessories, and Jewelry.
                    </p>
                  </div>
                  <div className="contact_points_sec">
                    <img src={require("../assets/images/landingPage/4.png")} />
                    <p className="contact_points_des">
                      True wholesale pricing 40% to 80% off MSRP. Our focus is
                      Current season offerings but if you are a discount
                      Retailer there are options to browse previous seasons too.
                    </p>
                  </div>
                  <div className="contact_points_sec">
                    <img src={require("../assets/images/landingPage/4.png")} />
                    <p className="contact_points_des">
                      We have flexible solutions for Retailers of all sizes
                      ranging from wholesale bulk transactions to
                      technology-focused tools like APIs
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div>
                  <p className="_get_in_txt">Get In Touch</p>
                  <div style={{ textAlign: "center" }}>
                    <div className="_label">Full Name</div>
                    <input
                      className="_contact_input"
                      type="text"
                      name="name"
                      placeholder="John Dev"
                      onChange={e =>
                        this.setState({
                          name: e.target.value,
                          errorMessage: "",
                        })
                      }
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className="_label">Email</div>
                    <input
                      className="_contact_input"
                      type="email"
                      name="email"
                      placeholder="johndev@gmail.com"
                      onChange={e =>
                        this.setState({
                          email: e.target.value,
                          errorMessage: "",
                        })
                      }
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className="_label">Phone Number</div>
                    <input
                      className="_contact_input"
                      type="number"
                      name="Phone Number"
                      placeholder="0123456789"
                      onChange={e =>
                        this.setState({
                          phoneNumber: e.target.value,
                          errorMessage: "",
                        })
                      }
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className="_label">Website</div>
                    <input
                      className="_contact_input"
                      type="text"
                      name="website"
                      placeholder="www.website.com"
                      onChange={e =>
                        this.setState({
                          website: e.target.value,
                          errorMessage: "",
                        })
                      }
                    />
                  </div>
                  <div className="errorMessage">{this.state.errorMessage}</div>
                  <button
                    className="submit_button"
                    onClick={() => this.submit_handler()}
                  >
                    SEE FULL BRAND LIST + CATALOG
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <<<<<<<<<<<<<<<<<< GET IN TOUCH END >>>>>>>>>>>>>>>>>>> */}

        {/* <<<<<<<<<<<<<<<<<< OUR SUPPLIERS >>>>>>>>>>>>>>>>>>> */}
        <div className="_our_supplier_sec">
          <p className="_our_supplier_heading">Our Suppliers</p>
          <p className="_our_supplier_des">
            Our Suppliers are based in leading fashion markets like
          </p>
          <div className="countries_sec">
            <Container>
              <Row className="justify-content-center">
                <Col lg="3">
                  <div className="_country_sec">
                    <img
                      src={require("../assets/images/landingPage/Mask Group 6.png")}
                      className="_country_image"
                    />
                    <p>Italy</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="_country_sec">
                    <img
                      src={require("../assets/images/landingPage/Mask Group 7.png")}
                      className="_country_image"
                    />
                    <p>UK</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="_country_sec">
                    <img
                      src={require("../assets/images/landingPage/Mask Group 8.png")}
                      className="_country_image"
                    />
                    <p>Spain</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="_country_sec">
                    <img
                      src={require("../assets/images/landingPage/Mask Group 9.png")}
                      className="_country_image"
                    />
                    <p>USA</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="did_we_mention_sec">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <p className="did_we_mention_txt1">Did we mention </p>
                <p className="did_we_mention_txt2">
                  Many Of Our Wholesale Suppliers And Distributors Are Also Able
                  To Provide Merchandise On Consignment,
                </p>
                <p className="did_we_mention_txt3">With Very Flexible Terms</p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <<<<<<<<<<<<<<<<<< TESTIMONIALS >>>>>>>>>>>>>>>>>>> */}
        <main className="home" id="testimonials">
          <div className="_testimonial_heading">
            Hear from some of our customers
          </div>
          <Testimonial testimonialContent={testimonialContent} />
        </main>

        {/* <<<<<<<<<<<<<<<<<< HAVE ANY QUESTION PART >>>>>>>>>>>>>>>>>>> */}
        <div className="_have_any_question_sec">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <div>
                  <p className="help_txt1">Have Any Questions?</p>
                  <p className="help_txt2">We Are Here To Help</p>
                  <LandingPageAccordion />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <LandingPageFooter />
      </div>
    )
  }
}
