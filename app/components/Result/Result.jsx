import { useState, useEffect } from "react";
import "./Result_style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Result = () => {
  const [isClient, setIsClient] = useState(false);
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

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="result-container">
      <div className="result-title">RESULT 2024</div>
      <div>
        <Slider {...settings} className="slider">
          {students.map((student, index) => (
            <div className="student-container" key={index}>
              <div style={{ textAlign: "center" }}>{student.name}</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={student.imgSrc}
                  className="student-img"
                  alt={student.name}
                />
              </div>
              <div>
                <div>{student.rank}</div>
                <div className="student-percentile">{student.percentile}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
