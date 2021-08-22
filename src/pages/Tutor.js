import "../components/Tutor.css";
import React from "react";
import Footer from '../components/Footer'


function Tutor() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="heading1">Join Us</h1>
          <p class="join">Join UNIEDU and BECOME A Professional Tutor</p>
          <button class="button1"
            type="button"
            onClick={(event) => (window.location.href = "/contact")}
          >
            Explore
          </button>
        </div>
      </div>
      <div class="col2" id="col2">
          <p class="positionTitle">
            We're Looking For:
          </p><br></br>
          <div class="card card1">
            <h5 class = "primary">Primary School Teacher</h5>
          </div>
          <div class="card card2">
            <h5 class = "primary">Secondary School Teacher</h5>
          </div>
          <div class="card card3">
            <h5 class ="primary">Education Consultant</h5>
          </div>
          <div class="card card4">
            <h5 class = "primary">Freelancer</h5>
          </div>
          <button class="button2" 
            type="button"
            onClick={(event) => (window.location.href = "/contact")}
          >
            Join Us
          </button>
        </div>
        <Footer />
    </div>
  );
}

export default Tutor;
