import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation

export class Continuewithemail extends Component {

  constructor() {
    super();

/*     this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.firstname = this.firstname.bind(this);
    this.lastname = this.lastname.bind(this); */
    this.register = this.register.bind(this);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      Password: '',
      isLoading: 'notloading',
      logincheck:'',
      fields: {},
      errors: {}
    }



  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
  //  alert(this.state.fields["email"]);
    //Name
    if (!this.state.fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "Cannot be empty";
    }
    if (!this.state.fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }
    if (!this.state.fields["reentrypassword"]) {
      formIsValid = false;
      errors["reentrypassword"] = "Cannot be empty";
    }


    /*     if (typeof this.state.fields["email"] !== "undefined") {
          if (!this.state.email.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["email"] = "Only letters";
          }
        } */

    //Email
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
      this.setState({ isLoading: 'loading' })
      const formdata = {
        firstname: this.state.fields["firstname"],
        email: this.state.fields["email"],
        password: this.state.fields["password"],
        reentrypassword: this.state.fields["reentrypassword"]
      }
      //////////////////////////////////////////////////usersignup /signup.php////////////////////
      axios.post(base.BASE_URL + "/vendorsignup", formdata, {
      }).then(res => {
        console.log('KKKKKK :' + res);
        console.log('data....' + res.data)
        console.log('data..file..' + res.data.message);
        //res.statusText res.data.message
        //alert(res.data);
        if (res.data.message == 'success') {
          localStorage.setItem("token", 'dsfsdfdsfdsf314654654654654165464')
          localStorage.setItem("vendoremailaddress", this.state.fields["email"])
          this.setState({ logincheck: 'yes', isLoading: 'notloading' })

         
        }
        else if (res.data.message == 'email already exits') {
          alert('Email is Already exit, please try to login')
        }
        else if (res.data.message == 'required') {
          alert('Insert the required fields')
        }
        //required
        else {
          alert('Failed');
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
    if (this.state.logincheck == 'yes') {
      return <Redirect to="/Dashboard" />
    }
    return (
      <div>

<section className="sign-in-page">
          <div className="container">
            <div className="row justify-content-center align-items-center height-self-center">
              <div className="col-lg-7 col-md-12 align-self-center">
                <div className="sign-user_card ">
                  <div className="sign-in-page-data">
                    <div className="sign-in-from w-100 m-auto">
                      {
                        this.state.isLoading == 'notloading'
                        ?
                        <Form className="lg:p-6 p-6 space-y-3 relative shadow-xl rounded-md" >
                        <h1 className="lg:text-2xl text-xl font-semibold mb-6" style={{ fontSize: 22, marginBottom: 9 }}> Vendor Sign Up </h1>
                        <div>
                          <label className="mb-0"> Name / Company Name </label>
                          <input type="text" placeholder=" " name="firstname" /* value={this.state.firstname} onChange={this.firstname}  */
                            className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                            onChange={this.handleChange.bind(this, "firstname")} value={this.state.fields["firstname"]}
                          />
                          <span style={{ color: "red" }}>{this.state.errors["firstname"]}</span>
                        </div>
              
                        <div>
                          <label className="mb-0"> Email Address </label>
                          <input type="email" placeholder=" " name="email" /* value={this.state.email}  onChange={this.email} */
                            onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
                            className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />
                          <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                        </div>
                        <div>
                          <label className="mb-0"> Password </label>
                          <input type="password" placeholder=" " name="password" /* value={this.state.password} onChange={this.password} */
                            onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}
                            className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />
                          <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                        </div>
                        <div>
                          <label className="mb-0"> Re entry Password </label>
                          <input type="password" placeholder=" " name="password" /* value={this.state.password} onChange={this.password} */
                            onChange={this.handleChange.bind(this, "reentrypassword")} value={this.state.fields["reentrypassword"]}
                            className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />
                          <span style={{ color: "red" }}>{this.state.errors["reentrypassword"]}</span>
                        </div>
                        <div>
                          <Button type="button" className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full"
                           onClick={this.register} style={{ marginTop: -10 }}>
                            Get Started</Button>

                        </div>
            
                      </Form>
                      :
                      <div>
                        <p style={{ color: '#fff' }}>Loading...</p>
                      <ActivityIndicator size="small" color="#0000ff" />
                      {/*   <ActivityIndicator number={10} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={25} /> */}
                        </div>
                      }


          </div>
                  </div>
             <div className="mt-3">
            <div className="d-flex justify-content-center links">
              Already have an account? <Link to="/Login" className="text-primary ml-2">Sign In</Link>
            </div>                        
          </div> 
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>


    )

  }
}

export default Continuewithemail