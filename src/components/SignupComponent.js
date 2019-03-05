import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstName" size="large">
            <h3>First Name</h3>
            <FormControl
              autoFocus
              type="firstName"
              value={this.state.firstName}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="lastName" size="large">
            <h3>Last Name</h3>
            <FormControl
              autoFocus
              type="lastName"
              value={this.state.lastName}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="email" size="large">
            <h3>Email</h3>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password" size="large">
            <h3>Password</h3>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password" />
          </FormGroup>
          <Button
            block
            size="large"
            disabled={!this.validateForm()}
            type="submit" >Register</Button>
        </form>
        <i>Already registered? <Link to="/login">Log in</Link></i>
      </div>
    );
  }
}
