import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import '../../css/ProductModal.css'

// Import images explicitly
import img1 from '../../imgs/Rectangle 3862.png'
import img2 from '../../imgs/Rectangle 3863.png'
import img3 from '../../imgs/Rectangle 3864.png'
import img4 from '../../imgs/Rectangle 3863.png'
import img5 from '../../imgs/Rectangle 3862.png'
import img6 from '../../imgs/Rectangle 3867.png'
import img7 from '../../imgs/Rectangle 3868.png'
import img8 from '../../imgs/Rectangle 3869.png'
import img9 from '../../imgs/Rectangle 3863.png'
import img10 from '../../imgs/Rectangle 3867.png'
import img11 from '../../imgs/Rectangle 3862.png'
import img12 from '../../imgs/Rectangle 3868.png'
import img13 from '../../imgs/Rectangle 3862.png'
import img14 from '../../imgs/Rectangle 3869.png'
import img15 from '../../imgs/Rectangle 3863.png'

import thumb from '../../imgs/Rectangle 3904.png'

// Continue importing all thumbnail images...

const productImages = [
  { id: 1, img: img1, thumbnail: thumb },
  { id: 2, img: img2, thumbnail: thumb },
  { id: 3, img: img3, thumbnail: thumb },
  { id: 4, img: img4, thumbnail: thumb }, // Can mix imports if necessary
  { id: 5, img: img5, thumbnail: thumb },
  { id: 6, img: img6, thumbnail: thumb },
  { id: 7, img: img7, thumbnail: thumb },
  { id: 8, img: img8, thumbnail: thumb },
  { id: 9, img: img9, thumbnail: thumb },
  { id: 10, img: img10, thumbnail: thumb },
  { id: 11, img: img11, thumbnail: thumb },
  { id: 12, img: img12, thumbnail: thumb },
  { id: 13, img: img13, thumbnail: thumb },
  { id: 14, img: img14, thumbnail: thumb },
  { id: 15, img: img15, thumbnail: thumb },
]

function productModal() {
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleShow = (img) => {
    setSelectedImage(img) // Set the large image
    setShowModal(true)
  }

  const handleClose = () => setShowModal(false)

  return (
    <Container className='productModel'>
      {/* Heading */}
      <div>
        <h1 className='text-center Products-heading'>Products</h1>
      </div>

      {/* Category Button */}
      <div className='mb-3'>
        <Button variant='primary'>Categories</Button>
      </div>

      {/* product Images */}
      <Row
        className='d-flex align-items-center justify-content-center'
        style={{ marginLeft: '2rem', width: '1300px' }}
      >
        {productImages.map((product) => (
          <Col md={4} key={product.id} className='mb-4'>
            <div className='image-container'>
              {/* Text overlay */}
              <p className='overlay-text'>Lorem Ipsum</p>
              {/* Image */}
              <img
                src={product.img}
                alt={`product ${product.id}`}
                className='img-fluid rounded product-img'
                onClick={() => handleShow(product.thumbnail)}
                style={{
                  cursor: 'pointer',
                  width: '351px',
                  height: '370px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {/* Updated Modal */}
      <Modal show={showModal} onHide={handleClose} className='custom-modal'>
        <div
          style={{
            position: 'relative',
            padding: '15px',
            backgroundColor: '#F9F9FF',
          }}
        >
          {/* Close Button in Circle */}
          <Button
            variant='light'
            onClick={handleClose}
            className='left-closeButton'
          >
            &times;
          </Button>

          <Modal.Body className='text-center'>
            {/* Image Section */}
            {selectedImage && (
              <div className='mb-4'>
                <img
                  src={selectedImage}
                  alt='Selected product'
                  className='img-fluid rounded'
                  style={{ maxWidth: '50%', borderRadius: '15px' }}
                />
              </div>
            )}

            {/* Text Content */}
            <h4 className='text-black mb-3 tradmaster'>TradeMaster Pro</h4>
            <div className=' mt-3 txt-box'>
              <ul className='lists'>
                <li className='mb-2 styleLi '>
                  A powerful trading platform designed for both novice and
                  experienced traders.
                </li>
                <li className='mb-2 styleLi'>
                  Access real-time market data, execute trades, and analyze
                  charts from a single interface.
                </li>
                <li className='mb-2 styleLi'>
                  Packed with advanced features like technical indicators,
                  charting tools, and customizable alerts.
                </li>
              </ul>
            </div>

            {/* Purchase Button */}
            <Button
              variant='primary'
              className='mt-5'
              style={{
                backgroundColor: '#6c63ff',
                borderColor: '#6c63ff',
                padding: '10px 30px',
                fontWeight: '600',
                borderRadius: '30px',
              }}
            >
              Purchase
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    </Container>
  )
}

export default productModal