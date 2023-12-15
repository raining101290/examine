import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Editprofile from './editprofile'
export default class profile extends Component {

  constructor(props) {
    super(props);

    const token = localStorage.getItem("token")
    let loggdin = true;
    if (token == null) {
      loggdin = false
    }
    this.state = {
      loggdin,
      datauserprofile: [],
      email: localStorage.getItem("emailaddress"),
      dataviewprofileimage:[],
      datafavouritelist:[],
      automemberid:''
    }


  }
  componentDidMount() {
    // alert(this.state.email);
    axios.get(base.BASE_URL + '/viewprofile/' + this.state.email).then(res => {
     // alert();
      this.setState({ datauserprofile: res.data, automemberid: res.data[0].id });
    });

    axios.get(base.BASE_URL + '/viewprofileimage/' + this.state.email).then(res => {
      this.setState({ dataviewprofileimage: res.data });
    });
  //  alert(this.state.automemberid);
    //favouritlist_another_tbl
    axios.get(base.BASE_URL + '/favouritlist_my_tbl/' + this.state.email).then(res => {
      this.setState({ datafavouritelist: res.data });
    });

  }
  /*   EditData(result) {
      alert(result.email);
      this.setState({ name: result.name, address: result.address, contact: result.contact, 
        email: result.email, id: result._id, Buttontxt: 'Update' });
    }
   */
  render() {

    if (this.state.email == null) {
      return <Redirect to="/" />
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
                      <p style={{ textAlign: 'center' }}> <Link to="/Aboutme"><font color="red">Edit</font> </Link></p>

                      {/*    <Editprofile/> */}

                    </div>
                  </div>
                )
              })}

              <div className="flex justify-between lg:border-t flex-col-reverse lg:flex-row">
                <nav className="responsive-nav pl-2 is_ligh -mb-0.5 border-transparent">
                  <ul uk-switcher="connect: #timeline-tab; animation: uk-animation-fade">
                    <li><a href="#"> Timeline</a></li>
                    <li><a href="#">Friend {/* <span>3,243</span> */} </a></li>
                    <li><a href="#">Photo </a></li>
                {/*     <li><a href="#">Pages</a></li>
                    <li><a href="#">Groups</a></li> */}
                    <li><a href="#">Videos</a></li>
                  </ul>
                </nav>
                <div className="flex items-center space-x-1.5 flex-shrink-0 pr-3  justify-center order-1">
                  {/* <a href="#" class="text-blue-500"> See all </a> */}
                  <Link to="/Createpost" className="flex items-center justify-center h-10 px-5 rounded-md bg-blue-600 text-white  space-x-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span> Add New Post </span>
                  </Link>
                  <a href="#" className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-100">
                    <ion-icon name="search" className="text-xl" />
                  </a>
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
                  <div className="card lg:mx-0 p-4" uk-toggle="target: #create-post-modal">
                    <div className="flex space-x-3">
                      <img src="assets/images/avatars/avatar-2.jpg" className="w-10 h-10 rounded-full" />
                      <input placeholder="What's Your Mind ? Hamse!" className="bg-gray-100 hover:bg-gray-200 flex-1 h-10 px-6 rounded-full" />
                    </div>
                    <div className="grid grid-flow-col pt-3 -mx-1 -mb-1 font-semibold text-sm">
                      <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
                        <svg className="bg-blue-100 h-9 mr-2 p-1.5 rounded-full text-blue-600 w-9 -my-0.5 hidden lg:block" data-tippy-placement="top" title="Tooltip" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Photo/Video
                      </div>
                      <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
                        <svg className="bg-green-100 h-9 mr-2 p-1.5 rounded-full text-green-600 w-9 -my-0.5 hidden lg:block" uk-tooltip="title: Messages ; pos: bottom ;offset:7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title aria-expanded="false"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        Tag Friend
                      </div>
                      <div className="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer">
                        <svg className="bg-red-100 h-9 mr-2 p-1.5 rounded-full text-red-600 w-9 -my-0.5 hidden lg:block" uk-tooltip="title: Messages ; pos: bottom ;offset:7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title aria-expanded="false"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        Fealing /Activity
                      </div>
                    </div>
                  </div>
                  <div className="card lg:mx-0 uk-animation-slide-bottom-small">
                    {/* post header*/}
                    <div className="flex justify-between items-center lg:p-4 p-2.5">
                      <div className="flex flex-1 items-center space-x-4">
                        <a href="#">
                          <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-10 h-10" />
                        </a>
                        <div className="flex-1 font-semibold capitalize">
                          <a href="#" className="text-black dark:text-gray-100"> Johnson smith </a>
                          <div className="text-gray-700 flex items-center space-x-2"> 5 <span> hrs </span> <ion-icon name="people" /></div>
                        </div>
                      </div>
                      <div>
                        <a href="#"> <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" /> </a>
                        <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small">
                          <ul className="space-y-1">
                            <li>
                              <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <i className="uil-share-alt mr-1" /> Share
                              </a>
                            </li>
                            <li>
                              <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <i className="uil-edit-alt mr-1" />  Edit Post
                              </a>
                            </li>
                            <li>
                              <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <i className="uil-comment-slash mr-1" />   Disable comments
                              </a>
                            </li>
                            <li>
                              <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <i className="uil-favorite mr-1" />  Add favorites
                              </a>
                            </li>
                            <li>
                              <hr className="-mx-2 my-2 dark:border-gray-800" />
                            </li>
                            <li>
                              <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                <i className="uil-trash-alt mr-1" />  Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div uk-lightbox>
                      <a href="assets/images/avatars/avatar-lg-3.jpg">
                        <img src="assets/images/avatars/avatar-lg-4.jpg" alt className="max-h-96 w-full object-cover" />
                      </a>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex space-x-4 lg:font-bold">
                        <a href="#" className="flex items-center space-x-2">
                          <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </div>
                          <div> Like</div>
                        </a>
                        <a href="#" className="flex items-center space-x-2">
                          <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div> Comment</div>
                        </a>
                        <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
                          <div className="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                          </div>
                          <div> Share</div>
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 pt-2">
                        <div className="flex items-center">
                          <img src="assets/images/avatars/avatar-1.jpg" alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
                          <img src="assets/images/avatars/avatar-4.jpg" alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                          <img src="assets/images/avatars/avatar-2.jpg" alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                        </div>
                        <div className="dark:text-gray-100">
                          Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                        </div>
                      </div>
                      <div className="border-t py-4 space-y-4 dark:border-gray-600">
                        <div className="flex">
                          <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                            <img src="assets/images/avatars/avatar-1.jpg" alt className="absolute h-full rounded-full w-full" />
                          </div>
                          <div>
                            <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
                              <p className="leading-6">In ut odio libero vulputate <urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                              <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                            </div>
                            <div className="text-sm flex items-center space-x-3 mt-2 ml-5">
                              <a href="#" className="text-red-600"> <i className="uil-heart" /> Love </a>
                              <a href="#"> Replay </a>
                              <span> 3d </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                            <img src="assets/images/avatars/avatar-1.jpg" alt className="absolute h-full rounded-full w-full" />
                          </div>
                          <div>
                            <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
                              <p className="leading-6"> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. David !<i className="uil-grin-tongue-wink-alt" /> </p>
                              <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                            </div>
                            <div className="text-xs flex items-center space-x-3 mt-2 ml-5">
                              <a href="#" className="text-red-600"> <i className="uil-heart" /> Love </a>
                              <a href="#"> Replay </a>
                              <span> 3d </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="hover:text-blue-600 hover:underline">  Veiw 8 more Comments </a>
                      <div className="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
                        <input placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none px-5" />
                        <div className="-m-0.5 absolute bottom-0 flex items-center right-3 text-xl">
                          <a href="#">
                            <ion-icon name="happy-outline" className="hover:bg-gray-200 p-1.5 rounded-full" />
                          </a>
                          <a href="#">
                            <ion-icon name="image-outline" className="hover:bg-gray-200 p-1.5 rounded-full" />
                          </a>
                          <a href="#">
                            <ion-icon name="link-outline" className="hover:bg-gray-200 p-1.5 rounded-full" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="flex justify-center mt-6">
                    <a href="#" className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                      Load more ..</a>
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
                    <Link to="/Aboutme" className="button gray mt-3 w-full"> Edit </Link>
                  </div>
                  <div className="widget card p-5 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold"> Friends </h4>
                      {/*   <p className="text-sm"> 0 Friends xxxx</p> */}
                      </div>
                      <Link to="/Seeallfriend" className="text-blue-600 ">See all</Link>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-gray-600 font-semibold">
                    {this.state.datafavouritelist.map((resultfav) => {
                        return (    

                      <Link to={`/viewinformation/${resultfav.id}/${resultfav.firstname}/${resultfav.lastname}`}>
                        <div className="avatar relative rounded-md overflow-hidden w-full h-24 mb-2">
                          <img src={`${base.IMAGE_URL}/${resultfav.com_logo}`} alt className="w-full h-full object-cover absolute" />
                        </div>
                        <div className="text-sm truncate"> {resultfav.firstname} {resultfav.lastname} </div>
                      </Link>
                        )
                    })}
                    </div>
                    <Link to="/Seeallfriend" className="button gray mt-3 w-full">  See all </Link>
                  </div>
                  <div className="widget card p-5 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold"> Advertisment </h4>
                      </div>
                      <a href="#" className="text-blue-600 "> See all</a>
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                        <a href="timeline-group.html" className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                          <img src="assets/images/group/group-3.jpg" className="absolute w-full h-full inset-0 " alt />
                        </a>
                        <div className="flex-1">
                          <a href="timeline-page.html" className="text-base font-semibold capitalize"> Graphic Design</a>
                          <div className="text-sm text-gray-500 mt-0.5"> 345K  Following</div>
                        </div>
                        <a href="timeline-page.html" className="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                          Join
                        </a>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                        <a href="timeline-group.html" className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                          <img src="assets/images/group/group-4.jpg" className="absolute w-full h-full inset-0 " alt />
                        </a>
                        <div className="flex-1">
                          <a href="timeline-page.html" className="text-base font-semibold capitalize"> Mountain Riders </a>
                          <div className="text-sm text-gray-500 mt-0.5"> 452k Following </div>
                        </div>
                        <a href="timeline-page.html" className="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                          Join
                        </a>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                        <a href="timeline-group.html" className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                          <img src="assets/images/group/group-2.jpg" className="absolute w-full h-full inset-0" alt />
                        </a>
                        <div className="flex-1">
                          <a href="timeline-page.html" className="text-base font-semibold capitalize">  Coffee Addicts</a>
                          <div className="text-sm text-gray-500 mt-0.5"> 845K Following</div>
                        </div>
                        <a href="timeline-page.html" className="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                          Join
                        </a>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                        <a href="timeline-group.html" className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                          <img src="assets/images/group/group-1.jpg" className="absolute w-full h-full inset-0" alt />
                        </a>
                        <div className="flex-1">
                          <a href="timeline-page.html" className="text-base font-semibold capitalize"> Architecture  </a>
                          <div className="text-sm text-gray-500 mt-0.5"> 237K Following</div>
                        </div>
                        <a href="timeline-page.html" className="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Friends  */}
              <div className="card md:p-6 p-2 max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold"> Friends</h2>
                <nav className="responsive-nav border-b">
                  <ul>
                    <li className="active"><a href="#" className="lg:px-2"> All Friends {/* <span> 3,4510 </span> */} </a></li>
                {/*     <li><a href="#" className="lg:px-2"> Recently added </a></li>
                    <li><a href="#" className="lg:px-2"> Family </a></li>
                    <li><a href="#" className="lg:px-2"> University </a></li> */}
                  </ul>
                </nav>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4 mt-3">
                 {/* Profile friend List */}
                {this.state.datafavouritelist.map((resultfav) => {
                        return (                 
                  <div className="card p-2">
                    <Link to={`/chat/${resultfav.id}`}>
                  {/*     <img src="assets/images/avatars/avatar-3.jpg" className="h-36 object-cover rounded-md shadow-sm w-full" /> */}
                      <img src={`${base.IMAGE_URL}/${resultfav.com_logo}`} className="h-36 object-cover rounded-md shadow-sm w-full" />
                    </Link>
                    <div className="pt-3 px-1">
                      <a href="timeline.html" className="text-base font-semibold mb-0.5"> {resultfav.firstname}</a>
                  {/*     <p className="font-medium text-sm">843K Following </p> */}
                      <button className="bg-blue-100 w-full flex font-semibold h-8 items-center justify-center mt-3 px-3 rounded-md text-blue-600 text-sm mb-1">
                        Following
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
                    
                    <Link to="/Editprofile"><img src={`${base.IMAGE_URL}/${result.com_logo}`} className="w-full h-full absolute object-cover inset-0"/></Link>                   
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
