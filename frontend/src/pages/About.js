import { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import API from '../config'; // ✅ Imported centralized config
const About = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get(API.GALLERY)
      .then(response => setGallery(response.data))
      .catch(error => console.error('Error fetching gallery:', error));
  }, []);

  return (
    <Container className="my-4">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 mb-4">About Cricket Shop</h1>
          <p className="lead">
            Your premier destination for all cricket equipment since 2010.
          </p>
          <p>
            We take pride in providing high-quality cricket gear to players of all levels, 
            from beginners to professionals. Our shop has been recognized as the "Best Cricket 
            Retailer" for three consecutive years by the Cricket Association.
          </p>
          <p>
            Our mission is to support the growth of cricket by offering the best equipment 
            at competitive prices with exceptional customer service.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="text-center mb-4">Our Gallery</h2>
          <Row className="gallery-grid">
            {gallery.map((item, index) => (
              <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                <div className="gallery-item">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fluid
                    rounded
                    className="w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="gallery-caption">{item.title}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <style jsx>{`
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
        }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
      `}</style>
    </Container>
  );
};

export default About;



