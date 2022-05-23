import React from 'react'
import './ContactStyles.css'
import Navbar from '../Componants/Navbar';
import Footer from '../Componants/Footer';
import { FaAddressCard } from "react-icons/fa";
import { BsEnvelopeOpen, BsFillPhoneVibrateFill } from "react-icons/bs";

function Contact() {
  return (
<>
<Navbar/>
  <div class="container contact__wrapper">
    <div class="content">
      <div class="left-side">
        <div class="address details">
        <FaAddressCard/>
          <div class="topic">Address</div>
          <div class="text-one">Surkhet, NP12</div>
          <div class="text-two">Birendranagar 06</div>
        </div>
        <div class="phone details">
        <BsFillPhoneVibrateFill/>
          <div class="topic">Phone</div>
          <div class="text-one">+91 7428621433</div>
          <div class="text-two">+0096 3434 2243</div>
        </div>
        <div class="email details">
          <BsEnvelopeOpen/>
          <div class="topic">Email</div>
          <div class="text-one">anuragkatiyar1994@gmail.com</div>
          <div class="text-two">himanshuk@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Contact Us</div>
        
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
        <input type="textarea" placeholder="Message"/>
        </div>
        <div class="button">
          <input className='btn btn__primary' type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  <Footer/>

    </>
  )
}

export default Contact;