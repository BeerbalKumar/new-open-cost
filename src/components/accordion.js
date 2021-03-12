import React from "react"
import { Accordion, Card } from "react-bootstrap"
import "./../stylesheets/pages/landingPage.scss"

const accordianDetails = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
    index: 0,
    des:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
    index: 1,
    des:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
    index: 2,
    des:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
    index: 3,
    des:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
    index: 4,
    des:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
  },
]

export default class LandingPageAccordion extends React.Component {
  constructor() {
    super()
    this.state = {
      accordianDetails: [
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
          index: "0",
          des:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
          index: "1",
          des:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
          index: "2",
          des:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
        },
      ],
    }
  }

  view_more_hanler = () => {
    let { accordianDetails } = this.state
    accordianDetails.push(
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
        index: "3",
        des:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
        index: "4",
        des:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ateros lacus",
      }
    )
    this.setState({
      accordianDetails: accordianDetails,
    })
  }

  render() {
    return (
      <div>
        <Accordion defaultActiveKey={0}>
          {this.state.accordianDetails.map((val, i) => {
            return (
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={val.index}
                  style={{ padding: "25px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {val.title}
                    <img
                      src={require("./../assets/images/landingPage/Path 20.png")}
                      width="18px"
                      height="10px"
                    />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={val.index}>
                  <Card.Body>{val.des}</Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          })}
        </Accordion>
        <div style={{ textAlign: "center", padding: "10px" }}>
          {this.state.accordianDetails.length === 5 ? (
            ""
          ) : (
            <button
              className="_view_more_btn"
              onClick={() => this.view_more_hanler()}
            >
              View More
            </button>
          )}
        </div>
      </div>
    )
  }
}
