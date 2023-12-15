import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import { Redirect } from 'react-router';

export class Home_off extends Component {
  constructor() {
    super();
    let loggdin = false;
    this.register = this.register.bind(this);
    this.state = {
      email: '',
      Password: '',
      isLoading: false,
      fields: {},
      errors: {}
    }
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    // alert(this.state.fields["email"]);
    if (!this.state.fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if (!this.state.fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof this.state.fields["email"] !== "undefined") {
      let lastAtPos = this.state.fields["email"].lastIndexOf('@');
      let lastDotPos = this.state.fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (this.state.fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  register() {
    if (this.handleValidation()) {
      // alert("Form submitted");
      //////////////////////////////////////////////////////////////////////
      fetch(base.BASE_URL + '/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.fields["email"],
          password: this.state.fields["password"]
        })
      }).then((Response) => Response.json())
        .then((Result) => {
          if (Result.message == 'success') {
            localStorage.setItem("token", 'dsfsdfdsfdsf314654654654654165464')
            localStorage.setItem("emailaddress", this.state.fields["email"])

            this.setState({ loggdin: true })
          }
          else {
            alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
          }

        })

      /////////////////////////////////////////////////////////////////////
    } else {
      // alert("Form has errors.")
    }


  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    if (this.state.loggdin) {
      return <Redirect to="/Dashboard" />
    }
    return (
      <div style={{ backgroundColor:'green' }}>

        <div class="bg-white py-4 shadow dark:bg-gray-800">
          <div class="max-w-6xl mx-auto">


            <div class="flex items-center lg:justify-between justify-around">

              <Link to="/">
                <img src="./assets/images/logo.png" alt="" class="w-32" />
              </Link>

              <div class="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
              <Link to="/" class="py-3 px-4"> Login</Link>
              <Link to="/Registration" class="bg-purple-500 purple-500 px-6 py-3 rounded-md shadow text-white">Register</Link>
              </div>

            </div>
          </div>
        </div>


        <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
          <Form class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
            <h1 class="lg:text-2xl text-xl font-semibold mb-6"> Login </h1>

            <div>
              <label class="mb-0"> Email Address </label>
              <input type="email" placeholder="Info@example.com" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            </div>
            <div>
              <label class="mb-0"> Password </label>
              <input type="password" placeholder="******" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
            </div>

            <div>

              <button type="button" class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full" onClick={this.register}>
                Get Started</button>

            </div>
          </Form>
          <div>
            <Link to="/Registration">
              <button type="button" class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full">
                Create New Account </button>
            </Link>
          </div>



        </div>

      </ div>
    )
  }
}

export default Home