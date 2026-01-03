import React, { useState } from "react";

export const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Tutor Registration Submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nExperience: ${formData.experience} years`
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Join as a Tutor</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Share your knowledge with students around the world
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Subject You Teach</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Physics, Math, Web Development"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Years of Experience</label>
          <input
            type="number"
            name="experience"
            min="0"
            required
            value={formData.experience}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label>Why do you want to join?</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Apply as Tutor
        </button>
      </form>
    </div>
  );
};
