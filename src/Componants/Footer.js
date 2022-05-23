import React from 'react'
import './FooterStyles.css'
import {Link} from 'react-router-dom';
import { FaFacebook, FaInstagramSquare,FaTumblrSquare,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="container footer__container">
            <div className="footer__title"><h4>Company</h4>
            <ul className="footer__links">
                <li><Link className= 'link'to='/about' >About Us</Link></li>
                <li><Link className= 'link'to='/courses'>Our Services</Link></li>
                <li><Link className= 'link'to='/courses'>Privacy Policy</Link></li>
                
            </ul>
            </div>
            <div className="footer__title"><h4>Get Help</h4>
            <ul className="footer__links">
                <li><Link className= 'link'to='/about' >Faq</Link></li>
                <li><Link className= 'link'to='/courses'>My Courses</Link></li>
                <li><Link className= 'link'to='/courses'>Payment Option</Link></li>
                <li><Link className= 'link'to='/courses'>Affiliated Programme</Link></li>
            </ul>
            </div>
            <div className="footer__title"><h4>Courses</h4>
            <ul className="footer__links">
                <li><Link className= 'link'to='/about' >Python</Link></li>
                <li><Link className= 'link'to='/courses'>JavaScript</Link></li>
                <li><Link className= 'link'to='/courses'>PHP</Link></li>
                <li><Link className= 'link'to='/courses'>Java</Link></li>
            </ul>
            </div>
            <div className="footer__title"><h4>Follow Us</h4>
            <ul className="footer__links ">
            <li><Link className= 'link footer__sociallinks'to='/about' ><FaFacebook/></Link></li>
                <li><Link className= 'link footer__sociallinks'to='/courses'><FaInstagramSquare/></Link></li>
                <li><Link className= 'link footer__sociallinks'to='/courses'><FaTumblrSquare/></Link></li>
                <li><Link className= 'link footer__sociallinks'to='/courses'><FaLinkedin footer__links/></Link></li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;