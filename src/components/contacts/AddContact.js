import React, { Component } from 'react'
import { Consumer } from "../../context"
import TextInputGroup from "../layout/TextInputGroup"
import uuid from "uuid";

class addContact extends Component {

  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const {name, email, phone } = this.state

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }

    // check for errors
    if (name === "") {
      this.setState({errors: {name: "Name is requared"}})
      return;
    }
    if (email === "") {
      this.setState({errors: {email: "Email is requared"}})
      return;
    }
    if (phone === "") {
      this.setState({errors: {phone: "Phone is requared"}})
      return;
    }

    dispatch ({ type: "ADD_CONTACT", payload: newContact });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/")
  }

  render() {

    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add new Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
        
                    <TextInputGroup
                      label="Name" 
                      name="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />

                    <TextInputGroup
                      type="email"
                      label="Email" 
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                      pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                    />

                    <TextInputGroup
                      type="tel"
                      label="Phone" 
                      name="phone"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                      pattern="^\+?\d{0,13}"
                    />


                    <input type="submit" value="Add Contact" className="btn btn-success btn-block"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default addContact;
