import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const phoneNumber = '6290210010';
  const email = 'sales@sports2020.co.in';
  const locationUrl = 'https://www.google.com/maps/place/Invida+Solutions/@22.4916369,88.3825519,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02711553cd7063:0x7037429c50ee8311!8m2!3d22.4916369!4d88.3825519!16s%2Fg%2F1tgr_bt6?entry=ttu';

  return (
    <Container className="my-4">
      <h1>Contact Us</h1>
      <Row>
        <Col md={6}>
          <h3>Our Address</h3>
          <p>
            Invida Solutions<br />
            22.4916369, 88.3825519<br />
            Kolkata, India
          </p>
          
          <h3>Contact Information</h3>
          <div className="contact-method">
            <FaPhone className="contact-icon" />
            <a href={`tel:${phoneNumber}`} className="contact-link">
              +91 {phoneNumber}
            </a>
            <span className="ms-2">(Click to call)</span>
          </div>
          
          <div className="contact-method mt-2">
            <FaWhatsapp className="contact-icon whatsapp-icon" />
            <a 
              href={`https://wa.me/91${phoneNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              Chat on WhatsApp
            </a>
          </div>
          
          <div className="contact-method mt-2">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </div>
        </Col>
        
        <Col md={6}>
          <h3>Opening Hours</h3>
          <p>
            <strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM<br />
            <strong>Saturday:</strong> 9:00 AM - 9:00 PM<br />
            <strong>Sunday:</strong> 10:00 AM - 6:00 PM
          </p>
          
          <div className="mt-4">
            <h3>Our Location</h3>
            <div style={{ height: '300px', width: '100%' }}>
  <iframe
    title="Shop Location"
    width="100%"
    height="100%"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://maps.google.com/maps?q=22.4916369,88.3825519&z=17&output=embed"
  ></iframe>
</div>

          </div>
        </Col>
      </Row>

      <style jsx>{`
        .contact-method {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .contact-icon {
          font-size: 1.2rem;
          margin-right: 10px;
        }
        .whatsapp-icon {
          color: #25D366;
        }
        .contact-link {
          color: #333;
          text-decoration: none;
        }
        .contact-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </Container>
  );
};

export default Contact;

















































// import { Container, Row, Col } from 'react-bootstrap';

// const Contact = () => {
//   return (
//     <Container className="my-4">
//       <h1>Contact Us</h1>
//       <Row>
//         <Col md={6}>
//           <h3>Our Address</h3>
//           <p>
//             123 Cricket Lane<br />
//             Sports City<br />
//             India - 560001
//           </p>
          
//           <h3>Contact Information</h3>
//           <p>
//             <strong>Phone:</strong> +91 9876543210<br />
//             <strong>Email:</strong> info@cricketshop.com
//           </p>
//         </Col>
        
//         <Col md={6}>
//           <h3>Opening Hours</h3>
//           <p>
//             <strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM<br />
//             <strong>Saturday:</strong> 9:00 AM - 9:00 PM<br />
//             <strong>Sunday:</strong> 10:00 AM - 6:00 PM
//           </p>
          
//           <div className="mt-4">
//             <h3>Our Location</h3>
//             <div style={{ height: '300px', width: '100%' }}>
//               <iframe
//                 title="Shop Location"
//                 width="100%"
//                 height="100%"
//                 frameBorder="0"
//                 scrolling="no"
//                 marginHeight="0"
//                 marginWidth="0"
//                 src="https://maps.google.com/maps?q=12.9716,77.5946&z=15&output=embed"
//               ></iframe>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contact;