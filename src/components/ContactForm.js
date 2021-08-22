import "../components/Contact.css";
import React from 'react'
// import {db} from "./firebase"

   

function ContactForm() {
  const handleSubmit = (e) =>{
    e.preventDefault();

    alert("Your application has been submitted")
  };
  /** 
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [message,setMessage] = useState("");
   const [position,setPosition] = useState("");
  
   const handleSubmit = (e) =>{
     e.preventDefault();

     db.collection("contact").add({
       name:name,
       email:email,
       message:message,
       position:position
     })
     .then(() =>{
       alert("Submit Successfully")
     })
     .catch((error) =>{
       alert(error.message);
     });

     setName("");
     setEmail("");
     setMessage("");
     setPosition("");
   };
   */
  return (
    <div class="container2">
      <div class="contact-section">
        <div class="contact-info">
          <div>
            <div>
              <i class="fas fa-map-marker-alt">3,Jalan Uni, Johor Bahru</i>
            </div>
            <div>
              <i class="fas fa-envelope">UniEdu@gmail.com</i>
            </div>
            <div>
              <i class="fas fa-phone">+6018-7630826</i>
            </div>
            <div>
              <i class="fas fa-clock">MON - SAT 8.00 AM to 5.00 PM</i>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
            <h2>Fill In the Application Form</h2>
            <form class="contact" onSubmit ={handleSubmit}>
              <input
                type="text"
                name="name"
                class="text-box"
                placeholder="Your Name"
                //value = {name}
                //onChange = {(e) => setName(e.target.value)} 
                req
              ></input>
              <input
                type="email"
                name="email"
                class="text-box"
                placeholder="Your Email"
                //value = {email}
                //onChange = {(e) => setEmail(e.target.value)} 
                req
              ></input>
              <br></br>
              <label for="position" class="positionID">Your Interested Position:</label>
              <select id="position" class="position" name="position" 
              //value = {position} 
              //onChange= {(e) => setPosition(e.target.value)}
              req
               >
                <option value="Primary School Teacher">
                  Primary School Teacher
                </option>
                <option value="Secondary School Teacher">
                  Secondary School Teacher
                </option>
                <option value="Educaton Consultant">Educaton Consultant</option>
                <option value="Freelancer">Freelancer</option>
              </select>
              <textarea
                class="message"
                name="message"
                rows="5"
                cols="80"
                placeholder="Please tell us why you choose us "
                //value = {message}
                //onChange = {(e) => setMessage(e.target.value)} 
                
              ></textarea>
              <input
                type="submit"
                name="submit"
                class="send-btn"
                value="Submit"
              ></input>
            </form>
           
          </div>
      </div>
    </div>
    
    

  );
  
}

export default ContactForm;
