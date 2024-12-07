import React, { useEffect, useState } from "react";
import "./Notice_style.css";

export const Notice = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(2000);
  useEffect(() => {
    const intervalStudent = setInterval(() => {
      setStudentsCount((prevCount) => {
        if (prevCount >= 4000) {
          clearInterval(intervalStudent);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 2);

    const intervalExperience = setInterval(() => {
      setExperienceCount((prevCount) => {
        if (prevCount >= 20) {
          clearInterval(intervalExperience);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 100);

    return () => {
      clearInterval(intervalStudent);
      clearInterval(intervalExperience);
    }; // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="notice-bg">
      <div className="notice-container">
        <div className="hero-papa-img-container">
          <img src={"public/assets/pawan_sir.webp"} alt="Pawan Sir" loading="lazy" className="hero-papa-img"></img>
        </div>
        <div className="notice-board">
          <div className="experience-div">
            EX-VMC FARIDABAD – MATHS FACULTY<br></br>
            (MENTOR OF TOP BATCHES FROM 2013 TO 2024) <br />A RESULT ORIENTED
            FACULTY
          </div>

          <div className="veritcal-line"></div>

          <div className="notice-meta-data">
            <div>
              <div>{experienceCount}+ YEARS OF EXPERIENCE</div>

              <div className="student-mentored">
                {studentsCount}+<br></br>
                Students Mentored
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
