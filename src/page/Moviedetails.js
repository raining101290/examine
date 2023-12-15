import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
//import Header from '../Layout/Header'
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//npm i --save-dev @types/react-jw-player
//https://www.npmjs.com/package/react-jw-player
//https://www.npmjs.com/package/react-jw-player
import ReactJWPlayer from 'react-jw-player';





function Moviedetails(props) {
    const [moviedetails, setMoviedetails] = useState([]);
    const [categoriesdetails, setCategoriesdetails] = useState([]);
    const [rels, setRels] = useState([]);
    const [categoryid, setCategoryid] = useState(props.match.params.id);
    const [categoryids, setCategoryids] = useState(props.match.params.categoryid);
    const [categoryname, setCategoryname] = useState(props.match.params.categoryname);
    const [emailaddress, setEmailaddress] = useState(localStorage.getItem("emailaddress"));
    const [videourl, setVideourl] = useState('https://cdn.jwplayer.com/v2/playlists/');

    useEffect(() => {

        const getCategories = async () => {
            try {
                const res = await axios.get(base.BASE_URL + "/singlemovie/" + categoryid);
                setCategoriesdetails(res.data);
                console.log('movie.....' + res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategories();
    }, []);

    useEffect(() => {
        //alert(categoryids);
        const getrel = async () => {
            try {
                const reg = await axios.get(base.BASE_URL + "/rellist/" + categoryids);
                setRels(reg.data);
                console.log('Related.....' + reg.data);
            } catch (err) {
                console.log(err);
            }
        };
        getrel();

    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


/*     jwplayer("myElement").setup({
        "playlist": "https://cdn.jwplayer.com/v2/media/123acb4e",
        "advertising": {
          "client": "vast",
          "adscheduleid": "Az87bY12",
          "schedule": [
            {
              "offset": "pre",
              "tag": "https://www.domain.com/adtag.xml"
            },
            {
              "offset": 10,
              "tag": "https://www.domain.com/adtag-mid-roll1.xml"
            },
            {
              "offset": "00:00:15:000",
              "tag": "https://www.domain.com/adtag-mid-roll2.xml"
            },
            {
              "offset": "25%",
              "tag": "https://www.domain.com/adtag-mid-roll3.xml"
            },
            {
              "offset": "post",
              "tag": "https://www.domain.com/adtag-post-roll.xml"
            }
          ]
        }
      }); */


    if (emailaddress == null) {
        return <Redirect to="/Registration" />
    }
    return (


        <div>
            <Header />
            <section id="iq-favorites" >
                <div className="container-fluid">
                    <div className="block-space">
{/*<div className="row" style={{ marginTop: 40 }}>
<div className="col-sm-12 overflow-hidden">
<div className="iq-main-header d-flex align-items-center justify-content-between">
<h4 className="main-title">{categoryname}</h4>
<a href="show-single.html" className="text-primary">View all</a>
</div>
</div>
</div> */}
                        <div className="row" style={{ marginTop: 40 }}>
                            <div className="col-md-8">
                                {categoriesdetails.map((movie) => (
                                   
                                    <div>
                                        <div className="col-md-12">
                                       {/*  https://codesandbox.io/s/z3mqq2wx2l?file=/src/index.js:378-449 */}
                                            <ReactJWPlayer
                                                playerId="jw-player"
                                               // playerId="oW4ryqHc"
                                                playerScript="https://content.jwplatform.com/libraries/jvJ1Gu3c.js"
                                                playlist={movie.apiid}
                                                //uzge3hFE working from office account 0ZlQ34C6
                                                onDisplayClick={() => (document.body.style.backgroundColor = "black")}
                                                
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="trending-info season-info g-border" style={{ marginTop: 0 }}>
                                                <h4 className="trending-text big-title text-uppercase mt-0">{movie.moviename}</h4>
                                                {/*      <div className="d-flex align-items-center text-white text-detail episode-name mb-0">
                                                    <span>S1E01</span>
                                                    <span className="trending-year">{movie.moviename}</span>
                                                </div> */}
                                                <p className="trending-dec w-100 mb-0">{movie.movie_description}</p>
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
                                ))}


                            </div>
                            <div className="col-md-4">
                                <div style={{ width: '100%' }}>
                                    <h3 style={{ fontSize: 25, marginBottom: 20 }}>Recommended Videos</h3>
                                </div>
                                <div style={{ border: 1, borderWidth: 1, borderColor: '#fff', scrollBehavior: 'smooth', overflow: 'scroll', height: 600 }}>
                                    {rels.map((result) => (

                                        <div style={{ flex: 1, height: 100, marginBottom: 10, borderWidth: 1, borderColor: '#f1f1f1' }}>
                                            <div style={{ flexDirection: 'row' }}>
                                                <div style={{ width: '50%', float: 'left' }}>
                                                    <Link to={`/moviedetails/${result.movieid}/${result.categoryid}/${result.moviename}`}>
                                                        <img src={`${base.IMAGE_URL}/${result.image}`} className="img-fluid img-zoom"
                                                            alt={result.moviename} style={{ height: 100, width: '100%' }} />
                                                    </Link>
                                                </div>
                                                <div style={{ width: '50%', float: 'left' }}>
                                                    <p style={{ marginLeft: 5 }}>{result.moviename}</p>
                                                </div>
                                            </div>
                                        </div>


                                    ))}
                                </div>
                            </div>
                            {/*               {categoriesdetails.map((movie) => (
                <div className="col-1-5 col-md-6 iq-mb-30">
                  <div className="epi-box">
                    <div className="epi-img position-relative">

                      <Link to={`/Chapterdetails/${movie.subcategoryid}/${movie.categoryid}`}>
                        <img src={`${base.IMAGE_URL}/${movie.image}`} className="img-fluid img-zoom"
                          alt={movie.subcategoriesname} style={{ height: 120, width: '100%' }} />
                      </Link>
                      <div className="episode-play-info">
                        <div className="episode-play">
                        <Link to={`/Chapterdetails/${movie.subcategoryid}/${movie.categoryid}`}>
                            <i className="ri-play-fill" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="epi-desc p-3">
                    <Link to={`/Chapterdetails/${movie.subcategoryid}/${movie.categoryid}`}>
                        <h6 className="epi-name text-white mb-0">{movie.subcategoriesname}
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              ))} */}



                        </div>
                    </div>
                </div>
            </section>



        </div>
    );

}
export default Moviedetails;