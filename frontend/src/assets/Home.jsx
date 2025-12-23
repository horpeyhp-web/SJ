import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Award, Zap, BookOpen, Users, GraduationCap } from 'lucide-react';
import { coreValues, tutors, testimonials } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Home = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Learn. Connect. Grow.
            </h1>
            <p className="hero-subtitle">
              Make education globally accessible through mentorship and innovation.
              Join thousands of students and tutors worldwide.
            </p>
            <div className="hero-buttons">
              <Link to="/courses">
                <Button className="btn-primary btn-large">
                  Find a Tutor
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/join">
                <Button className="btn-secondary btn-large">
                  Become a Tutor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">What drives us to deliver excellence</p>
          </div>

          <div className="values-grid">
            {coreValues.map((value) => {
              const IconComponent = value.icon === 'Globe' ? Globe : value.icon === 'Award' ? Award : Zap;
              return (
                <Card key={value.id} className="value-card">
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Users size={48} />
              <h3 className="stat-number">10,000+</h3>
              <p className="stat-label">Active Students</p>
            </div>
            <div className="stat-item">
              <GraduationCap size={48} />
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Expert Tutors</p>
            </div>
            <div className="stat-item">
              <BookOpen size={48} />
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">Courses Available</p>
            </div>
            <div className="stat-item">
              <Globe size={48} />
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Expert Tutors</h2>
            <p className="section-subtitle">Learn from the best in their fields</p>
          </div>

          <div className="tutors-grid">
            {tutors.map((tutor) => (
              <Card key={tutor.id} className="tutor-card">
                <CardContent className="tutor-card-content">
                  <img src={tutor.image} alt={tutor.name} className="tutor-image" />
                  <h3 className="tutor-name">{tutor.name}</h3>
                  <p className="tutor-subject">{tutor.subject}</p>
                  <div className="tutor-stats">
                    <span>{tutor.experience} experience</span>
                    <span>★ {tutor.rating}</span>
                  </div>
                  <p className="tutor-students">{tutor.students}+ students taught</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Community Says</h2>
            <p className="section-subtitle">Real experiences from real people</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    <div>
                      <p className="testimonial-name">{testimonial.name}</p>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
            <p className="cta-subtitle">Join thousands of students achieving their goals with SJTutor</p>
            <Link to="/courses">
              <Button className="btn-primary btn-large">
                Explore Courses
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

