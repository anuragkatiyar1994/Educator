import React from 'react'
import Categories from '../Componants/Categories';
import Courses from '../Componants/Courses';
import Faqs from '../Componants/Faqs';
import Header from '../Componants/Header';
import Navbar from '../Componants/Navbar';
import Footer from '../Componants/Footer'

import './HomeStyles.css';



function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Categories/>
   <Courses/>
   <Faqs/>
   <Footer/>
   </>
  )
}

export default Home;