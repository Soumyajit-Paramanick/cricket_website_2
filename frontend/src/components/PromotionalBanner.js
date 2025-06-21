import { useState, useEffect } from 'react';
import { Alert, Container } from 'react-bootstrap';
import axios from 'axios';

const PromotionalBanner = () => {
  const [banner, setBanner] = useState(null);
  const [show, setShow] = useState(false);
  const [timerDone, setTimerDone] = useState(false);

  // Load banner from API
  useEffect(() => {
    axios.get('http://localhost:8000/api/promotional-banners/')
      .then(response => {
        if (response.data.length > 0) {
          console.log("🎯 Banner loaded:", response.data[0]);
          setBanner(response.data[0]);
        } else {
          console.log("⚠ No active banner found");
        }
      })
      .catch(error => console.error('❌ Error fetching banner:', error));
  }, []);

  // Start 15-second timer
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("⏱️ 15 seconds passed");
      setTimerDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // When banner is loaded and timer is done → show it
  useEffect(() => {
    if (banner && timerDone) {
      console.log("✔ Showing banner after 15 seconds");
      setShow(true);
    }
  }, [banner, timerDone]);

  // Render banner if ready
  if (!banner || !show) return null;

  return (
    <Container fluid className="px-0 fixed-top" style={{ top: '56px', zIndex: 1030 }}>
      <Alert 
        variant="danger" 
        className="rounded-0 text-center mb-0 py-2"
        onClose={() => setShow(false)} 
        dismissible
      >
        <h5 className="mb-0">
          🎉 {banner.message} 🎉
          <small className="ms-2">(Limited Time Offer!)</small>
        </h5>
      </Alert>
    </Container>
  );
};

export default PromotionalBanner;
































// import { useState, useEffect } from 'react';
// import { Alert, Container } from 'react-bootstrap';
// import axios from 'axios';

// const PromotionalBanner = () => {
//   const [banner, setBanner] = useState(null);
//   const [show, setShow] = useState(false);
//   const [timerDone, setTimerDone] = useState(false);

//   // Load banner data from API
//   useEffect(() => {
//     axios.get('http://localhost:8000/api/promotional-banners/')
//       .then(response => {
//         if (response.data.length > 0) {
//           setBanner(response.data[0]);
//         }
//       })
//       .catch(error => console.error('Error fetching banner:', error));
//   }, []);

//   // Show banner after 15 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimerDone(true);
//     }, 15000); // 15 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   // Only show if banner exists, timer is done, and not dismissed
//   if (!banner || !timerDone || !show) return null;

//   return (
//     <Container fluid className="px-0 fixed-top" style={{ top: '56px', zIndex: 1030 }}>
//       <Alert 
//         variant="danger" 
//         className="rounded-0 text-center mb-0 py-2"
//         onClose={() => setShow(false)} 
//         dismissible
//         transition
//       >
//         <h5 className="mb-0">
//           🎉 {banner.message} 🎉
//           <small className="ms-2">(Limited Time Offer!)</small>
//         </h5>
//       </Alert>
//     </Container>
//   );
// };

// export default PromotionalBanner;