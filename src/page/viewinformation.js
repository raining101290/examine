import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Editprofile from './editprofile'

export default class viewinformation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggdin: '',
      datauserprofile: [],
      email: localStorage.getItem("emailaddress"),
      dataviewprofileimage: [],
      datafavouritelist: [],
      automemberid: this.props.match.params.id
    }


  }
  componentDidMount() {
    // alert(this.state.email);
    axios.get(base.BASE_URL + '/viewanotherprofile/' + this.state.automemberid).then(res => {
      this.setState({ datauserprofile: res.data });
    });

    axios.get(base.BASE_URL + '/viewanotherprofileimage/' + this.state.automemberid).then(res => {
      this.setState({ dataviewprofileimage: res.data });
    });

    //favouritlist_another_tbl
    axios.get(base.BASE_URL + '/favouritlist_another_tbl/' + this.state.automemberid).then(res => {
      this.setState({ datafavouritelist: res.data });
    });

  }

  sendfriendrequest = () => {
    const fd = new FormData();
    fd.append('email', this.state.email);
    fd.append('autoid', this.state.automemberid);
    //autoid
    axios.post(base.BASE_URL + '/sendfirendrequest', fd
    ).then(res => {
      // alert(res.message);
      if (res.status == '200') {

        this.setState({ loggdin: true })
      }
      else {
        alert('Failed To Send Request')
      }
      console.log(res);
    }
    );

  }

  render() {

    if (this.state.email == null) {
      return <Redirect to="/" />
    }
    if (this.state.loggdin) {
      return <Redirect to="/profile" />
    }
    return (
      <div>
        <Header />
        {/* Main Contents */}
        <div className="main_content">
          <div className="mcontainer">
            <div className="profile user-profile">
              <div className="profiles_banner">
                <img src="assets/images/avatars/profile-cover.jpg" alt />
                <div className="profile_action absolute bottom-0 right-0 space-x-1.5 p-3 text-sm z-50 hidden lg:flex">
                  {/*           <a href="#" className="flex items-center justify-center h-8 px-3 rounded-md bg-gray-700 bg-opacity-70 text-white space-x-1.5"> 
            <ion-icon name="crop-outline" className="text-xl" />
            <span> Crop</span>
          </a> */}
                  {/*           <a href="#" className="flex items-center justify-center h-8 px-3 rounded-md bg-gray-700 bg-opacity-70 text-white space-x-1.5"> 
            <ion-icon name="create-outline" className="text-xl" />
            <span> Edit </span>
          </a> */}


                </div>
              </div>
              {this.state.datauserprofile.map((result) => {
                return (

                  <div className="profiles_content">
                    <div className="profile_avatar">
                      <div className="profile_avatar_holder">
                        {/*   <img src="assets/images/avatars/avatar-8.jpg" alt /> */}
                        {
                          result.com_logo == null ?
                            <Link to="/Editprofile"><img src="assets/images/avatars/avatar-80.jpg" alt /></Link>
                            :
                            <Link to="/Editprofile"><img src={`${base.IMAGE_URL}/${result.com_logo}`} /></Link>
                        }



                      </div>
                      <div className="user_status status_online" />
                      <div className="icon_change_photo" hidden> <ion-icon name="camera" className="text-xl" /> </div>
                    </div>
                    <div className="profile_info">
                      <h1>{result.firstname} {result.lastname}</h1>
                      <p style={{ textAlign: 'center' }}> {result.city} {result.country}</p>
                      {/*    <p style={{ textAlign: 'center' }}> <Link to="/Editprofile"><font color="red">Edit</font> </Link></p> */}

                      {/*    <Editprofile/> */}

                    </div>
                  </div>
                )
              })}

              <div className="flex justify-between lg:border-t flex-col-reverse lg:flex-row">
                <nav className="responsive-nav pl-2 is_ligh -mb-0.5 border-transparent">
                  <ul uk-switcher="connect: #timeline-tab; animation: uk-animation-fade">
                    <li><a href="#"> Timeline</a></li>
                    <li><a href="#">Friend <span>0</span> </a></li>
                    <li><a href="#">Photo </a></li>
                    {/*     <li><a href="#">Pages</a></li>
                    <li><a href="#">Groups</a></li> */}
                    <li><a href="#">Videos</a></li>
                  </ul>
                </nav>
                <div className="flex items-center space-x-1.5 flex-shrink-0 pr-3  justify-center order-1">
                  {/* <a href="#" class="text-blue-500"> See all </a> */}


                  <a href="#" onClick={this.sendfriendrequest} className="flex items-center justify-center h-10 px-5 rounded-md bg-blue-600 text-white  space-x-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span> Send Friend Request </span>
                  </a>

                  {this.state.datauserprofile.map((result) => {
                return (
                  <Link to={`/chat/${result.id}`} className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-100">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
                  </Link>
                )
                  })}
                  <a href="#" className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-100">
                    <ion-icon name="ellipsis-horizontal" className="text-xl" />
                  </a>
                  <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small; offset:5">
                    <ul className="space-y-1">
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                          <ion-icon name="arrow-redo-outline" className="pr-2 text-xl" /> Share Profile
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                          <ion-icon name="create-outline" className="pr-2 text-xl" />  Account setting
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                          <ion-icon name="notifications-off-outline" className="pr-2 text-lg" />   Disable notifications
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                          <ion-icon name="star-outline" className="pr-2 text-xl" />  Add favorites
                        </a>
                      </li>
                      <li>
                        <hr className="-mx-2 my-2 dark:border-gray-800" />
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-50 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                          <ion-icon name="stop-circle-outline" className="pr-2 text-xl" />  Unfriend
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-switcher lg:mt-8 mt-4" id="timeline-tab">
              {/* Timeline */}
              <div className="md:flex md:space-x-6 lg:mx-16">
                <div className="space-y-5 flex-shrink-0 md:w-7/12">
                  {/* Timeline  */}

                  <div className="card lg:mx-0 uk-animation-slide-bottom-small" style={{ padding: 20 }}>
                    {/* post header*/}
                    sdfsdfdsfs
                  </div>

                </div>
                {/* Sidebar */}
                <div className="w-full space-y-6">
                  <div className="widget card p-5">
                    <h4 className="text-lg font-semibold"> About </h4>
                    {this.state.datauserprofile.map((result) => {
                      return (
                        <div>
                          <ul className="text-gray-600 space-y-3 mt-3">
                            <li className="flex items-center space-x-2">
                              <ion-icon name="home-sharp" className="rounded-full bg-gray-200 text-xl p-1 mr-3" />
                              Live In <strong>  {result.city} , {result.country}</strong>
                            </li>

                            <li className="flex items-center space-x-2">
                              <ion-icon name="heart-sharp" className="rounded-full bg-gray-200 text-xl p-1 mr-3" />
                              From <strong> Relationship</strong>
                            </li>
                            <li className="flex items-center space-x-2">
                              <ion-icon name="logo-rss" className="rounded-full bg-gray-200 text-xl p-1 mr-3" />
                              Flowwed By <strong> 3,240 Peaple </strong>
                            </li>

                          </ul>
                        </div>
                      )
                    })}
                    {/*     <div className="gap-3 grid grid-cols-3 mt-4">
                      <img src="assets/images/avatars/avatar-lg-2.jpg" alt className="object-cover rounded-lg col-span-full" />
                      <img src="assets/images/avatars/avatar-2.jpg" alt className="rounded-lg" />
                      <img src="assets/images/avatars/avatar-4.jpg" alt className="rounded-lg" />
                      <img src="assets/images/avatars/avatar-5.jpg" alt className="rounded-lg" />
                    </div> */}
                    <a href="#" className="button gray mt-3 w-full"> View More.. </a>
                  </div>
                  <div className="widget card p-5 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold"> Friends </h4>
                        <p className="text-sm"> 0 Friends</p>
                      </div>
                      <a href="#" className="text-blue-600 ">See all</a>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-gray-600 font-semibold">
                      {this.state.datafavouritelist.map((resultfav) => {
                        return (

                          <Link to={`/viewinformation/${resultfav.id}/${resultfav.firstname}/${resultfav.lastname}`}>
                            <div className="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                              {
                                resultfav.com_logo == null ?

                             /*      <Link to={`/viewinformation/${result.id}/${result.firstname}/${result.lastname}`}> 
                                  <img src="assets/images/avatars/avatar-80.jpg" alt /> */
                                  <img src="assets/images/avatars/avatar-80.jpg" alt />
                                  
                               /*    </Link> */
                                  :
                                  <Link to={`/viewinformation/${resultfav.id}/${resultfav.firstname}/${resultfav.lastname}`}>
                                    <img src={`${base.IMAGE_URL}/${resultfav.com_logo}`} className="w-full h-full object-cover absolute" />

                                  </Link>
                              }
                              {/*  <img src="assets/images/avatars/avatar-1.jpg" alt className="w-full h-full object-cover absolute" /> */}
                            </div>
                            <div className="text-sm truncate"> {resultfav.firstname} {resultfav.lastname} </div>
                          </Link>
                        )
                      })}
                    </div>
                    <a href="#" className="button gray mt-3 w-full">  See all </a>
                  </div>

                </div>
              </div>
              {/* Friends  */}
              <div className="card md:p-6 p-2 max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold"> Friends List</h2>
                {/*                 <nav className="responsive-nav border-b">
                  <ul>
                    <li className="active"><a href="#" className="lg:px-2"> All Friends <span> 3,4510 </span> </a></li>
                    <li><a href="#" className="lg:px-2"> Recently added </a></li>
                    <li><a href="#" className="lg:px-2"> Family </a></li>
                    <li><a href="#" className="lg:px-2"> University </a></li>
                  </ul>
                </nav> */}
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4 mt-3">

                  {this.state.datafavouritelist.map((result) => {
                    return (


                      <div className="card p-2">
                        <Link to={`/viewinformation/${result.id}/${result.firstname}/${result.lastname}`}>
                          {/*    <img src="assets/images/avatars/avatar-5.jpg" className="h-36 object-cover rounded-md shadow-sm w-full" /> */}
                          {
                            result.com_logo == '' ?

                              <Link to={`/viewinformation/${result.id}/${result.firstname}/${result.lastname}`}> 
                              <img src="assets/images/avatars/avatar-80.jpg" alt />
                              </Link>
                              :
                              <Link to={`/viewinformation/${result.id}/${result.firstname}/${result.lastname}`}>
                                <img src={`${base.IMAGE_URL}/${result.com_logo}`} className="h-36 object-cover rounded-md shadow-sm w-full" />

                              </Link>
                          }
                        </Link>
                        <div className="pt-3 px-1">
                        <Link to={`/viewinformation/${result.id}/${result.firstname}/${result.lastname}`} 
                        className="text-base font-semibold mb-0.5">  {result.firstname} {result.lastname}  </Link>
                          <p className="font-medium text-sm">843K Following </p>
                          <button className="bg-blue-100 w-full flex font-semibold h-8 
                          items-center justify-center mt-3 px-3 rounded-md text-blue-600 text-sm mb-1">
                            Add Friend
                          </button>
                        </div>
                      </div>

                    )
                  })}

                </div>
                <div className="flex justify-center mt-6">
                  <a href="#" className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                    Load more ..</a>
                </div>
              </div>
              {/* Photos  */}
              <div className="card md:p-6 p-2 max-w-3xl mx-auto">
                <div className="flex justify-between items-start relative md:mb-4 mb-3">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold"> Photosyyy </h2>
                    {/*                     <nav className="responsive-nav style-2 md:m-0 -mx-4">
                      <ul>
                        <li className="active"><a href="#">  Photos of you  <span> 230</span> </a></li>
                        <li><a href="#"> Recently added </a></li>
                        <li><a href="#"> Family </a></li>
                        <li><a href="#"> University </a></li>
                        <li><a href="#"> Albums </a></li>
                      </ul>
                    </nav> */}
                  </div>
                  <Link to="/myphotoupload" uk-toggle className="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-blue-600 text-white absolute right-0" data-tippy-placement="left" title="Upload New Photo">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                  </Link>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-5">

                  {this.state.dataviewprofileimage.map((result) => {
                    return (


                      <div>
                        <div className="bg-green-400 max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow uk-transition-toggle">

                          <Link to="/Editprofile"><img src={`${base.IMAGE_URL}/${result.com_logo}`} className="w-full h-full absolute object-cover inset-0" /></Link>
                          {/*   <img src="assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0" /> */}
                          {/* overly*/}
                          <div className="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full" />
                          <div className="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small">
                            <div className="text-base">{result.title}</div>
                            {/*        <div className="flex justify-between text-xs">
                          <a href="#">  Like</a>
                          <a href="#">  Comment </a>
                          <a href="#">  Share </a>
                        </div> */}
                          </div>
                        </div>
                      </div>


                    )
                  })}



                </div>
                {/*        <div className="flex justify-center mt-6">
                  <a href="#" className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                    Load more ..</a>
                </div> */}
              </div>
              {/* Pages  */}
              <div className="card md:p-6 p-2 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold"> Pages</h2>
                <nav className="responsive-nav border-b md:m-0 -mx-4">
                  <ul>
                    <li className="active"><a href="#" className="lg:px-2"> Following </a></li>
                    <li><a href="#" className="lg:px-2"> Newest </a></li>
                    <li><a href="#" className="lg:px-2"> My pages</a></li>
                    <li><a href="#" className="lg:px-2"> Suggestions</a></li>
                  </ul>
                </nav>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-5">
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-4.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5"> John Michael</a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-3.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5">
                        Alex Dolgove </a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-5.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5"> Dennis Han</a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-7.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5">  Monroe Parker </a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-6.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5"> Erica Jones </a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-2.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5">  Stella Johnson</a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-4.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5"> John Michael</a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <a href="timeline-page.html">
                      <img src="assets/images/avatars/avatar-3.jpg" className="h-36 object-cover rounded-t-md shadow-sm w-full" />
                    </a>
                    <div className="p-3">
                      <a href="timeline-page.html" className="text-base font-semibold mb-0.5">
                        Alex Dolgove </a>
                      <p className="font-medium text-sm">843K Following </p>
                      <button className="bg-gray-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md  text-sm">
                        Following
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <a href="#" className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                    Load more ..</a>
                </div>
              </div>
              {/* Groups  */}
              <div className="card md:p-6 p-2 max-w-3xl mx-auto">
                <div className="flex justify-between items-start relative md:mb-4 mb-3">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold"> Groups </h2>
                    <nav className="responsive-nav style-2 md:m-0 -mx-4">
                      <ul>
                        <li className="active"><a href="#"> Joined <span> 230</span> </a></li>
                        <li><a href="#"> My Groups </a></li>
                        <li><a href="#"> Discover </a></li>
                      </ul>
                    </nav>
                  </div>
                  <a href="create-group.html" data-tippy-placement="left" data-tippy data-original-title="Create New Album" className="bg-blue-100 font-semibold py-2 px-6 rounded-md text-sm md:mt-0 mt-3 text-blue-600">
                    Create
                  </a>
                </div>
                <div className="grid md:grid-cols-2  grid-cols-2 gap-x-2 gap-y-4 mt-3">
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-3.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize">Graphic Design </a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-4.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize"> Mountain Riders</a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-2.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize">  Coffee Addicts</a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-5.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize">  Property Rent</a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-1.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize"> Architecture </a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-3.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize">Graphic Design </a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-4.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize"> Mountain Riders</a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                  <div className="flex items-center flex-col md:flex-row justify-center p-4 rounded-md shadow hover:shadow-md md:space-x-4">
                    <a href="timeline-group.html" iv className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-full relative">
                      <img src="assets/images/group/group-2.jpg" className="absolute w-full h-full inset-0 " alt />
                    </a>
                    <div className="flex-1">
                      <a href="timeline-page.html" className="text-base font-semibold capitalize">  Coffee Addicts</a>
                      <div className="text-sm text-gray-500"> 54 mutual friends </div>
                    </div>
                    <button className="bg-gray-100 font-semibold py-2 px-3 rounded-md text-sm md:mt-0 mt-3">
                      Following
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <a href="#" className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                    Load more ..</a>
                </div>
              </div>
              {/* Videos */}
              <div className="card md:p-6 p-2 max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold"> Friend</h2>
                <nav className="responsive-nav border-b">
                  <ul>
                    <li className="active"><a href="#" className="lg:px-2">   Suggestions </a></li>
                    <li><a href="#" className="lg:px-2"> Newest </a></li>
                    <li><a href="#" className="lg:px-2"> My Videos </a></li>
                  </ul>
                </nav>
                <div className="grid md:grid-cols-3 grid-cols-2  gap-x-2 gap-y-4 mt-3">
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-1.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-2.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-3.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-4.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-5.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-6.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-3.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-2.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                  <div>
                    <a href="video-watch.html" className="w-full h-36 overflow-hidden rounded-lg relative block">
                      <img src="assets/images/video/img-4.png" alt className="w-full h-full absolute inset-0 object-cover" />
                      <span className="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                      <img src="assets/images/icon-play.svg" className="w-12 h-12 uk-position-center" alt />
                    </a>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <a href="#" className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                    Load more ..</a>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    );
  }
}
