import React from 'react';
import { Target, Eye, Heart, Globe, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const About = () => {
  const coreValues = [
    {
      icon: Globe,
      title: 'Access',
      description: 'Making quality education accessible to everyone, everywhere.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering excellence through expert tutors and proven methods.'
    },
    {
      icon: Zap,
      title: 'Empowerment',
      description: 'Empowering learners to achieve their full potential.'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About SJTutor</h1>
          <p className="page-subtitle">A subsidiary of SJGroup</p>
          <blockquote className="about-quote">
            "Empower. Educate. Create. Connect."
          </blockquote>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <Card className="mission-card">
              <CardContent className="mission-content">
                <div className="mission-icon">
                  <Target size={48} />
                </div>
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-text">
                  Make education globally accessible through mentorship and innovation.
                  We believe that quality education should know no boundaries and that
                  every learner deserves access to expert guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="mission-card">
              <CardContent className="mission-content">
                <div className="mission-icon">
                  <Eye size={48} />
                </div>
                <h2 className="mission-title">Our Vision</h2>
                <p className="mission-text">
                  A worldwide hub merging creativity and learning. We envision a future
                  where education transcends traditional boundaries, fostering innovation,
                  creativity, and global collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="value-card">
                  <CardContent className="value-card-content">
                    <div className="value-icon">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About SJGroup */}
      <section className="section">
        <div className="container">
          <div className="sjgroup-section">
            <h2 className="section-title">About SJGroup</h2>
            <p className="sjgroup-description">
              SJGroup is a global creative and educational conglomerate dedicated to
              connecting creativity, technology, and empowerment. Our motto,
              <strong> "Empower. Educate. Create. Connect."</strong> reflects our
              commitment to transforming lives through innovative solutions.
            </p>

            <div className="subsidiaries-grid">
              <div className="subsidiary-item">
                <h3>SJTutor</h3>
                <p>Online education platform</p>
              </div>
              <div className="subsidiary-item">
                <h3>SJStudio</h3>
                <p>Media production</p>
              </div>
              <div className="subsidiary-item">
                <h3>SJFoundation</h3>
                <p>Charitable initiatives</p>
              </div>
              <div className="subsidiary-item">
                <h3>SJShop</h3>
                <p>Merchandise & products</p>
              </div>
              <div className="subsidiary-item">
                <h3>SJEvents</h3>
                <p>Event management</p>
              </div>
              <div className="subsidiary-item">
                <h3>SJCreatives</h3>
                <p>Digital content creation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Summary */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">How We Operate</h2>
          
          <div className="operations-grid">
            <Card className="operation-card">
              <CardContent className="operation-content">
                <h3>Tutor Types</h3>
                <ul>
                  <li>Academic Tutors</li>
                  <li>Creative Tutors</li>
                  <li>Technical Tutors</li>
                  <li>Professional Tutors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="operation-card">
              <CardContent className="operation-content">
                <h3>Course Formats</h3>
                <ul>
                  <li>Short Courses (1-4 weeks)</li>
                  <li>Full Courses (1-3 months)</li>
                  <li>Workshops (1-2 days)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="operation-card">
              <CardContent className="operation-content">
                <h3>Our Divisions</h3>
                <ul>
                  <li>Tutor Recruitment</li>
                  <li>Curriculum Development</li>
                  <li>Tech Platform</li>
                  <li>Payments & Quality Control</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

