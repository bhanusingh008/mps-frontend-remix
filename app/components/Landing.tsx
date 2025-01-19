import React from "react";
import Home from "../components/Home/home";
import { Result } from "../components/Result/Result";
import { CurrentAffair } from "../components/CurrentAffair/CurrentAffair";
import { Reach } from "../components/Reach/Reach";
import MiddleContent from "./MiddleContent";
import { Hero } from "./Hero/Hero";
import styles from "./Landing.module.css"; // Import CSS module

// Remix Meta Function
export const meta = () => {
  return {
    title: "Best Online Math Coaching Center | Tuition Classes in Faridabad | JEE MAIN | JEE ADVANCED | BITSAT",
    description: "Welcome to Maths by Pawan Sir, your ultimate destination for the best maths teacher in Faridabad. Join us today for nurturing excellence!",
    canonical: "https://www.mathsbypawansir.com/",
  };
};

// Remix Links Function (if needed for styles or external resources)
export const links = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.mathsbypawansir.com/",
    },
  ];
};

// Main Component
export function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Hero />
      <div className={styles.mainContent}>
        <Home />
        <MiddleContent />
      </div>
      <div className={styles.fullWidthContent}>
        <Result />
      </div>
      <div className={styles.mainContent}>
        <CurrentAffair />
      </div>
    </div>
  );
}
