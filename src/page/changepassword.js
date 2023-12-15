import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';



class changepassword extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.handlenewpassword = this.handlenewpassword.bind(this);
        this.handlepreviouspassword = this.handlepreviouspassword.bind(this);
        this.handleemail = this.handleemail.bind(this);


        this.handleconfirmpassword = this.handleconfirmpassword.bind(this);


        this.state = {
            email: localStorage.getItem("emailaddress"),
            previouspassword: '',
            confirmnewpasswrod: '',
            newpassword: ''

        }

    }
    //    this.handleseeking_gender = this.handleseeking_gender.bind(this);
    //    this.handlegender = this.handlegender.bind(this);

    handleconfirmpassword(event) {
        this.setState({
            confirmnewpasswrod: event.target.value
        })
    }


    handlenewpassword(event) {
        this.setState({
            newpassword: event.target.value
        })
    }
    handlepreviouspassword(event) {
        this.setState({
            previouspassword: event.target.value
        })
    }
    handleemail(event) {
        this.setState({
            email: event.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault()

     //   alert(this.state.email);

    if(this.state.email == '' || this.state.newpassword == '' || this.state.confirmnewpasswrod == '')  
    {
        alert('Insert the Required Field');
    }
    else
    {
        const formData = new FormData()

        formData.append('email', this.state.email)
        formData.append('previouspassword', this.state.previouspassword)
        formData.append('newpassword', this.state.newpassword)
        formData.append('confirmnewpasswrod', this.state.confirmnewpasswrod)


        axios.post(base.BASE_URL + "/changepassword", formData, {
        }).then(res => {
            console.log('KKKKKK :' + res);
            console.log(res.statusText)

            if (res.data.message == 'update') {
                alert('Upload Successfully');
            }
            else if (res.data.message == 'NOTMATCH') {
                alert('New Password and Confirm Password is not Match');
            }
            //previouspasswordnotmatch
            else if (res.data.message == 'previouspasswordnotmatch') {
                alert('Previous Password is not match');
            }
            else {
                alert('Failed');
            }
        })
    }  

        //  }


    }
    componentDidMount() {


        /*     axios.get(base.BASE_URL + '/viewprofile/' + this.state.email).then(res => {
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
            }); */
    }

    render() {

        return (
            <div>
                <Header />
                <div className="main_content">
                    <div className="mcontainer" style={{ backgroundColor: '#fff' }}>

                        {/*  */}
                        <form onSubmit={this.onSubmit} style={{ padding: 20 }}>
                            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Change Password </h3>

                            <div>
                                <label className="mb-0"> Previous Password </label>
                                <input type="text" placeholder=" Previous Password " name="previouspassord" value={this.state.previouspassword} onChange={this.handlepreviouspassword}
                                    className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"

                                />

                            </div>
                            <div>
                                <label className="mb-0"> New Password </label>
                                <input type="text" placeholder=" New Password " name="newpassword" value={this.state.newpassword} onChange={this.handlenewpassword}

                                    className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />


                            </div>
                            <div>
                                <label className="mb-0"> Confirm New Password </label>
                                <input type="text" placeholder=" Confirm New Password " name="Confirmnewpassword" value={this.state.confirmnewpasswrod} onChange={this.handleconfirmpassword} /* value={this.state.email}  onChange={this.email} */

                                    className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full" />

                            </div>


                            <div>
                                <button className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full">Change Password </button>
                            </div>
                        </form>
                        {/*  */}
                    </div>
                </div>
            </div>
        )
    }
}

export default changepassword;