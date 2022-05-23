import React from 'react'
import { Link } from 'react-router-dom';
import { RiExchangeDollarFill } from "react-icons/ri";
import { FaPython,FaPaintBrush,FaJava } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import './CategoriesStyles.css';

function Categories() {
    return (
        <>
            <section className="categories">
                <div className="container categories__container">
                    <div className="categories__left">
                        <div className="categories__info">
                            <h1>Catagories</h1>
                            <p>Take one of Educator’s range of Python courses and learn how to
                                code using this incredibly useful language. Its simple syntax
                                and readability makes Python perfect for Flask,</p>
                            <Link className='link btn__primary btn' to='/courses'>Learn More</Link>
                        </div>
                    </div>
                    <div className="categories__right">
                        <artical className="category">
                            <span><RiExchangeDollarFill className='category__icon'/></span>
                            <h5>Finance</h5>
                            <p>Whether you’re preparing to launch a new career as a private financial </p>
                        </artical>
                        <artical className="category">
                            <span><FaPython className='category__icon'/></span>
                            <h5>Python</h5>
                            <p>Whether you’re preparing to launch a new career as a Python developer </p>
                        </artical>
                        <artical className="category">
                            <span><FaPaintBrush className='category__icon'/></span>
                            <h5>Art</h5>
                            <p>Whether you’re preparing to launch a new career as a Artist </p>
                        </artical>
                        <artical className="category">
                            <span><FaJava className='category__icon'/></span>
                            <h5>Java</h5>
                            <p>Whether you’re preparing to launch a new career as a Artist </p>
                        </artical>
                        <artical className="category">
                            <span><DiJavascript className='category__icon'/></span>
                            <h5>JavaScript</h5>
                            <p>Whether you’re preparing to launch a new career as a Javascript </p>
                        </artical>
                        <artical className="category">
                            <span><FaPaintBrush className='category__icon'/></span>
                            <h5>Art</h5>
                            <p>Whether you’re preparing to launch a new career as a Artist </p>
                        </artical>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Categories;