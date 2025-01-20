import "./CurrentAffair_style.css";
import ExamsCards from "../Exams/ExamsCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import styles from "../Landing.module.css"

export const CurrentAffair = () => {
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

  const testimonials = [
    {
      author_name: "Raghav Madan",
      author_url:
        "https://www.google.com/maps/contrib/112794503018213737352/reviews",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjUzkiwAzdSye3VB3TuyJx3bwpqLp3zJO8EhuuNyREJCa8x5-ZBU=s128-c0x00000000-cc-rp-mo",
      text: "I have had the privilege of learning under Pawan Sir, and I can confidently say he is one of the most skilled and knowledgeable mathematics teachers I've ever encountered. His deep understanding of the subject is evident in the way he simplifies even the most complex concepts, making them approachable and engaging for students at all levels.\n\nWhat sets him apart is his commitment to preparing students for competitive exams like JEE Mains and JEE Advanced. He knows exactly what areas to focus on, and his teaching is tailored to address the critical topics, problem-solving strategies, and time management techniques that are essential for success in these exams.\n\nMoreover, his dedication and hardworking nature are truly inspiring. He invests a significant amount of time and energy into ensuring each student understands the material, providing extra classes and personalized guidance whenever needed. His tireless efforts make a huge difference in students' performance, and he is genuinely invested in their success.\n\nIf you're looking for a teacher who combines expertise, passion, and an unwavering commitment to his students, Pawan Sir is the one to go for.",
    },
    {
      author_name: "Lusif Erth",
      author_url:
        "https://www.google.com/maps/contrib/110144384874628823370/reviews",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjX4VFIJ_3VDhHjjXETrHfkxZAebQV9qKOK2tRG_nnEnX98cB50=s128-c0x00000000-cc-rp-mo",
      text: "Learning maths from Pawan Sir has been an amazing experience. He has this incredible ability to simplify difficult topics and explain them in a way that’s easy to grasp. Before joining his classes, I used to struggle with certain concepts, but his clear and structured teaching method has made a huge difference for me.",
    },
    {
      author_name: "Poonam Verma",
      author_url:
        "https://www.google.com/maps/contrib/117755335971675714673/place/ChIJ00T_r9LdDDkRXJfmhTa83oQ/@28.4018863,77.3361077,15z/data=!4m6!1m5!8m4!1e1!2s117755335971675714673!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXIItQ3LUlDA-tEeW0s3PUN7_VBx4t7oUZnsNFuNW_2SF9mvtI=s40-c-rp-mo-br100",
      text: "Pawan sir is a genius when it comes to teaching. My son always loved going to his classes!! His teaching was always justified by my son's scores...one of the best teachers of mathematics!!",
    },
    {
      author_name: "Harsh Kumar",
      author_url:
        "https://www.google.com/maps/contrib/113857677863849634604/reviews",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjVSkr6OFmc9Hx7rqp06c6kOeODTGmE1-s2ESO-zSq_7xl3VkokN=s128-c0x00000000-cc-rp-mo",
      text: "I feel very happy to say that I'm a student of pawan sir. And, with this, goes his amazing knowledge regarding mathematics, precisely clear n deep knowledge, which is few among hundreds. This has also made me do it in a very elegant, neat and clean way in mathematics.\nI'd recommend surely to approach him for mathematical analysis. I'm happy with all of it.",
    },
    {
      author_name: "Ashwin Srivastava",
      author_url:
        "https://www.google.com/maps/contrib/110650554494109577233/reviews",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjV4a7kWjr7c7UzsHskWxMzzMzLdoCCFNugQjY7OcSfJDywf-G5f=s128-c0x00000000-cc-rp-mo",
      text: "Pawan sir is an absolutely fantastic teacher for mathematics!! His classes have always resonated deep with us students. His methods of teaching were always gentle and patient...he instructed us not only in maths but also in life skills. It was truly a pleasure to be a student of his!! ❤️",
    },
  ];
  // const [testimonials, setTesttimonials] = useState([]);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  // useEffect(() => {
  //   const get_reviews = async () => {
  //     const res = await axios.get(`http://localhost:8000/get_google_reviews`);
  //     if (res && res.data) {
  //       console.log(res.data);
  //       const temp = res.data.result.reviews.map((item, index) => {
  //         return {
  //           student_name: item.author_name,
  //           dp_image: item.profile_photo_url,
  //           testimonial: item.text,
  //         };
  //       });

  //       console.log(temp);
  //       setTesttimonials(temp);
  //     }
  //   };
  //   get_reviews();
  // }, []);

  return (
    <div className={`current-container`}>
      <div className="current-heading">What Students Say</div>
      <div className="current-content">
        <Slider {...settings} className="slider">
          {testimonials.map((item, index) => (
            <div className="testimonial-padding">
              <div className="testimonial-container">
                <div>
                  <img
                    style={{ width: "40px" }}
                    src={"assets/quote-svgrepo-com.svg"}
                  ></img>
                </div>
                <div>
                  {item.text.length > 500
                    ? item.text.substring(0, 500) + "...Read More"
                    : item.text}
                </div>

                <div>
                  <span>
                    <img
                      style={{ width: "50px" }}
                      src={item.profile_photo_url}
                    ></img>
                  </span>
                  <span>{item.author_name}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="buttons-container">
        <div>
          <a
            className="see-review-btn"
            href="https://www.google.com/search?q=Maths+By+Pawan+Sir+%7C+EX-VMC+Maths+Faculty+%7C+Teaching+for+JEE+Mains+%26+Advance+%7C+Best+Maths+Coaching+in+Faridabad"
            target="_blank"
          >
            See All Reviews
          </a>
        </div>
        <div>
          <a
            className="add-review-btn"
            href="https://g.page/r/CVyX5oU2vN6EEBM/review"
            target="_blank"
          >
            Add Review
          </a>
        </div>
      </div>

      <div className="current-heading">Exams</div>
      <div style={{ margin: "2rem" }}>
        <ExamsCards></ExamsCards>
      </div>
      {/* <div className="exams-container">
        <div className="exam-container">
          <div className="exam-cover-img">
            <img style={{ height: "80px" }} src={advanced}></img>
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
            <img style={{ height: "60px" }} src={nta}></img>
          </div>
          <div className="exam-title">JEE MAIN</div>

          <div className="exam-brief">
            Conducted By National Testing Agency(NTA)
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                height: "50px",
                marginTop:'1rem'
              }}
            >
              <button
                className="see-review-btn"
                onClick={() => {
                  nav("/exams/main")
                }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
