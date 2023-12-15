import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Sidebar extends Component {
    render() {
        return (
            <div>

{/* sidebar */}
<div className="sidebar">
  <div className="sidebar_header"> 
    <img src="assets/images/logo.png" alt />
    <img src="assets/images/logo-icon.html" className="logo-icon" alt />
    <span className="btn-mobile" uk-toggle="target: #wrapper ; cls: is-collapse is-active" />
  </div>
  <div className="sidebar_inner" data-simplebar>
    <ul>
      <li className="active"><a href="feed.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-600"> 
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span> Feed </span> </a> 
      </li>
      <li><a href="pages.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-500">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
          </svg> 
          <span> Pages </span> </a> 
      </li>
      <li><a href="videos.html">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-red-500">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
          </svg>
          <span> Video</span></a> 
      </li> 
      <li><a href="groups.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-500">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg><span> Groups </span></a> 
      </li>
      <li><a href="courses.html">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-green-500">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <span> Course</span></a> 
      </li>
      <li><a href="jobs.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-pink-500">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg> <span> Jobs</span> </a> 
      </li> 
      <li><a href="blogs.html">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-red-500">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
          </svg>
          <span> Blog</span></a> 
      </li> 
      <li id="more-veiw" hidden><a href="products.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-green-500">
            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
          <span> Products</span></a> 
      </li>
      <li id="more-veiw" hidden><a href="events.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-500">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg><span>  Events </span></a> 
      </li> 
      <li id="more-veiw" hidden><a href="albums.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-500">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>  <span>  Photos </span></a> 
      </li>
      <li id="more-veiw" hidden><a href="games.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-red-500">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>  <span>  Games </span></a> 
      </li>
      <li id="more-veiw" hidden><a href="forums.html"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-500">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
          <span> forum</span> </a> 
      </li>
    </ul>
    <a href="#" className="see-mover h-10 flex my-1 pl-2 rounded-xl text-gray-600" uk-toggle="target: #more-veiw; animation: uk-animation-fade"> 
      <span className="w-full flex items-center" id="more-veiw">
        <svg className="  bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        See More  
      </span>
      <span className="w-full flex items-center" id="more-veiw" hidden>
        <svg className="bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg> 
        See Less 
      </span>
    </a> 
    <hr />
    <h3 className="text-lg mt-3 font-semibold ml-2 is-title"> Contacts </h3>
    <div className="contact-list my-2 ml-1">
      <a href="timeline.html">
        <div className="contact-avatar">
          <img src="assets/images/avatars/avatar-1.jpg" alt />
          <span className="user_status status_online" />
        </div>
        <div className="contact-username"> Dennis Han</div>
      </a>
      <a href="timeline.html">
        <div className="contact-avatar">
          <img src="assets/images/avatars/avatar-2.jpg" alt />
          <span className="user_status" />
        </div>
        <div className="contact-username"> Erica Jones</div>
      </a>
      <a href="timeline.html">
        <div className="contact-avatar">
          <img src="assets/images/avatars/avatar-7.jpg" alt />
        </div>
        <div className="contact-username">Stella Johnson</div>
      </a>
      <a href="timeline.html">
        <div className="contact-avatar">
          <img src="assets/images/avatars/avatar-4.jpg" alt />
        </div>
        <div className="contact-username"> Alex Dolgove</div>
      </a>
    </div>
    <hr />
    <h3 className="text-lg mt-3 font-semibold ml-2 is-title"> Pages </h3>
    <ul className="-space-y-1.5">
      <li><a href="pages-setting.html"> Setting layout 1 </a> </li>
      <li><a href="pages-setting2.html"> Setting layout 2 </a> </li>
      <li><a href="feed.html"> Authentication</a> 
        <ul>
          <li><a href="form-login.html">form login </a></li>
          <li><a href="form-register.html">form register</a></li>
        </ul>
      </li>
      <li><a href="#"> Create forms</a> 
        <ul>
          <li><a href="create-group.html"> Create Group </a></li>
          <li><a href="create-page.html"> Create Page </a></li> 
        </ul>
      </li>
    </ul>
    <hr />
    <div className="footer-links">
      <a href="#">About</a>
      <a href="#">Blog </a>
      <a href="#">Careers</a>
      <a href="#">Support</a>
      <a href="#">Contact Us </a>
      <a href="#">Developer</a>
      <a href="#">Terms of service</a>
    </div>
  </div>
</div>


            </ div>
        )
    }
}

export default Sidebar