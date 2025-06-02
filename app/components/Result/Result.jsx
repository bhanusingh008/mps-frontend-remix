import { useMemo, useState, useEffect } from "react";
import "./Result_style.css";

export const Result = () => {
  const [isClient, setIsClient] = useState(false);

  // List of students
  const students = [
    {
      name: "Ashwin Srivastava",
      imgSrc: "/assets/Ashwin Srivastava-99.988.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.988",
    },
    {
      name: "Tanush Garg",
      imgSrc: "/assets/Tanush Gar- 99.94.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.94",
    },
    {
      name: "Devashish",
      imgSrc: "/assets/Devashish - 99.92.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.92",
    },
    {
      name: "Abhay Pratap Singh",
      imgSrc: "/assets/Abhay.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.91",
    },
    {
      name: "Yashdeep Singh",
      imgSrc: "/assets/Yashdeep Singh - 99.80.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.80",
    },
    {
      name: "Chittur S.",
      imgSrc: "/assets/Chittur S. - 99.79.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.79",
    },
    {
      name: "Hrishabh Mittal",
      imgSrc: "/assets/Hrishabh Mittal-99.780.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.78",
    },
    {
      name: "Ujjawal Gupta",
      imgSrc: "/assets/Ujjawal Gupta - 99.488.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.488",
    },
    {
      name: "Akshat Bindal",
      imgSrc: "/assets/Akshat Bindal - 99.401.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.401",
    },
    {
      name: "Aryan Soni",
      imgSrc: "/assets/Aryan Soni - 99.23.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.23",
    },
    {
      name: "Ayush Gupta",
      imgSrc: "/assets/Ayush Gupta - 99.2.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.2",
    },
    {
      name: "Arnav Gupta",
      imgSrc: "/assets/Arnav Gupta - 99.149.jpg",
      rank: "JEE MAIN PERCENTILE",
      percentile: "99.149",
    },
  ];

  const studentsAdvanced = [
    {
      name: "Ashwin Srivastava",
      imgSrc: "/assets/Ashwin Srivastava-99.988.jpg",
      rank: "RANK",
      percentile: "AIR 1440",
    },
    {
      name: "Tanush Garg",
      imgSrc: "/assets/Tanush Gar- 99.94.jpg",
      rank: "RANK",
      percentile: "AIR 4094",
    },
    {
      name: "Devashish",
      imgSrc: "/assets/Devashish - 99.92.jpg",
      rank: "RANK",
      percentile: "AIR 1804",
    },
    {
      name: "Abhay Pratap Singh",
      imgSrc: "/assets/Abhay.jpg",
      rank: "RANK",
      percentile: "AIR 3597",
    },
    {
      name: "Yashdeep Singh",
      imgSrc: "/assets/Yashdeep Singh - 99.80.jpg",
      rank: "RANK",
      percentile: "AIR 369",
    },
    {
      name: "Chittur S.",
      imgSrc: "/assets/Chittur S. - 99.79.jpg",
      rank: "RANK",
      percentile: "AIR 912",
    },
    {
      name: "Hrishabh Mittal",
      imgSrc: "/assets/Hrishabh Mittal-99.780.jpg",
      rank: "RANK",
      percentile: "AIR 1384",
    },
    {
      name: "Akshat Bindal",
      imgSrc: "/assets/Akshat Bindal - 99.401.jpg",
      rank: "RANK",
      percentile: "AIR 3983",
    },
    {
      name: "Ayush Gupta",
      imgSrc: "/assets/Ayush Gupta - 99.2.jpg",
      rank: "RANK",
      percentile: "AIR 2179",
    },
  ];

  // Get top 4 students by percentile (descending order)
  const topStudents = useMemo(() => {
    return [...students].sort((a, b) => parseFloat(b.percentile) - parseFloat(a.percentile)).slice(0, 4);
  }, []);

  const topStudentsAdvanced = useMemo(() => {
    return [...studentsAdvanced].sort((a, b) => parseFloat(parseFloat(a.percentile.slice(3) - b.percentile.slice(3)))).slice(0, 4);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a placeholder while waiting for the client-side rendering
    return (
      <div className="carousel-placeholder">
        <p>Loading Carousel...</p>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className="text-2xl md:text-4xl font-bold text-black text-center mb-20 display-flex justify-center items-center gap-4">
        <div className="flex items-center justify-center gap-4">
          <div>
            <img src="/assets/result.svg" className="w-[60px]" alt="Results" />
          </div>
          <div>
            Recent <span className="text-blue-700">Results</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {topStudents.map((student, index) => (
          <div className="student-container" key={index}>
            <div style={{ textAlign: "center" }}>{student.name}</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={student.imgSrc} className="student-img" alt={student.name} />
            </div>
            <div>
              <div>{student.rank}</div>
              <div className="student-percentile">{student.percentile}</div>
            </div>
          </div>
        ))}
        <div className="student-container cursor-pointer hover:scale-105 transition-transform duration-300" key={-1}>
          <div style={{ textAlign: "center" }}>And Many More...</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/assets/nta.png" className="w-[150px]" alt="JEE MAIN" />
          </div>
          <div>
            <div>View More In JEE Main</div>
            <div className="student-percentile">Percentile</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {topStudentsAdvanced.map((student, index) => (
          <div className="student-container" key={index}>
            <div style={{ textAlign: "center" }}>{student.name}</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={student.imgSrc} className="student-img" alt={student.name} />
            </div>
            <div>
              <div>{student.rank}</div>
              <div className="student-percentile">{student.percentile}</div>
            </div>
          </div>
        ))}
        <div className="student-container cursor-pointer hover:scale-105 transition-transform duration-300" key={-1}>
          <div style={{ textAlign: "center" }}>And Many More...</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/assets/ADVANCED.png" className="w-[150px]" alt="JEE MAIN" />
          </div>
          <div>
            <div>View More In JEE Advanced</div>
            <div className="student-percentile">Rank</div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <a href="/results" className="view-all-btn px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
          View All
        </a>
      </div>
    </div>
  );
};
