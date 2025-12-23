import React, { useState } from 'react';
import { Calculator, Microscope, Palette, Music, Code, Database, Briefcase, TrendingUp, Clock, BarChart } from 'lucide-react';
import { courses } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';

const iconMap = {
  Calculator,
  Microscope,
  Palette,
  Music,
  Code,
  Database,
  Briefcase,
  TrendingUp
};

export const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Academic', 'Creative', 'Technical', 'Professional'];
  
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const handleEnroll = (courseTitle) => {
    toast.success(`Enrollment request sent for ${courseTitle}!`, {
      description: 'Our team will contact you shortly.'
    });
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <h1 className="page-title">Explore Our Courses</h1>
          <p className="page-subtitle">
            Choose from our diverse range of courses taught by expert tutors worldwide
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section">
        <div className="container">
          <Tabs defaultValue="All" className="courses-tabs">
            <TabsList className="tabs-list">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="tab-trigger"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="tab-content">
                <div className="courses-grid">
                  {filteredCourses.map((course) => {
                    const IconComponent = iconMap[course.icon];
                    return (
                      <Card key={course.id} className="course-card">
                        <CardContent className="course-card-content">
                          <div className="course-icon">
                            <IconComponent size={40} />
                          </div>
                          <span className="course-category">{course.category}</span>
                          <h3 className="course-title">{course.title}</h3>
                          <p className="course-description">{course.description}</p>
                          
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
                            onClick={() => handleEnroll(course.title)}
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

      {/* Course Categories Description */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Course Categories</h2>
          
          <div className="category-description-grid">
            <Card className="category-desc-card">
              <CardContent className="category-desc-content">
                <Calculator size={32} className="category-desc-icon" />
                <h3>Academic</h3>
                <p>Core subjects like Mathematics, Science, Languages, and more. Build a strong foundation for academic success.</p>
              </CardContent>
            </Card>

            <Card className="category-desc-card">
              <CardContent className="category-desc-content">
                <Palette size={32} className="category-desc-icon" />
                <h3>Creative</h3>
                <p>Unleash your creativity with Art, Design, Music, and Creative Writing courses from industry professionals.</p>
              </CardContent>
            </Card>

            <Card className="category-desc-card">
              <CardContent className="category-desc-content">
                <Code size={32} className="category-desc-icon" />
                <h3>Technical</h3>
                <p>Master in-demand tech skills including Programming, Data Science, Web Development, and AI.</p>
              </CardContent>
            </Card>

            <Card className="category-desc-card">
              <CardContent className="category-desc-content">
                <Briefcase size={32} className="category-desc-icon" />
                <h3>Professional</h3>
                <p>Advance your career with Business, Marketing, Leadership, and Professional Development courses.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

