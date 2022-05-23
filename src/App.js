
import Home from "./Pages/Home";
import About from "./Pages/About";
import Course from "./Pages/Course";
import Contact from './Pages/Contact'
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <>
   <Routes>
     <Route path="/" element ={<Home/>} />
     <Route path="/about" element ={<About/>} />
     <Route path="/courses" element ={<Course/>} />
     <Route path="/contact" element ={<Contact/>} />
     
     
   </Routes>
    
    </>
  );
}

export default App;
