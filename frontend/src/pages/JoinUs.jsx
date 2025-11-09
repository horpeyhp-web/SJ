import React, { useState } from 'react';
import { UserPlus, CheckCircle, FileText, Video, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

export const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    experience: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.experience) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Application submitted successfully!', {
      description: 'Our recruitment team will review your application and contact you soon.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      experience: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our simple application form with your details and expertise.'
    },
    {
      icon: Video,
      title: 'Interview Process',
      description: 'Participate in a brief video interview to discuss your teaching approach.'
    },
    {
      icon: CheckCircle,
      title: 'Verification',
      description: 'We verify your credentials and experience to ensure quality standards.'
    },
    {
      icon: UserPlus,
      title: 'Start Teaching',
      description: 'Get onboarded and start connecting with students worldwide!'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="join-hero">
        <div className="container">
          <h1 className="page-title">Become a Tutor</h1>
          <p className="page-subtitle">
            Join our global community of expert tutors and inspire learners worldwide
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Teach with SJTutor?</h2>
          
          <div className="benefits-grid">
            <Card className="benefit-card">
              <CardContent className="benefit-content">
                <Globe size={40} className="benefit-icon" />
                <h3>Global Reach</h3>
                <p>Connect with students from over 50 countries</p>
              </CardContent>
            </Card>

            <Card className="benefit-card">
              <CardContent className="benefit-content">
                <DollarSign size={40} className="benefit-icon" />
                <h3>Competitive Pay</h3>
                <p>Earn 60-70% of course fees with flexible schedules</p>
              </CardContent>
            </Card>

            <Card className="benefit-card">
              <CardContent className="benefit-content">
                <UserPlus size={40} className="benefit-icon" />
                <h3>Easy Platform</h3>
                <p>User-friendly tools to manage classes and students</p>
              </CardContent>
            </Card>

            <Card className="benefit-card">
              <CardContent className="benefit-content">
                <CheckCircle size={40} className="benefit-icon" />
                <h3>Support Team</h3>
                <p>Dedicated support to help you succeed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">How to Join</h2>
          <p className="section-subtitle">Four simple steps to start your teaching journey</p>

          <div className="steps-grid">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="step-item">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="container">
          <div className="form-container">
            <Card className="application-form-card">
              <CardContent className="application-form-content">
                <h2 className="form-title">Tutor Application Form</h2>
                <p className="form-subtitle">Tell us about yourself and your expertise</p>

                <form onSubmit={handleSubmit} className="application-form">
                  <div className="form-group">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="subject">Subject/Expertise *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your subject area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="languages">Languages</SelectItem>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="design">Design & Creative Arts</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="business">Business & Marketing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="form-group">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="form-group">
                    <Label htmlFor="message">Tell Us About Your Teaching Experience</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your teaching philosophy, experience, and what makes you a great tutor..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="btn-primary btn-full btn-large">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

const Globe = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);
