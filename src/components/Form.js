import React, { Component } from "react"

import addToMailchimp from 'gatsby-plugin-mailchimp'
import Alert from "../components/Alert"
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      cartName: '',
      message: '',
      number: '',
      name: '',
      company: '',
      otherType: '',
      alertIsShown: false,
      alert: '',
      alertMessage: '',
    }
  }

  handleChange(e, type) {
    if(type === 'message') {
      this.setState({message: e.target.value})
    } else if(type === 'number') {
      this.setState({number: e.target.value})
    } else if(type === 'cartName') {
      this.setState({cartName: e.target.value})
    } else if(type === 'name') {
      this.setState({name: e.target.value})
    } else if(type === 'company') {
      this.setState({company: e.target.value})
    } else if(type === 'email') {
      this.setState({email: e.target.value})
    } else {
      this.setState({otherType: e.target.value})
    }
  }

  handleForm = (e) => {
    e.preventDefault();

    addToMailchimp(this.state.email, {
      MESSAGE: this.state.message || '',
      PHONE: this.state.number || '',
      CARTNAME: this.state.cartName || '',
      FNAME: this.state.name || '',
      COMPANY: this.state.company || '',
      OTHERS: this.state.otherType || '',
      PATH: 'Form'
    })
    .then(data => {
      console.log(data)

      this.setState({
        email: '',
        cartName: '',
        message: '',
        number: '',
        name: '',
        company: '',
        otherType: '',
        alertIsShown: true,
        alert: data.result,
        alertMessage: data.msg
      });
    })
  }

  toggleAlert = () => {
    this.setState({alertIsShown: !this.state.alertIsShown })
    return this.state.alertIsShown
  }

  render() {

    const {
      btnText,
      content,
      title,
      text,
    } = this.props

    return (
      <div className="form-wrapper">
        <div className="container-custom">
          <ObserverWrapper>
            <h3>{ title }</h3>
            <p>{ text }</p>
            <Alert type={ this.state.alert } text={ this.state.alertMessage } status={ this.state.alert } showAlert={ this.state.alertIsShown } toggleAlert={ this.toggleAlert } />
            <form className="form-holder" onSubmit={(e) => this.handleForm(e)}>
              {content.map((data, index) => {
                if(data.type === 'message') {
                  return (
                    <div key={ index } className="form-textarea">
                      <textarea className="input" value={this.state.message}  onChange={(e) => this.handleChange(e, 'message')} placeholder={ data.placeholder } required></textarea>
                    </div>
                  )
                } else if(data.type === 'number') {
                  return (
                    <div key={ index } className="form-input">
                      <input className="input" value={this.state.number}  onChange={(e) => this.handleChange(e, 'number')} type={ data.type } placeholder={ data.placeholder } min="0" required/>
                    </div>
                    )
                } else if(data.type === 'cartName') {
                  return (
                    <div key={ index } className="form-input">
                      <input className="input" value={this.state.cartName}  onChange={(e) => this.handleChange(e, 'cartName')} type="text" placeholder={ data.placeholder } min="0" required/>
                    </div>
                    )
                } else if(data.type === 'name') {
                  return (
                    <div key={ index } className="form-input">
                      <input className="input" value={this.state.name}  onChange={(e) => this.handleChange(e, 'name')} type="text" placeholder={ data.placeholder } min="0" required/>
                    </div>
                    )
                } else if(data.type === 'company') {
                  return (
                    <div key={ index } className="form-input">
                      <input className="input" value={this.state.company}  onChange={(e) => this.handleChange(e, 'company')} type="text" placeholder={ data.placeholder } min="0" required/>
                    </div>
                    )
                } else if(data.type === 'email') {
                  return (
                    <div key={ index } className="form-input">
                      <input className="input" value={this.state.email}  onChange={(e) => this.handleChange(e, 'email')} type={ data.type } placeholder={ data.placeholder } min="0" required/>
                    </div>
                  )
                } else {
                  return (
                    <div key={ index } className="form-input">
                      <input className="input" value={this.state.otherType}  onChange={(e) => this.handleChange(e, data)} type={ data.type } placeholder={ data.placeholder }  required/>
                    </div>
                  )
                }
              })}
              <button className="btn-blue" type="submit">{ btnText }</button>
            </form>
          </ObserverWrapper>
        </div>
      </div>
    )
  }
}
