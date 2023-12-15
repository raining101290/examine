import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button, Modal } from 'react-bootstrap';
import Sliderpage from './slider/sliderpage'
import Movielist from './drama/movielist'
import Footer from '../Layout/Footer'


function Movies(props) {
  const [moviedetails, setMoviedetails] = useState([]);


  useEffect(() => {
    // alert(userid);
    const getConversations = async () => {
      try {
        const res = await axios.get(base.BASE_URL + "/allvideo.php");
        setMoviedetails(res.data);
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, []);



  return (
    <div>
      <Header />

      < Sliderpage />

      <section id="iq-favorites" style={{ marginTop: 0 }}>
        <div className="container-fluid">
          <div className="block-space">
            <div className="row" style={{ marginTop: 40 }}>
              <div className="col-sm-12 overflow-hidden">
                <div className="iq-main-header d-flex align-items-center justify-content-between">
                  <h4 className="main-title">NEW MOVIES</h4>
                  <Link to="" className="text-primary">VIEW ALL</Link>
                </div>
              </div>
            </div>
            <Movielist />
          </div>
        </div>
      </section>


<Footer />
    </div>
  );

}
export default Movies;
