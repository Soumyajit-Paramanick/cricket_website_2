import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../config'; // ✅ Imported centralized config
const Home = () => {
  const [products, setProducts] = useState([]);
  
  // Use actual cricket-related banner images
  const banners = [
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&auto=format&fit=crop'
  ];

  useEffect(() => {
    // ✅ Used config variable here
    axios.get(`${API.PRODUCTS}?limit=12`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      {/* Banner Section with Carousel */}
      <Row className="my-4">
        <Col>
          <Carousel fade>
            {banners.map((banner, index) => (
              <Carousel.Item key={index} interval={3000}>
                <img
                  className="d-block w-100 rounded"
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Top Products Section */}
      <Row className="my-4">
        <h2 className="text-center mb-4">Top Products</h2>
        {products.map(product => (
          <Col key={product.id} md={3} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={product.images[0]?.image || 'https://via.placeholder.com/300'} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>₹{product.price}</Card.Text>
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;