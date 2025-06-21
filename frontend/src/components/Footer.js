import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '6290210010';
  const email = 'sales@sports2020.co.in';
  const locationUrl = 'https://www.google.com/maps/place/Invida+Solutions/@22.4916369,88.3825519,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02711553cd7063:0x7037429c50ee8311!8m2!3d22.4916369!4d88.3825519!16s%2Fg%2F1tgr_bt6?entry=ttu';

  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container>
        <Row className="g-0">
          <Col xs={12} className="text-center mb-2">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
              <span className="d-flex align-items-center">
                <FaPhone className="me-2" />
                <a href={`tel:${phoneNumber}`} className="text-white text-decoration-none">
                  +91 {phoneNumber}
                </a>
              </span>
              
              <span className="d-flex align-items-center">
                <FaWhatsapp className="me-2" />
                <a 
                  href={`https://wa.me/91${phoneNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  WhatsApp
                </a>
              </span>
              
              <span className="d-flex align-items-center">
                <FaEnvelope className="me-2" />
                <a href={`mailto:${email}`} className="text-white text-decoration-none">
                  {email}
                </a>
              </span>
              
              <span className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" />
                <a 
                  href={locationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Our Location
                </a>
              </span>
            </div>
          </Col>
          
          <Col xs={12} className="text-center mb-2">
            <p className="mb-1">
              <strong>Note:</strong> 7 days return policy is applicable over all products.
            </p>
            <p className="mb-0">
              © {new Date().getFullYear()} Cricket Shop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        footer {
          position: relative;
          bottom: 0;
          width: 100%;
        }
        @media (max-width: 768px) {
          .d-flex {
            flex-direction: column;
            gap: 0.5rem !important;
          }
        }
        a:hover {
          color: #25D366 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

















































// import { Container, Row, Col } from 'react-bootstrap';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-3 mt-5">
//       <Container>
//         <Row className="g-0"> {/* g-0 removes gutters to maintain exact width */}
//           <Col xs={12} className="text-center mb-2">
//             <div className="d-flex justify-content-center align-items-center gap-4">
//               <span className="d-flex align-items-center">
//                 <FaPhone className="me-2" /> +1 234 567 890
//               </span>
//               <span className="d-flex align-items-center">
//                 <FaEnvelope className="me-2" /> info@cricketshop.com
//               </span>
//               <span className="d-flex align-items-center">
//                 <FaMapMarkerAlt className="me-2" /> 123 Cricket Lane
//               </span>
//             </div>
//           </Col>
//           <Col xs={12} className="text-center">
//             <p className="mb-0">
//               © {new Date().getFullYear()} Cricket Shop. All rights reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
      
//       {/* Add this to your CSS file or style tag */}
//       <style>{`
//         footer {
//           position: relative;
//           bottom: 0;
//           width: 100%;
//         }
//         @media (max-width: 768px) {
//           .d-flex {
//             flex-direction: column;
//             gap: 0.5rem !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;

