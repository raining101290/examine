import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Signinwithaccount extends Component {
  constructor() {
    super()
    //let loggdin = false;
    this.state = {
      email: '',
      Password: '',
      isLoading: false,
      fields: {},
      errors: {},
      datauserprofile: [],
      image: 'maleavter.png',
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)

    // const formdata = {
    //   pagetype: "Homepage"
    // }
    // axios.post(base.BASE_URL + "/visitor", formdata, {
    // }).then(res => {
    //   console.log('data..file..' + res.data);
    // })
  }

  render() {
    return (
      <div>
        <Container>
          <Header />
          <div
            style={{
              padding: 100,
              flexDirection: 'row',
              textAlign: 'center',
              marginTop: 100,
            }}
          >
            <Row className="justify-content-md-center">
              {/* <Col sm={6}>
                <Link to="/Login" className="purple-button">
                  <div className="button-subtext">teachers</div>
                  <div className="teacherbuttonhome">
                    <div className="teacherbuttonhomesignup">Sign In</div>
                    <FontAwesomeIcon icon="faManatSign" className='teacherbuttonhomeicon'></FontAwesomeIcon>  
                    <img
                      src="/images/62fa6419161d3ac288681cdc_Purple_Arrow_Button.svg"
                      loading="lazy"
                      style={{ textAlign: 'right', marginLeft: 20, width: 12 }}
                      alt="Purple Right Arrow"
                      className="teacherbuttonhomeicon"
                    ></img>
                  </div>
                </Link>
              </Col> */}
              <Col sm={6}>
                <Link to="/Studentlogin" className="grey-button">
                  <div class="button-subtext">Student</div>
                  <div className="teacherbuttonhome">
                    <div className="teacherbuttonhomesignup"> Sign In </div>
                    <img
                      src="/images/62fa6419161d3ac288681cdc_Purple_Arrow_Button.svg"
                      loading="lazy"
                      style={{ textAlign: 'right', marginLeft: 20, width: 12 }}
                      alt="Purple Right Arrow"
                      className="teacherbuttonhomeicon"
                    ></img>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Signinwithaccount
