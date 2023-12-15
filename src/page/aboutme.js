import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';



class aboutme extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.handlefirstname = this.handlefirstname.bind(this);
    this.handlelastname = this.handlelastname.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handleformage = this.handleformage.bind(this);
    this.handletoage = this.handletoage.bind(this);
    this.handledate = this.handledate.bind(this);
    this.handlemonth = this.handlemonth.bind(this);
    this.handleyear = this.handleyear.bind(this);
    this.handlecountry = this.handlecountry.bind(this);
    this.handleseeking_gender = this.handleseeking_gender.bind(this);
    this.handlegender = this.handlegender.bind(this);
     
    
    this.handlecity = this.handlecity.bind(this);


    this.state = {
      selectedFile: null,
      email: localStorage.getItem("emailaddress"),
      loggdin: '',
      firstname: '',
      lastname: '',
      gender: '',
      seeking_gender: '',
      age_from: '',
      age_to: '',
      birth_month: '',
      birth_day: '',
      birth_year: '',
      birth_month: '',
      status: '',
      city: '',
      country: ''

    }

  }
  //    this.handleseeking_gender = this.handleseeking_gender.bind(this);
  //    this.handlegender = this.handlegender.bind(this);
  handleseeking_gender(event) {
    this.setState({
      seeking_gender: event.target.value
    })
  }
  handlegender(event) {
    this.setState({
      gender: event.target.value
    })
  }

  handlecity(event) {
    this.setState({
      city: event.target.value
    })
  }
  handlecountry(event) {
    this.setState({
      country: event.target.value
    })
  }
  handlefirstname(event) {
    this.setState({
      firstname: event.target.value
    })
  }
  handlelastname(event) {
    this.setState({
      lastname: event.target.value
    })
  }
  handleemail(event) {
    this.setState({
      email: event.target.value
    })
  }


  handleyear(event) {
    this.setState({
      birth_year: event.target.value
    })
  }

  handledate(event) {
    this.setState({
      birth_day: event.target.value
    })
  }

  handlemonth(event) {
    this.setState({
      birth_month: event.target.value
    })
  }

  handleformage(event) {
    this.setState({
      age_from: event.target.value
    })
  }

  handletoage(event) {
    this.setState({
      age_to: event.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    alert(this.state.country);
     const formData = new FormData()
    formData.append('firstname', this.state.firstname)
    formData.append('lastname', this.state.lastname)
    formData.append('email', this.state.email)
    formData.append('birth_day', this.state.birth_day)
    formData.append('birth_month', this.state.birth_month)
    formData.append('birth_year', this.state.birth_year)
    formData.append('seeking_gender', this.state.seeking_gender)
    formData.append('gender', this.state.gender)
    formData.append('age_from', this.state.age_from)
    formData.append('age_to', this.state.age_to)
    formData.append('country', this.state.country)
    formData.append('city', this.state.city)

      axios.post(base.BASE_URL + "/profileedit", formData, {
      }).then(res => {
        console.log('KKKKKK :' + res);
        console.log(res.statusText)

         if (res.data.message == 'update') {
          alert('Upload Successfully');
        }
        else {
          alert('Failed');
        } 
      }) 
  //  }

    
  }
  componentDidMount() {


    axios.get(base.BASE_URL + '/viewprofile/' + this.state.email).then(res => {
      // this.setState({ datauserprofile: res.data });
      //  alert(res.data[0].firstname);
      this.setState({
        'firstname': res.data[0].firstname,
        'lastname': res.data[0].lastname,
        'gender': res.data[0].gender,
        'seeking_gender': res.data[0].seeking_gender,
        'age_from': res.data[0].age_from,
        'age_to': res.data[0].age_to,
        'birth_month': res.data[0].birth_month,
        'birth_day': res.data[0].birth_day,
        'birth_year': res.data[0].birth_year,
        'birth_month': res.data[0].birth_month,
        'status': res.data[0].status,
        'city': res.data[0].city,
        'country': res.data[0].country,

      });
    });
  }

  render() {
    if (this.state.loggdin) {
      return <Redirect to="/profile" />
    }
    return (
      <div>
        <Header />
        <div className="main_content">
          <div className="mcontainer" style={{ backgroundColor: '#fff'}}>

            {/*  */}
            <form onSubmit={this.onSubmit} style={{ padding: 20 }}>
            <div>
              <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>Profile Information</h3>
              <table style={{ width: '100%' }}>
                <tr>
                  <td>I am
                  </td>
                  <td>Looking for </td>
                </tr>
                <tr>
                  <td>
                    <select className="with-border" onChange={this.handlegender}>
                      <option selected value={this.state.gender}>{this.state.gender}</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Unknown">Unknown</option>
                    </select>
                  </td> 
                  <td>
                    <select className="with-border" onChange={this.handleseeking_gender}>
                      <option selected value={this.state.seeking_gender}>{this.state.seeking_gender}</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Unknown">Unknown</option>
                    </select>

                  </td>
                </tr>
              </table>


            </div>

            <div>
              <label className="mb-0"> First Name </label>
              <input type="text" placeholder="Your Name" name="firstname" value={this.state.firstname} onChange={this.handlefirstname}
                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"

              />

            </div>
            <div>
              <label className="mb-0"> Surename </label>
              <input type="text" placeholder="Last  Name" name="lastname" value={this.state.lastname} onChange={this.handlelastname} 

                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />


            </div>
            <div>
              <label className="mb-0"> Email Address </label>
              <input type="email" placeholder="Info@example.com" name="email" value={this.state.email} onChange={this.handleemail} /* value={this.state.email}  onChange={this.email} */

                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />

            </div>

            <div>
              <table style={{ width: '100%' }}>
                <tr>
                  <td>From Age</td>
                  <td>To Age</td>
                </tr>
                <tr>
                  <td>
                    <input type="number" placeholder="Date" name="date" /* value={this.state.lastname}  onChange={this.lastname} */

                      className="bg-gray-100" value={this.state.age_from} onChange={this.handleformage} />

                  </td>

                  <td>
                    <input type="number" placeholder="month" name="month" /* value={this.state.lastname}  onChange={this.lastname} */

                      className="bg-gray-100" value={this.state.age_to} onChange={this.handletoage} />

                  </td>


                </tr>
              </table>

            </div>
            <div>
              <label className="mb-0"> Date of Birth </label>
              <table style={{ width: '100%' }}>
                <tr>
                  <td>
                    <input type="number" placeholder="Date" name="date" /* value={this.state.lastname}  onChange={this.lastname} */

                      className="bg-gray-100" value={this.state.birth_day} onChange={this.handledate}/>

                  </td>

                  <td>
                    <input type="number" placeholder="month" name="month" /* value={this.state.lastname}  onChange={this.lastname} */

                      className="bg-gray-100" value={this.state.birth_month} onChange={this.handlemonth}/>

                  </td>

                  <td>
                    <input type="number" placeholder="year" name="year" /* value={this.state.lastname}  onChange={this.lastname} */

                      className="bg-gray-100" value={this.state.birth_year} onChange={this.handleyear} />

                  </td>

                </tr>
              </table>

            </div>
            <div>
              <label className="mb-0"> City </label>
              <input type="text" placeholder="City" name="city" /* value={this.state.lastname}  onChange={this.lastname} */

                className="bg-gray-100" value={this.state.city} onChange={this.handlecity}/>
            </div>
            <div>
              <label className="mb-0"> Country </label>
              <select className="with-border" onChange={this.handlecountry}>
                <option selected value={this.state.country}>{this.state.country}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div>
              <button className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full">Update</button>
            </div>
          </form>
            {/*  */}
          </div>
        </div>
      </div>
    )
  }
}

export default aboutme;