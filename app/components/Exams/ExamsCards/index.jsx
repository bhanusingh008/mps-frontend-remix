import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CurrentAffair/CurrentAffair_style.css";

const ExamsCards = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="exams-container">
        <div className="exam-container">
          <div className="exam-cover-img">
            <img src={"assets/ADVANCED.png"}></img>
          </div>
          <div className="exam-title">JEE ADVANCED</div>

          <div className="exam-brief">
            Conducted By One of the IITs, <br></br>Which changes every year.
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                height: "50px",
              }}
            >
              <button
                className="see-review-btn"
                onClick={() => {
                  nav("/exams/advanced")
                }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="exam-container">
          <div className="exam-cover-img">
            <img style={{width:'100%' }} src={"/assets/NTA.png"}></img>
          </div>
          <div className="exam-title">JEE MAIN</div>

          <div className="exam-brief">
            Conducted By National Testing Agency(NTA)
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                height: "50px",
                marginTop: "1rem",
              }}
            >
              <button
                className="see-review-btn"
                onClick={() => {
                  nav("/exams/main");
                }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamsCards;
