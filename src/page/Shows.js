import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button, Modal } from 'react-bootstrap';




function Shows(props) {
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


      <section id="iq-favorites" >
        <div className="container-fluid">
          <div className="block-space">
            <div className="row" style={{ marginTop: 40 }}>
              <div className="col-sm-12 overflow-hidden">
                <div className="iq-main-header d-flex align-items-center justify-content-between">
                  <h4 className="main-title">Shows</h4>
                  <Link to="" className="text-primary">View all</Link>
                </div>
              </div>
            </div>
            <div className="row">

              {moviedetails.map((movie) => (
                <div className="col-1-5 col-md-6 iq-mb-30">
                  <div className="epi-box">
                    <div className="epi-img position-relative">
                      <img src="images/episodes/02.jpg" className="img-fluid img-zoom" alt />
                      <div className="episode-play-info">
                        <div className="episode-play">
                          <a href="show-details.html">
                            <i className="ri-play-fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="epi-desc p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="text-white">11 Aug 20</span>
                        <span className="text-primary">30m</span>
                      </div>
                      <a href="show-details.html">
                        <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
              ))}





            </div>
          </div>
        </div>
      </section>



    </div>
  );

}
export default Shows;
