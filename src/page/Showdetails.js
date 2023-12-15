import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import { Redirect } from 'react-router';
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'


export class Showdetails extends Component {
  constructor() {
    super();
    let loggdin = false;
    this.register = this.register.bind(this);
    this.state = {
      email: '',
      Password: '',
      isLoading: false,
      fields: {},
      errors: {},
      datauserprofile: [],
      image: 'maleavter.png'
    }
  }
  componentDidMount() {
    // alert(this.state.email);
    axios.get(base.BASE_URL + '/frontuserfive').then(res => {
      this.setState({ datauserprofile: res.data });
    });

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
/*     if (this.state.loggdin) {
      return <Redirect to="/Dashboard" />
    } */
    return (
      /*     <div style={{ backgroundImage: `url(${background})` }}> profile-cover main-banner.jpg*/


      <div>
          <Header/>

<div className="video-container iq-main-slider">
  <video className="video d-block" controls loop>
    <source src="./video/sample-video.mp4" type="video/mp4" />
  </video>
</div>


<div className="main-content">
  <section className="movie-detail container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="trending-info season-info g-border">
          <h4 className="trending-text big-title text-uppercase mt-0">The Hero Camp</h4>
          <div className="d-flex align-items-center text-white text-detail episode-name mb-0">
            <span>S1E01</span>
            <span className="trending-year">Lorem Ipsum is dummy text</span>
          </div>
          <p className="trending-dec w-100 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.</p>
          <ul className="list-inline p-0 mt-4 share-icons music-play-lists">
            <li><span><i className="ri-add-line" /></span></li>
            <li><span><i className="ri-heart-fill" /></span></li>
            <li className="share">
              <span><i className="ri-share-fill" /></span>
              <div className="share-box">
                <div className="d-flex align-items-center">
                  <a href="#" className="share-ico"><i className="ri-facebook-fill" /></a>
                  <a href="#" className="share-ico"><i className="ri-twitter-fill" /></a>
                  <a href="#" className="share-ico"><i className="ri-links-fill" /></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="iq-favorites">
    <div className="container-fluid">
      <div className="block-space">
        <div className="row">
          <div className="col-sm-12 overflow-hidden">
            <div className="iq-main-header d-flex align-items-center justify-content-between">
              <h4 className="main-title">Latest Episodes</h4>
              <a href="show-single.html" className="text-primary">View all</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/01.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/03.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/04.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/05.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/06.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/07.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/08.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/09.jpg" className="img-fluid img-zoom" alt />
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
          <div className="col-1-5 col-md-6 iq-mb-30">
            <div className="epi-box">
              <div className="epi-img position-relative">
                <img src="images/episodes/10.jpg" className="img-fluid img-zoom" alt />
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
        </div>
      </div>
    </div>
  </section>
</div>


<Footer/>
      </div>
    )
  }
}

export default Showdetails