import React from "react";
import './App.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import df from './imgs/pic55.jpg'



const Page0 =()=>
{
    return( 
    <div className='parent1'>
    <Container className='alo'>
    <div className='butt text-center'>
       <h4>Welcome to my portofolio</h4>
      </div>
    </Container>
    <Container className='alo2'>
    <div className='output'>
     <h1>
     {/* <TypeAnimation sequence={
      [
        "Hi! I'am Mahmoud Soliman , Front-end Devolper",
        5000,
        "Hi! I'am Mahmoud Soliman , React Devolper",
        5000,
        "",
        1000 
      ]
     }
     wrapper="span"
      speed={25}
      repeat={Infinity}
     />    */}
     </h1>
    </div>
    <div className='imgy'>
      <img src={df}/>
    </div>
    </Container>
    </div>)
}

export default Page0;