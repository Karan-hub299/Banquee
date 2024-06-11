import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='container'>
        <div className="BrandBox">
            <div className="BrandNameBox">
                <div className="BrandName">BANQUEE</div>
            </div>

        </div>
        <div className="mainbox">
            <div className="content">
                <div id='Heading'>EASY WAY TO BANKING</div>
                <div id="subheading">We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.</div>
                <button id="getStarted"><div id="buttoncontent">GET STARTED</div></button>
            </div>
            <div className="mainboximage"> </div>
        </div>
        
    </div>
  )
}

export default Hero