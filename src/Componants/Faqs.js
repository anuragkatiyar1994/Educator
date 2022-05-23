import React, { useState } from "react";
import faqApi from "../Api/faqApi.js";
import "./Faqsstyles.css";
import MyFaq from "./MyFaq.js";


function Faqs() {
  const [data, setData] = useState(faqApi);


  return (
    <>
      <section className="faqs">
        <h2 className="section__heading">Frequently Asked questions</h2>
        <div className="container faqs__container">
          {data.map((cElement) => {
            return (
              <>
              <MyFaq key={cElement.id} {...cElement}/>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Faqs;
