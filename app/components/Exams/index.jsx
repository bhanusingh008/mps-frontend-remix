import React from "react";
import "./style.css";
import ExamsCards from "./ExamsCards";
import { Route, Router, Routes } from "react-router-dom";
import JeeAdvanced from "./JeeAdvanced";
import JeeMain from "./JeeMain";

const Exams = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div style={{minHeight:'60vh', marginTop:'4rem'}}><ExamsCards></ExamsCards></div>}></Route>
        <Route path="/advanced" element={<JeeAdvanced></JeeAdvanced>}></Route>
        <Route path="/main" element={<JeeMain></JeeMain>}></Route>
      </Routes>
    </>
  );
};

export default Exams;
