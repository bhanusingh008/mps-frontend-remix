import React, { useState } from "react";
import "./Contact_style.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast.success(msg);

export const Contact = () => {
  const backend_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backend_url}/contacting`, {
        name: formData.name,
        phone: formData.phone_number,
      });

      if (res.data.status_code === 500) {
        notify("Something went wrong, but You can  call anytime!");
      } else if (res.data.status_code === 200) {
        notify("You will get a Call!");
      }
    } catch (error) {
      notify("Server is down, but You can  call anytime!");
    }
  };

  return (
    <div className="contact-ctn">
      <div className="address-ctn">
        <div>
          Limited Seats Available! Enroll Today Don’t miss the chance to learn
          from the best math coaching centre in Faridabad. Contact us now to
          secure your spot!
        </div>
        <div>
          Address: SCF 92 FIRST FLOOR, Sector 17, Faridabad, Haryana 121002
          <div>Contact No: 9718942794</div>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "12rem" }}
              src="assets/for_contact_form.gif"
            ></img>
          </div>
          <label>Name:</label>
          <input
            className="contact-input"
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label>Contact Number:</label>
          <input
            className="contact-input"
            required
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <br />
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>

          <Toaster />
        </form>
      </div>
    </div>
  );
};
