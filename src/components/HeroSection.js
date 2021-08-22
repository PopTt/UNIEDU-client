import React from 'react';
import '../App.css';
import './HeroSection.css';
import PinItem from './PinItem'

const clickEvent1 = () => {
  window.location.href = "/tutor"
}

const clickEvent2 = () => {
  window.location.href = "/courses"
}

function HeroSection() {
  return (
    <div className='hero__container'>
      <div className='overlay'>
        <h1>Welcome to <h className="t1">UNIEDU</h></h1>
        <p>What are you seek for?</p>
        <div className='pin__container'>
          <div className="pin__wrapper" onClick={clickEvent1}>
            <PinItem
              src='resources/images/teacher1.jpg'
              text='Become a Tutor?'
              label='Tutor'
            />
          </div>
          <div className="pin__wrapper" onClick={clickEvent2}>
            <PinItem
              src='resources/images/student.jpg'
              text='Find a good tutoring course?'
              label='Student'
            />
          </div>
        </div>
      </div>
      {/*<video src='resources/videos/video-2.mp4' autoPlay loop muted />*/}
    </div>
  );
}

export default HeroSection;