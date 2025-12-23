import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you within 24 hours.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info-title">Get in Touch</h2>
              <p className="contact-info-text">
                Whether you're a student looking for the perfect tutor or an educator wanting to join our platform, we're here to help.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-detail-text">
                    <h3>Email</h3>
                    <a href="mailto:info@sjtutor.com">info@sjtutor.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-detail-text">
                    <h3>Phone</h3>
                    <a href="tel:+1234567890">+1 234 567 890</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-detail-text">
                    <h3>Location</h3>
                    <p>Global Operations</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-detail-text">
                    <h3>Business Hours</h3>
                    <p>24/7 Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="contact-form-card">
              <CardContent className="contact-form-content">
                <h2 className="form-title">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <Label htmlFor="name">Your Name</Label>
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
                    <Label htmlFor="email">Email Address</Label>
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
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-primary btn-full btn-large">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3>How do I enroll in a course?</h3>
                <p>Browse our courses page, select your desired course, and click "Enroll Now". Our team will guide you through the process.</p>
              </CardContent>
            </Card>

            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3>What are the payment options?</h3>
                <p>We accept various payment methods including credit cards, PayPal, and bank transfers. Payment plans are available for longer courses.</p>
              </CardContent>
            </Card>

            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3>Can I become a tutor?</h3>
                <p>Yes! Visit our "Join Us" page to submit your application. We're always looking for passionate educators.</p>
              </CardContent>
            </Card>

            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3>Do you offer refunds?</h3>
                <p>We offer a satisfaction guarantee. If you're not happy within the first week, we'll provide a full refund.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

