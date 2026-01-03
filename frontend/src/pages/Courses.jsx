import React, { useState, useMemo } from "react";
import {
  Calculator,
  Microscope,
  Palette,
  Music,
  Code,
  Database,
  Briefcase,
  TrendingUp,
  Clock,
  BarChart,
} from "lucide-react";
import { courses } from "../mock";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { toast } from "sonner";

const iconMap = {
  Calculator,
  Microscope,
  Palette,
  Music,
  Code,
  Database,
  Briefcase,
  TrendingUp,
};

const CATEGORIES = ["All", "Academic", "Creative", "Technical", "Professional"];

export const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") return courses;
    return courses.filter(
      (course) => course.category === activeCategory
    );
  }, [activeCategory]);

  const handleEnroll = (title) => {
    toast.success("Enrollment request sent!", {
      description: `We’ll contact you soon about "${title}".`,
    });
  };

  return (
    <div className="page">
      {/* HERO */}
      <section className="courses-hero">
        <div className="container">
          <h1 className="page-title">Explore Our Courses</h1>
          <p className="page-subtitle">
            Learn from expert tutors across academic, creative, and professional fields
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="section">
        <div className="container">
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="courses-tabs"
          >
            <TabsList className="tabs-list">
              {CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="tab-trigger"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {CATEGORIES.map((category) => (
              <TabsContent
                key={category}
                value={category}
                className="tab-content"
              >
                <div className="courses-grid">
                  {filteredCourses.map((course) => {
                    const Icon = iconMap[course.icon] || Code;

                    return (
                      <Card key={course.id} className="course-card">
                        <CardContent className="course-card-content">
                          <div className="course-icon">
                            <Icon size={40} />
                          </div>

                          <span className="course-category">
                            {course.category}
                          </span>

                          <h3 className="course-title">
                            {course.title}
                          </h3>

                          <p className="course-description">
                            {course.description}
                          </p>

                          <div className="course-meta">
                            <div className="course-meta-item">
                              <Clock size={16} />
                              <span>{course.duration}</span>
                            </div>

                            <div className="course-meta-item">
                              <BarChart size={16} />
                              <span>{course.level}</span>
                            </div>
                          </div>

                          <Button
                            className="btn-primary btn-full"
                            onClick={() =>
                              handleEnroll(course.title)
                            }
                          >
                            Enroll Now
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CATEGORY INFO */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Course Categories</h2>

          <div className="category-description-grid">
            <CategoryCard
              icon={<Calculator size={32} />}
              title="Academic"
              text="Mathematics, science, and language courses to build strong fundamentals."
            />
            <CategoryCard
              icon={<Palette size={32} />}
              title="Creative"
              text="Art, design, music, and writing courses led by professionals."
            />
            <CategoryCard
              icon={<Code size={32} />}
              title="Technical"
              text="Programming, web development, data science, and AI skills."
            />
            <CategoryCard
              icon={<Briefcase size={32} />}
              title="Professional"
              text="Business, leadership, marketing, and career-focused learning."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Small reusable component */
const CategoryCard = ({ icon, title, text }) => (
  <Card className="category-desc-card">
    <CardContent className="category-desc-content">
      <div className="category-desc-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </CardContent>
  </Card>
);
