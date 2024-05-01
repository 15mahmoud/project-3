





import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Page3() {
  return (
    <div className='main-page3'>
     <div className='main-page3-info'>
      <div className='main-page3-iop'>
         <div className='main-page3-info-content'>
           <h2 style={{fontWeight:'bold'}}>
            See my projects at once and leave your email address
           </h2>
         </div>
         <div className='main-page3-info-input'>
           <input type='email' placeholder='Email Address'/>
           <button className='main-page3-info-input-btn'>Submit</button>
         </div>
      </div>
      </div>
     <div className='main-page3-info2'>
       <div className='main-page3-info2-logo'>
        <h1>
            Logo
        </h1>
       </div>
       <div className='main-page3-info2-content'>
       <Nav className="group2 main-page3-info23">
            <div className='group2-div text-center'>
              <Nav.Link target='_blank' href="https://github.com/15mahmoud"><FontAwesomeIcon icon={faGithub} className='this404'/></Nav.Link>
            </div>
            <div className='group2-div text-center'>
              <Nav.Link target='_blank' href="https://www.linkedin.com/in/mahmoud-soliman-703342228/"><FontAwesomeIcon icon={faLinkedinIn} className='this404'/></Nav.Link>
            </div>
            {/* <div className='group2-div text-center'>
              <Nav.Link target='_blank' href="https://codeforces.com/profile/Mahmoud1522003"><FontAwesomeIcon icon={faCode} className='this404 this403'/></Nav.Link>
            </div> */}
          </Nav>
          <div className='main-page3-info2-content-copy'>
             <h6>--Copyrights 2024-- All rights reseved here by Mahmoud Soliman</h6>
          </div>
       </div>
     </div>
    </div>
  );
}
export default Page3;
