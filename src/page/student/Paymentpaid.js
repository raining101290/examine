import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Studentheader from './Studentheader'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Card from 'react-bootstrap/Card'

const Paymentpaid = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', width: '100%' }}>
      <Container style={{ padding: 20 }}>
        <Studentheader />
        <Container style={{ marginTop: 120 }}>
          <Row>
            <Col xs={6} sm={6}></Col>

            <Col xs={12} sm={6}>
              <Link to={'#'} style={{ textDecoration: 'none' }}>
                <Card style={{ marginBottom: 15 }}>
                  {/*  <Card.Img variant="top" src="/images/exam.png" style={{ backgroundPosition: '50%' }} />   */}

                  <Card.Body>
                    <h3>
                      Your Request has been submitted we will get back to soon
                    </h3>
                    <p>Mobile No for call : 89798789</p>
                    <p>
                      <Link to="/Studentdashboard">
                        Start to Check Your Course
                      </Link>
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default Paymentpaid
