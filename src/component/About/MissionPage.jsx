import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../css/MissionPage.css' // Ensure this file has the necessary styles
import img1 from '../../imgs/Rectangle35.png'
import img2 from '../../imgs/Rectangle36.png'

const MissionPage = () => {
  return (
    <Container fluid className='Mission-container'>
      <Row className='align-items-center my-5 mission-row justify-content-between mx-1'>
        {/* Left Column - Text */}
        <Col lg={5} md={6} sm={12} className='text-left mx-5 mt-5'>
          <h2 className='mission-heading'>Mission</h2>
          <h3 className='mission-subheading'>
            Our <span className='purple-text'>Vision</span>
          </h3>
          <div className='text'>
            <div className='mission-text'>
              <p>
                To enhance our client’s business progression with revolutionary
              </p>
              <p>
                designs and unique software development solutions, contributing
              </p>
              <p>towards the competitive digital global market.</p>
            </div>
            <blockquote className='mission-quote'>
              <p>"We, at Folium along with the perseverance of our skilled</p>
              <p>
                competent, and highly qualified professionals, aim to make
                state-
              </p>
              <p>
                of-the-art business transformations in the high-tech sphere."
              </p>
            </blockquote>
            <div className='mission-text'>
              <p>We put our best efforts to boost corporate performance,</p>
              <p>
                eventually making them close to their potential customers. Our{' '}
              </p>
              <p>
                brilliant custom software development services make our clients
              </p>{' '}
              <p>
                earn a competitive advantage in the inventive marketplace and
              </p>{' '}
              <p>lead them on the roads of success and prosperity.</p>
            </div>
          </div>
        </Col>

        {/* Right Column - Image */}
        <Col lg={5} md={6} sm={12} className='text-center mx-5 mt-5'>
          <div className='image-section'>
            <img src={img2} alt='Discussion' className='img-bottom-left' />
            <div className='half-circle'></div>
            <div className='right-circle'></div>
            <img src={img1} alt='Team' className='img-top-right' />
          </div>
        </Col>
      </Row>
      <div className=' d-flex justify-content-around mt-4 member'>
        <div className='upcircle'></div>
        <div className=' text-center fs-4 mx-2'>
          <h4>200+</h4>
          <p>Projects</p>
        </div>
        <div className=' text-center fs-4 mx-2'>
          <h4>20+</h4>
          <p>Clients</p>
        </div>
        <div className=' text-center fs-4 mx-2'>
          <h4>150+</h4>
          <p>Hours of Support</p>
        </div>
        <div className='downcircle'></div>
      </div>
    </Container>
  )
}

export default MissionPage