import {React, useState} from "react";
import AboutApi from '../Api/AboutApi'
import {Link} from 'react-router-dom';
import './AboutStyles.css';
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";

function About() {
  const [aboutData, setAboutData] = useState(AboutApi)
  return (
   
   <>
   <div className="aboutNavWrapper">
   <Navbar />
   </div>
  {aboutData.map((data)=>{
   return (<>
    
   <div className="about">
     <div className="container about__container">
   <div className="about__img"><img src={data.img} alt="image" /></div>
   <div className="about__info">
     <h1>{data.title}</h1>
     <p>{data.description}</p>
     <Link className = 'link btn btn__primary' to='/courses'>Learn More</Link>
   </div>
   </div>
   </div>
   </>)
  })}
  <Footer/>
    </>
  );
}

export default About;
