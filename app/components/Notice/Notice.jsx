import React, { useEffect, useState } from "react";

export const Notice = () => {
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
    }, 50);

    return () => {
      clearInterval(intervalStudent);
    };
  }, []);

  return (
    <div className="sticky max-w-[1200px] mt-[-170px] left-0">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_5fr] p-8 bg-white border border-gray-200 shadow-[0_20px_500px_12px_#dedede] rounded-2xl min-h-[240px] box-border">
        <div className="w-full items-center flex justify-center">
          <img src={"assets/pawan_sir.webp"} alt="Pawan Sir" loading="lazy" className="h-auto w-full max-w-[220px] rounded-full" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] bg-white text-primary text-[22px] md:text-[24px] p-5 md:p-2">
          {/* Pointers */}
          <div className="flex flex-col items-start font-bold text-[1.1rem] gap-2 md:items-center md:text-[18px]">
            <div className="w-full flex items-start gap-2">
              <img className="w-[30px]" src={"assets/star.svg"} alt="star" />
              <span>{21}+ Years of Experience</span>
            </div>
            <div className="w-full flex items-start gap-2">
              <img className="w-[30px]" src={"assets/star.svg"} alt="star" />
              <span>Mentored top batches of VMC Faridabad, Sector-16 from 2013 to 2024.</span>
            </div>
            <div className="w-full flex items-start gap-2">
              <img className="w-[30px]" src={"assets/star.svg"} alt="star" />
              <span>Known for his Result Oriented Style.</span>
            </div>
          </div>
          
          {/* Students Count Section */}
          <div className="flex flex-col items-center text-[#4916b8] font-extrabold text-[1.5rem] md:text-[18px] mt-0 md:mt-5">
            <div>
              <div className="text-[32px]">
                {studentsCount}+<br />
                <span className="text-base font-normal">Students Mentored</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
