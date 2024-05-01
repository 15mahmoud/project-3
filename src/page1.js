






import React, { useState } from 'react';
import './App.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';



function Page1() {
  const[scrY,setscrY] = useState(window.screenY)
  window.addEventListener('scroll',()=>{
     setscrY(window.scrollY)
  })
  const [x,setx] = useState(0);
  const de = ()=>
  {
    if (x<90 && scrY>450 && scrY < 750) {
      setTimeout(()=>
    {
       setx(x+3)
    },60)
    }
    else
    {
      return;
    }
  }
  const responsive = {
    sde:{
      breakpoint: { max: 6000, min: 4000 },
      items: 5
    },
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const val = 2*3.14*110;
    return(
        <div className='main-page1'>
          
           <div className='page1'>
            <div className='title'>
              <h1>Skills</h1>
            </div>
            <div className='title2'>
              <h4>You can see my skills here</h4>
            </div>
           </div>
        <Carousel className='auto' responsive={responsive}>
        <div className='auto789'>
        <div className='skill auto89'>
           <div className='outer'>
             <div className='inner'>

             </div>
           </div>
        </div>
        <svg className='svg-ele' xmlns="http://www.w3.org/2000/svg" version="1.1" width="260px" height="260px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#14469F" />
               <stop offset="100%" stop-color="#94149f" />
            </linearGradient>
         </defs>
         <circle cx="120" cy="120" r="110" stroke-linecap="round" {...de()} strokeDasharray={val} strokeDashoffset={(val)-((x/100)*(val))}/>
         </svg>
       <h3>Html</h3>
       <h2>{x}%</h2>
      </div>
     {/* ///////////////////////////////////////////////////////////////////////////////*/}
     <div className='auto789'>
        <div className='skill auto89'>
           <div className='outer'>
             <div className='inner'>

             </div>
           </div>
        </div>
        <svg className='svg-ele' xmlns="http://www.w3.org/2000/svg" version="1.1" width="260px" height="260px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#14469F" />
               <stop offset="100%" stop-color="#94149f" />
            </linearGradient>
         </defs>
         <circle cx="120" cy="120" r="110" stroke-linecap="round" strokeDasharray={val} strokeDashoffset={(val)-(((x+5)/100)*(val))}/>
         </svg>
       <h3>Css</h3>
       <h2>{x+5}%</h2>
      </div>
     {/* ///////////////////////////////////////////////////////////////////////////////*/}
     <div className='auto789'>
        <div className='skill auto89'>
           <div className='outer'>
             <div className='inner'>

             </div>
           </div>
        </div>
        <svg className='svg-ele' xmlns="http://www.w3.org/2000/svg" version="1.1" width="260px" height="260px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#14469F" />
               <stop offset="100%" stop-color="#94149f" />
            </linearGradient>
         </defs>
         <circle cx="120" cy="120" r="110" stroke-linecap="round" strokeDasharray={val} strokeDashoffset={(val)-(((x+8)/100)*(val))}/>
         </svg>
       <h3>Js</h3>
       <h2>{x+8}%</h2>
      </div>
     {/* ///////////////////////////////////////////////////////////////////////////////*/}
     <div className='auto789'>
        <div className='skill auto89'>
           <div className='outer'>
             <div className='inner'>

             </div>
           </div>
        </div>
        <svg className='svg-ele' xmlns="http://www.w3.org/2000/svg" version="1.1" width="260px" height="260px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#14469F" />
               <stop offset="100%" stop-color="#94149f" />
            </linearGradient>
         </defs>
         <circle cx="120" cy="120" r="110" stroke-linecap="round" strokeDasharray={val} strokeDashoffset={(val)-(((x+3)/100)*(val))}/>
         </svg>
       <h3>React</h3>
       <h2>{x+3}%</h2>
      </div>
     {/* ///////////////////////////////////////////////////////////////////////////////*/}
     <div className='auto789'>
        <div className='skill auto89'>
           <div className='outer'>
             <div className='inner'>

             </div>
           </div>
        </div>
        <svg className='svg-ele' xmlns="http://www.w3.org/2000/svg" version="1.1" width="260px" height="260px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#14469F" />
               <stop offset="100%" stop-color="#94149f" />
            </linearGradient>
         </defs>
         <circle cx="120" cy="120" r="110" stroke-linecap="round" strokeDasharray={val} strokeDashoffset={(val)-((x/100)*(val))}/>
         </svg>
       <h3>Design</h3>
       <h2>{x}%</h2>
      </div>
     {/* ///////////////////////////////////////////////////////////////////////////////*/}
        </Carousel>
           </div>
    )
}

export default Page1;
