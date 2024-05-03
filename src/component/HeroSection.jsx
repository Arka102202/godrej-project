import React from 'react';
import menu from "../assets/menu.png";
import logo from "../assets/icon.png";
import arrowLeft from "../assets/left-arrow.png";
import arrowRight from "../assets/right-arrow.png";
import dialer from "../assets/dialer.png";
import docu from "../assets/hand-docu.png";

const HeroSection = () => {
  return (
    <section className='hero-sec'>
      <header>
        <div className='header-name'>
          <p>GODREJ VISTAS</p>
          <p>VIKHROLI</p>
        </div>
        <div className='header-imgs'>
          <div className='menu'>
            <img src={menu} alt="menu-icon" />
          </div>
          <div className='logo'>
            <img src={logo} alt="website-logo" />
          </div>
        </div>
      </header>
      <div className='hero-sec-main'>
        <div className='part--1'>
          <p className='btm-lyr'>
            VISTAS
          </p>
          <div className='mid-lyr'>
          </div>
          <p className='top-lyr top-line'>At the heart of it all</p>
          <p className='top-lyr btm-line'>VISTAS</p>
        </div>
        <div className='part--2'>
          <div className='left-part'>
          </div>
          <div className='right-part'>
            <div className='title'>
              <p>AT THE HEART OF</p>
              <p>IT ALL</p>
            </div>
            <p className='body'>Come home to a place that is the gateway to all your desires, with endless views of mangroves and majestic hills. Where life blooms amidst the harmony between nature and modern architecture and brings cherished memories day after day. This isn't just co address, it's a grand welcome to a world where every moment is filled with joy, located in the heart of the city, near everything you hold dear</p>
            <div className='arr-num'>
              <div className='arrows'>
                <img src={arrowLeft} alt="" className='left-arrow' />
                <div className='bar'></div>
                <img src={arrowRight} alt="" />
              </div>
              <p className='count'>01/10</p>
            </div>

            <div className='dialer'>
              <img src={dialer} alt="" />
            </div>
          </div>


        </div>
        <form className='part--3'>
          <p className='title'>ENQUIRY</p>
          <div className='inputs'>
            <div className="ipBox">
              <label htmlFor="name">Name :</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="ipBox">
              <label htmlFor="tel">Mobile :</label>
              <input type="tel" name="tel" id="tel" />
            </div>
            <div className="ipBox">
              <label htmlFor="email">Email :</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <button className='btn'>Submit</button>
          <div className='document'>
            <img src={docu} alt="" />
          </div>
        </form>
      </div>

    </section>
  );
};

export default HeroSection;
