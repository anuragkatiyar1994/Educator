import React, { useState } from "react";
import CoursesApi from "../Api/CoursesApi";
import "./coursesStyles.css";
import {Link} from 'react-router-dom';

function Courses() {
  const [courseApi, setCourseApi] = useState(CoursesApi);

  return (
    <>
      <section className="courses">
        <h2 className="courses__heading">Our Popular Courses</h2>
        <div className="courses__container container">
          {courseApi.map((cElement) => {
            return (
              <>
                <div className="courses__inner" key={cElement.id}>
                  <div className="courses__img">
                    <img src={cElement.img} alt="image" />
                  </div>
                  <div className="course__info">
                    <h3>{cElement.title}</h3>
                    <p>{cElement.info}</p>
                    <Link to='/courses'className="courses__link link btn btn__primary">Learn More</Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Courses;
