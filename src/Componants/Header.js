import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assests/codingimg.jpg'
import './HeaderStyles.css';

function Header() {
    return (
        <>
            <header>
                <div className="container header__container">
                    <div className="header__left">
                        <div className="header__info">
                            <h1>Grow your skills to advance you carrier path</h1>
                            <p>Take one of Educator’s range of Python courses and learn how to
                                code using this incredibly useful language. Its simple syntax </p>
                            <Link to='/courses' className="link btn btn__primary">Get Started</Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__img">
                            <img src={img} alt="hero-img" />
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header