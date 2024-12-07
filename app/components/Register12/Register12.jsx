import { React, useState } from "react";
import "./Register12_style.css";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast.success(msg);

function Header() {
  const scrollDown = (pixels) => {
    window.scrollBy({
      top: pixels,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="header">
        <div id="header-logo">
          {/* <img id='header-logo-img' src={logo_img}></img> */}
        </div>

        <div id="header-title">Maths By Pawan Sir</div>

        <nav className="nav-register" style={{ marginRight: "20px" }}>
          <ul className="nav-list">
            <button
              className="nav-link-style header-btn"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export const Register12 = () => {
  const backend_url = import.meta.env.REACT_APP_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    student_class: "",
    school: "",
    aim: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backend_url}/register`, {
        name: formData.name,
        phone: formData.phone_number,
        student_class: formData.student_class,
        school: formData.school,
        aim: formData.aim,
      });

      console.log(formData);

      if (res.data.status_code === 500) {
        notify("Something went wrong, but You can  call anytime!");
      } else if (res.data.status_code === 200) {
        notify("Successfully Registered!");
      }
    } catch (error) {
      notify("Server is down, but You can  call anytime!");
    }
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="register-title-container">
          <div className="register-title">Registerations Going ON!!</div>
          <div style={{ textAlign: "center" }}>
            A call will be made to provided number to confirm your registration.
            <br /> We have limited seats(as of now), so registrating now will
            lead to confirmation
          </div>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <label>Students's Name:</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label>Phone Number:</label>
          <input
            required
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <br />
          <label>Class:</label>
          <select
            required
            name="student_class"
            value={formData.student_class}
            onChange={handleChange}
            style={{ border: "0.5px solid rgb(0, 0, 0, 0.5)" }}
          >
            <option value="" disabled hidden selected>
              Select Class
            </option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
          <br />
          <label>School:</label>
          <input
            required
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
          <br />
          <label>Aiming For:</label>
          <select
            required
            name="aim"
            value={formData.aim}
            onChange={handleChange}
            style={{ border: "0.5px solid rgb(0, 0, 0, 0.5)" }}
          >
            <option value="" disabled hidden selected>
              Select
            </option>
            <option value="CBSE BOARDS">CBSE BOARDS</option>
            <option value="JEE MAINS">JEE MAINS</option>
            <option value="JEE MAINS + ADVANCE">JEE MAINS + ADVANCE</option>
          </select>
          <div className="register-btn-container">
            <button type="submit" className="register-btn">
              Register
            </button>
          </div>
        </form>

        <Toaster />
      </div>
    </div>
  );
};
