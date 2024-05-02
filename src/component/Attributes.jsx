import React from 'react';
import curve from "../assets/cir-part.png";
import car from "../assets/car.png";

const Attributes = () => {
  return (
    <section className='attribute-box'>
      <div className='box-heading'>
        <p className='heading'>A DYNAMIC LOCATION</p>
        <p className='heading'>FOR A VIBRANT LIFE</p>
        <p className='body'>Map out the trajectory of a fulfilled life at Godrej Vista. Strategically located by the Eastern Express Highway, it is a world of convenience, nestled between futuristic social infrastructure and bustling commercial and retail hubs. Whether you and your loved ones seek seamless connectivity for your daily commute or want to escape into the countryside for a quick getaway, find everything that you desire within your reach at Godrej Vista.</p>
      </div>

      <div className='content'>
        <p className='box--1'>Godrej Memorial Hospital</p>
        <div className='box--2'>
          <div className='circle'>
            <img src={curve} alt="upper part of the circle" className='curve-img' />
          </div>
          <img src={car} alt="car" className='car-mg' />
          <div className='bar'></div>
          <div className='text-content'>
            <p className='large-text'>05</p>
            <p className='small-text'>MINUTE</p>
            <p className='mid-text'>BY</p>
            <p className='mid-text'>CAR</p>
          </div>
        </div>
        <div className='box--3'>
          <p>Entertainment</p>
          <p>Retail and Recreational Hubs</p>
          <p className='highlighted'>Hospitals</p>
          <p>Educational Hubs</p>
          <p>Business hubs</p>
        </div>
      </div>

    </section>
  );
};

export default Attributes;



