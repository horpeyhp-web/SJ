import React, { useState } from "react";
import {
  Calculator,
  Palette,
  Code,
  Briefcase,
  Clock,
  BarChart,
} from "lucide-react";

/* ------------------ COURSE DATA ------------------ */

const courses = [
  {
    id: 1,
    title: "Mathematics Basics",
    category: "Academic",
    icon: Calculator,
    description: "Build a strong foundation in mathematics.",
    duration: "10 hours",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Creative Painting",
    category: "Creative",
    icon: Palette,
    description: "Explore creativity through painting.",
    duration: "8 hours",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Web Development",
    category: "Technical",
    icon: Code,
    description: "Learn HTML, CSS, and JavaScript.",
    duration: "20 hours",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Business Fundamentals",
    category: "Professional",
    icon: Briefcase,
    description: "Essential business and career skills.",
    duration: "12 hours",
    level: "Beginner",
  },
];

/* ------------------ COMPONENT ------------------ */

export const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Registration successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${selectedCourse.title}`
    );

    setFormData({ name: "", email: "" });
    setSelectedCourse(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Our Courses</h1>

      {/* COURSES LIST */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <div
              key={course.id}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <Icon size={32} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <p>
                <Clock size={14} /> {course.duration}
              </p>
              <p>
                <BarChart size={14} /> {course.level}
              </p>

              <button
                onClick={() => handleEnrollClick(course)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Enroll Now
              </button>
            </div>
          );
        })}
      </div>

      {/* REGISTRATION FORM */}
      {selectedCourse && (
        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "400px",
          }}
        >
          <h2>Register for {selectedCourse.title}</h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{ width: "100%", padding: "6px" }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ width: "100%", padding: "6px" }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "8px 12px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit Registration
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
