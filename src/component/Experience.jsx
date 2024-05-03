import React from 'react';
import fourIcon from "../assets/four-icon-with-a-background.jpg";
import complex from "../assets/apartment-plux-icon.jpg";

const Experience = () => {
  return (
    <div className='experience-box'>
      <div className='info-box'>
        <div className='heading'>
          <p>VIKHROLI - THE CENTRE</p>
          <p>OF MUMBAI</p>
        </div>
        <p className='body'>The moment you step into Vikhroli, you will be transported to a place unlike any in the city.Here, thousands of trees greet you every morning while you are surrounded by contemporary comforts.Let a greener world bring together a life of exquisite indulgence, the finest in hospitality, commercial and retail spaces along with the cleanest air in the city.</p>
      </div>
      <div className='img-box'>
        <img src={fourIcon} alt="composite of four icon" />
        <img src={complex} alt="apartment complex with a plus icon at the center" />
      </div>
    </div>
  );
};

export default Experience;
