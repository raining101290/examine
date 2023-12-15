//import React, { Component } from 'react';
import React, {useEffect,useState} from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
import { Link } from 'react-router-dom';
import axios from 'axios';
//pagination npm install react-js-pagination
import Pagination from "react-js-pagination";
import ReactDOM from 'react-dom';

//https://www.codecheef.org/article/laravel-react-js-pagination-example-from-scratch
//export default class findpeople extends Component {
  function Seeallfriend() {
    const [state, setData] = useState({
      users: ''
  });

  const fetchData = async (pageNumber = 1) => {
      const api = await fetch(base.BASE_URL + `/getalluser?page=${pageNumber}`);
      setData({
          users: await api.json()
      });
  };

  useEffect(() => {
      fetchData();
  }, [])


    return (
      <div>
        <Header />
        {/* Main Contents */}
        <div className="main_content">
          <div className="mcontainer">
            {/* Main people List */}


            <div class="flex justify-between items-center relative md:mb-4 mb-3">
              <div class="flex-1">
                <h2 class="text-2xl font-semibold"> All Friend </h2>
              {/*   <nav class="responsive-nav border-b md:m-0 -mx-4">
                  <ul>
                    <li class="active"><a href="#" class="lg:px-2">  Photos of you  <span> 230</span> </a></li>
                    <li><a href="#" class="lg:px-2"> Recently added </a></li>
                    <li><a href="#" class="lg:px-2"> Family </a></li>
                    <li><a href="#" class="lg:px-2"> University </a></li>
                    <li><a href="#" class="lg:px-2"> Albums </a></li>
                  </ul>
                </nav> */}


              </div>
              <Link to="/findpeople" uk-toggle class="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-blue-600 text-white absolute right-0"
                data-tippy-placement="left" title="Add More Friend">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              </Link>
            </div>

            <div class="grid md:grid-cols-4 grid-cols-2 gap-3 mt-5">

{   
state?.users?.data ? 
    state?.users?.data?.map((result) => (
      <div className="card">
      <div className="card-media h-40">
        <div className="card-media-overly" />
        <Link to={`/viewinformation/${result.id}/${result.firstname}/${result.lastname}`}>
        <img src={`${base.IMAGE_URL}/${result.com_logo}`} style={{ width: '100%', height: '100%' }}/>
        </Link>
        <span className="absolute bg-white px-2 py-1 text-sm rounded-md m-2"> Label</span>
        <button className="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
          <i className="icon-feather-heart"> </i>
        </button>
      </div>
      <div className="card-body">
        <div className="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
         0 yrs
        </div>
        <div className="text-xs font-semibold uppercase text-yellow-500">Herbel</div>
        <div className="ext-lg font-medium mt-1 t truncate"> {result.firstname}  {result.lastname} </div>
      </div>
    </div>
    )) : "Loading..."
}


           </div>


        

            {/* End Main Poeple List */}
<div style={{ width: '100%', marginTop: 20 }}>
<Pagination
activePage={state?.users?.current_page ? state?.users?.current_page : 0}
itemsCountPerPage={state?.users?.per_page ? state?.users?.per_page : 0 }
totalItemsCount={state?.users?.total ? state?.users?.total : 0}
onChange={(pageNumber) => {
fetchData(pageNumber)
}}
pageRangeDisplayed={8}
itemClass="page-item"
linkClass="page-link"
//firstPageText="First Page"
//lastPageText="Last Lage"
/>

</div>




          </div>




        </div>
        
    
      </div>
    );
  }
  export default Seeallfriend;
