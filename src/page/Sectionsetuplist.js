import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import Topbar from '../Layout/Topbar';
import { Redirect } from 'react-router';
import * as base from "./global";
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import axios from 'axios';
//pagination npm install react-js-pagination
import Pagination from "react-js-pagination";
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



//https://www.codecheef.org/article/laravel-react-js-pagination-example-from-scratch
//export default class findpeople extends Component {
function Sectionsetuplist(props) {
    const [state, setData] = useState({ users: [] });
    const [email, setEmail] = useState(localStorage.getItem("vendoremailaddress"));
    const [isdelete, setIsdelete] = useState(false)
    //   const [fromage, setFromage] = useState(props.match.params.frmid);
    //   const [toage, setToage] = useState(props.match.params.toid);

    const fetchData = async (pageNumber = 1) => {
        //  alert(email);
        //  const api = await fetch(base.BASE_URL + `/getalluser?page=${pageNumber}`);
        console.log(base.BASE_URL + '/sectionlist/' + pageNumber + '/5')
        const api = await fetch(base.BASE_URL + '/sectionlist/' + pageNumber + '/50');
        //  console.log(await api.json());
        setData({
            users: await api.json()

        });
        window.scrollTo(0, 0);

    };

    useEffect(() => {
        fetchData();
    }, [isdelete])

    const deleteEmployee = (id) => {
        var answer = window.confirm("Are you sure you want to delete ?");
        if (answer) {
            setIsdelete(true);
            axios.post(base.BASE_URL + '/delete_section', {
                id: id
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {

                    if (response.data == "delete") {
                        setIsdelete(false);

                    }
                    else if (response.data == "notfound") {

                    }
                }, (error) => {
                    console.log(error);
                });
        } else {
            ///////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////
        }

    }

  

    return (
        <div>

                    <Header /> {/* Slider Menu */}
                    <Container style={{ marginTop: 86 }}>
                            <div className="container-fluid">
                                {/* Page Heading */}
                                <div className="row">
                                    <div className='col-md-12 firstcolumn'>
                                        <div className='secondcolumn'>
                                            <p>List of Section </p>
                                        </div>
                                        <div className='thirdcolumn'>
                                            <Link to="/Sectionsetup" className='btn btn-primary'
                                                style={{ marginBottom: 20 }}
                                            >
                                                Add New
                                            </Link>
                                        </div>
                                    </div>

                <table className='table'>
                <tr>
                <td>School Name</td>
                    <td>Section Name</td>
                    <td>Delete</td>
                </tr>
                
                {
                    state?.users ?
                        state?.users?.map((result) => (
                            //console.log('' + result);
                            <tr>
                                 <td>{result.schoolname}</td>
                                <td>{result.sectionname}</td>
                                <td>
                                <Button variant="danger"
                                onClick={() => deleteEmployee(result._id)}
                                style={{ color: '#000' }}
                                >Delete</Button>
                                    </td>
                            </tr>
                        )) : "Loading..."
                }
            </table>


                                </div>

                              {/*   <Pagination
                                    activePage={state?.users?.current_page ? state?.users?.current_page : 0}
                                    itemsCountPerPage={state?.users?.per_page ? state?.users?.per_page : 0}
                                    totalItemsCount={state?.total ? state?.total : 0}
                                    onChange={(pageNumber) => {
                                        fetchData(pageNumber)
                                    }}
                                    pageRangeDisplayed={8}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                /> */}

                            </div>
                </Container>          

        </div>
    );
}
export default Sectionsetuplist;
