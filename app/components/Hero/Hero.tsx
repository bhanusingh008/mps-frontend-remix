import React, { useEffect, useState } from "react";

const phrases = ["Easy", "Scoring", "Problems Solving with Precision"];

export const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 100; // Speed for typing and deleting

  useEffect(() => {
    const currentPhrase = phrases[index];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before erasing
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="w-full flex justify-center items-start bg-primary h-[40vh] max-h-[600px] relative">
      <div className="w-full max-w-5xl flex mt-10">
        <h1 className="w-full text-[2.1rem] font-bold text-white ml-2 mr-auto">
          <span>Making Maths</span> <span className="text-accent">{text}</span>
          <span className="inline-block w-[10px] bg-white animate-blink">.</span>
        </h1>
      </div>
    </div>
  );
};
