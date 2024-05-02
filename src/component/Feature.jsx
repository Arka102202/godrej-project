import React from 'react';
import arrowLeft from "../assets/left-arrow.png";
import arrowRight from "../assets/right-arrow.png";

const Feature = () => {
  return (
    <div className='feature-box'>

      <div className="heading-box-outer">
        <p className='heading'>AMENITIES THAT WILL</p>
        <p className='heading'>REDEFINE YOUR LIFE</p>
        <p className='sub-heading'>LET A TREASURE TROVE OF AMENITIES CATER TO YOUR HEART'S EVERY DESIRE</p>
      </div>

      <div className="section">
        <div className='left left--1'>
          <p className='img-desc'>Fitness Center</p>
        </div>
        <div className='right--1'>
          <div className="heading-box">
            <p className='heading'>COMMUNITY</p>
            <p className='heading'>COURTYARD</p>
            <p className='sub-heading'>AT THE HEART OF A LIFE WITH ACTIVE EXPERIENCES THAT MAKE LIFE EXCITING</p>
          </div>
          <p className='body'>
            Treat yourself to the comfort of community living as you pursue your favourite things at the Podium Level. Here, there is something for everyone to enjoy.
          </p>
          <ArrowBox />
        </div>
      </div>
      <div className="section">
        <div className='left--3'>
          <div className="heading-box">
            <p className='heading'>COMMUNITY</p>
            <p className='heading'>COURTYARD</p>
            <p className='sub-heading'>AT THE HEART OF A LIFE WITH ACTIVE EXPERIENCES THAT MAKE LIFE EXCITING</p>
          </div>
          <p className='body'>
            Treat yourself to the comfort of community living as you pursue your favourite things at the Podium Level. Here, there is something for everyone to enjoy.
          </p>
          <ArrowBox />
        </div>
        <div className='right--3'>
          <p className='img-desc'>Badminton Court</p>
        </div>
      </div>
      <div className="section">
        <div className='left left--2'>
          <p className='img-desc'>Lounge In a Sky Sanctuary</p>
        </div>
        <div className='right'>
          <div className="heading-box">
            <p className='heading'>COMMUNITY</p>
            <p className='heading'>COURTYARD</p>
            <p className='sub-heading'>AT THE HEART OF A LIFE WITH ACTIVE EXPERIENCES THAT MAKE LIFE EXCITING</p>
          </div>
          <p className='body'>
            Treat yourself to the comfort of community living as you pursue your favourite things at the Podium Level. Here, there is something for everyone to enjoy.
          </p>
          <ArrowBox />
        </div>
      </div>

    </div>
  );
};

export default Feature;


const ArrowBox = () => {
  return <div className='arr-num'>
    <div className='arrows'>
      <img src={arrowLeft} alt="" className='arrow' />
      <div className='bar'></div>
      <img src={arrowRight} alt="" className='arrow' />
    </div>
    <p className='count'>01/10</p>
  </div>
}


