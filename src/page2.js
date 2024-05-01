








import React, { useEffect, useRef, useState } from "react";
import './App.css';
import { Nav} from "react-bootstrap";
import pic1 from './pics/pic1.jpg';
import pic2 from './pics/pic2 .jpg'
import pic3 from './pics/pic3.jpg';
import pic4 from './pics/pic4.jpg';
import pic5 from './pics/images.jpg';
import pic6 from './pics/download.jpg';
import pic7 from './imgs/working-home-vector-flat-style-260nw-1751135810.jpg'
import { motion } from "framer-motion";


function Page2() {
   const x = useRef(null);
   const handle =()=>{
      setx1(true);
      setx2(false);
      setx3(false);
      x.current.style.display='block'
      z.current.style.display='none'
   }
   const y = useRef(null);
   const handle2 =()=>{  
      setx1(false);
      setx2(true);
      setx3(false);
      x.current.style.display='none'
      y.current.style.display='block'
      z.current.style.display='none'
   }
   const z = useRef(null);
   const handle3 =()=>{
      setx1(false);
      setx2(false);
      setx3(true);
      x.current.style.display='none'
      z.current.style.display='block'
   }
   const [x1,setx1] = useState(false);
   const [x2,setx2] = useState(false);
   const [x3,setx3] = useState(false);
   const variants = {
    hover: {
      scaleX: 1, // Initial scale (no change)
      animate: {
        scaleX: 1.5, // Animate to 1.5x scale on hover
        transition: { duration: 0.5 }, // Set animation duration
      },
    },
  };
    return ( 
       <div className="main-page2">
          <Nav className="navbar2 text-center">
            <div className="nav-div nav-div2" title="tab-1"  onClick={handle} style={{backgroundImage : x1 ? `linear-gradient(to left, #14469F , #94149f)` : ``}}><Nav.Link>Tab1</Nav.Link></div>
            <div className="nav-div nav-div4" title="tab-2"  onClick={handle2} style={{backgroundImage : x2 ? `linear-gradient(to left, #14469F , #94149f)` : ``}}><Nav.Link>Tab2</Nav.Link></div>
            <div className="nav-div nav-div3" title="tab-3"  onClick={handle3} style={{backgroundImage : x3 ? `linear-gradient(to left, #14469F , #94149f)` : ``}}><Nav.Link>Tab3</Nav.Link></div>
          </Nav>
          {
            window.onload =()=>handle()
          }
          <div className="navbar2-content1" ref={x} >
              <div className="navbar2-content1-div">

               <div className="navbar2-content1-div2">
                <div className="navbar2-content1-div2-kill">
                  <img src={pic1} height="230px" width="340px"/>
                  <div>
                  <div className="navbar2-content1-div2-kill2">
                  <h2>Title</h2>
                  <h3>Sub-Title</h3>
                  </div>
                  </div>
                </div>
                <div className="navbar2-content1-div2-kill">
                <img src={pic2} height="230px" width="340px"/>
                <div className="navbar2-content1-div2-kill2">
                  <h2>Title</h2>
                  <h3>Sub-Title</h3>
                  </div>
                </div>
                <div className="navbar2-content1-div2-kill">
                <img src={pic3} height="230px" width="340px"/>
                <div className="navbar2-content1-div2-kill2">
                  <h2>Title</h2>
                  <h3>Sub-Title</h3>
                  </div>
                </div>
               </div> 
            
            <div className="navbar2-content1-div2 navbar2-content1-div404">
                <div className="navbar2-content1-div2-kill">
                  <img src={pic4} height="230px" width="340px"/>
                  <div className="navbar2-content1-div2-kill2">
                  <h2>Title</h2>
                  <h3>Sub-Title</h3>
                  </div>
                </div>
                <div className="navbar2-content1-div2-kill">
                <img src={pic5} height="230px" width="340px"/>
                <div className="navbar2-content1-div2-kill2">
                  <h2>Title</h2>
                  <h3>Sub-Title</h3>
                  </div>
                </div>
                <div className="navbar2-content1-div2-kill">
                <img src={pic6} height="230px" width="340px"/>
                <div className="navbar2-content1-div2-kill2">
                  <h2>Title</h2>
                  <h3>Sub-Title</h3>
                  </div>
                </div>
            </div>
              </div>
          </div>

          <div className="navbar2-content1 navbar2-content1-pg3" ref={z}>
              <h2>My name is Mahmoud Soliman,I am a react Dev</h2>
          </div>
           
          <div className="navbar2-content1 navbar2-content1-pg2" style={{display:'none'}} ref={y}>

              <div className="navbar2-content1-pg2-234">
              <div className="navbar2-content1-pg2-img">
                <div className="navbar2-content1-pg2-img2"  >
                  <motion.img src={pic7} width="100%" height="100%" variants={variants} whileHover="hover"/>  
                </div>
              </div>  

              <div className="navbar2-content1-pg2-con">
                  <div className="navbar2-content1-pg2-con-title">
                    <h1>Get In Touch</h1>
                  </div>
                  <div className="navbar2-content1-pg2-con-input1">
                      <input type="text" placeholder="First name"/>
                      <input type="text" placeholder="last name"/>
                  </div>
                  <div className="navbar2-content1-pg2-con-input1">
                      <input type="emai" placeholder="Email address"/>
                      <input type="text" placeholder="Phone number"/>
                  </div>
                  <div className="navbar2-content1-pg2-con-input2" >
                      <input type="text" placeholder="Message"/>
                  </div>
                  <button className='main-page3-info-input-btn345'>Send</button>
              </div>
              </div>
          </div>
       </div>
    );
}

export default Page2;