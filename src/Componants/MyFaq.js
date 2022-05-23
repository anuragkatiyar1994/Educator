import React , {useState} from 'react'
import "./Faqsstyles.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const MyFaq = ({question, answer}) => {
    const [click, setClick] = useState(false);
 const toggle = ()=>{
  return setClick(!click);
 }
  return (
    <>
                <div  className="faqs__inner ">
                  <div className="faq__question flex" onClick={toggle}>
                    
                    <h4>{question}</h4>
                    {click ? <AiOutlineMinus className="faq__icon"/> : <AiOutlinePlus className="faq__icon"/>}
                  </div>
                  <div className="faq__answer">
                   {click && <p>{answer}</p>}
                  </div>
                </div>
              </>
  )
}

export default MyFaq