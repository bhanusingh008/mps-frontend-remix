import React from "react";
import { Result } from "../components/Result/Result";
import { CurrentAffair } from "../components/CurrentAffair/CurrentAffair";
import MiddleContent from "./MiddleContent";
import { Hero } from "./Hero/Hero";
import { Notice } from "./Notice/Notice";

// Main Component
export function Landing() {
  return (
    <div className="w-screen">
      <Hero />
      <div className="flex flex-col max-w-5xl mx-auto relative p-6 md:p-4">
        <Notice />
        <MiddleContent />
      </div>
      <div className="flex flex-col w-screen mx-auto relative">
        <Result />
      </div>
      <div className="flex flex-col w-screen mx-auto relative">
        <CurrentAffair />
      </div>
    </div>
  );
}
