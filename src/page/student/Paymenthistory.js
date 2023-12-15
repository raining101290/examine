import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useHistory } from 'react-router-dom';
import Studentheader from './Studentheader';
import LoadingSpinner from '../library/LoadingSpinner';
import * as base from "../global";
import axios from 'axios';

const Paymenthistory = () => {

  const [isloading, setIsloading] = useState(true);
  const [users, setUsers] = useState([]);
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {

    console.log(base.BASE_URL + '/getstudentpackageinfo/' + studentid)
    axios.get(base.BASE_URL + '/getstudentpackageinfo/' + studentid, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      setUsers(res.data);
      setIsloading(false)
      window.scrollTo(0, 0);

    });
    // setIsloading(false) 
  }

  return <div style={{ backgroundColor: '#f9f9f9', width: '100%', padding: 10 }}>
    <Studentheader /> {/* getstudentpackageinfo */}
    <div className="container" style={{ marginTop: 111 }}>
      {
        isloading ?
          <LoadingSpinner />
          :
          users ?
            users.map(d => {
              return <div class="card col-md-3 box-shadow" style={{
                padding: 5, marginRight: 5, marginLeft: 5,
                marginTop: 10, marginBottom: 10
              }}>
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">{d.packagename}</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">Amount : {d.amount} <small class="text-muted"></small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>{d.description}</li>
                    <li>Status: {d.status}</li>

                  </ul>
                  {/*    <Link 
                              to={"/Admissiontestpayment/" + d.packageid }
                               style={{ backgroundColor: 'rgb(108, 66, 152)',
                            width: '100%',
                            height: 40, color: '#ffffff', borderRadius: 15 }} class="btn">Buy Now</Link> */}
                </div>
              </div>

            })

            :
            ''
      }

    </div>
  </div>;
}


export default Paymenthistory;