"use client";

import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourType: "",
    preferredDate: "",
    passengers: "1",
    experience: "",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create email body
    const emailBody = `
Flight Inquiry from Aviation Expeditions Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Tour Type: ${formData.tourType}
Preferred Date: ${formData.preferredDate}
Number of Passengers: ${formData.passengers}
Flying Experience: ${formData.experience}

Special Requests:
${formData.specialRequests}

---
This inquiry was submitted through the Aviation Expeditions booking form.
`.trim();

    const mailtoLink = `mailto:Svenhaltmann@gmail.com?subject=Flight Inquiry - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        tourType: "",
        preferredDate: "",
        passengers: "1",
        experience: "",
        specialRequests: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main>
      <section style={{paddingTop: '120px', paddingBottom: '8rem', maxWidth: '1000px', margin: '0 auto', padding: '120px 2rem 8rem'}}>
        <h2 className="section-title" style={{marginBottom: '1rem'}}>Book Your Arctic Adventure</h2>
        <p className="section-subtitle" style={{marginBottom: '4rem'}}>
          Fill out the form below to inquire about your custom flight. Sven will respond within 24 hours.
        </p>

        {submitted ? (
          <div style={{
            padding: '2rem',
            background: 'rgba(0, 212, 255, 0.15)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '8px',
            color: '#00d4ff',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{marginBottom: '0.5rem', fontSize: '1.3rem'}}>✓ Inquiry Sent!</h3>
            <p style={{color: '#a8b8cc', marginBottom: '0.5rem'}}>
              Your flight inquiry has been sent to Sven. He will review your request and respond within 24 hours.
            </p>
            <p style={{color: '#a8b8cc', fontSize: '0.9rem'}}>
              Make sure to check your spam folder if you don't hear back soon.
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} style={{display: 'grid', gap: '1.5rem'}}>
          {/* Name */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
              placeholder="(907) 555-0123"
            />
          </div>

          {/* Tour Type */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Tour Type *
            </label>
            <select
              name="tourType"
              value={formData.tourType}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            >
              <option value="">Select a tour...</option>
              <option value="gates">Gates of the Arctic</option>
              <option value="kobuk">Kobuk Valley</option>
              <option value="arctic-circle">Arctic Circle Flight</option>
              <option value="denali">Denali Vista</option>
              <option value="white-mountains">White Mountains & Hotsprings</option>
              <option value="custom">Custom Adventure</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Preferred Date (Approximate)
            </label>
            <input
              type="month"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            />
          </div>

          {/* Passengers */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Number of Passengers *
            </label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
            </select>
          </div>

          {/* Flying Experience */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Flying Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            >
              <option value="">Select...</option>
              <option value="first-time">First time flying</option>
              <option value="occasional">Occasional flier</option>
              <option value="frequent">Frequent flier</option>
              <option value="pilot">I'm a pilot</option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Special Requests or Questions
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(15, 31, 53, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '6px',
                color: '#f0f4f8',
                fontFamily: 'inherit',
                fontSize: '1rem',
                resize: 'vertical'
              }}
              placeholder="Tell Sven about your interests, photography equipment, special needs, etc."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #00d4ff 0%, #00a8d4 100%)',
              color: '#0a1428',
              border: '2px solid #00d4ff',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              marginTop: '1rem'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(-5px)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 20px 50px rgba(0, 212, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.2)';
            }}
          >
            Submit Inquiry
          </button>
        </form>

        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
          border: '1px solid rgba(0, 212, 255, 0.15)',
          borderRadius: '8px',
          color: '#a8b8cc'
        }}>
          <h3 style={{color: '#00d4ff', marginBottom: '1rem', fontSize: '1.2rem'}}>Prefer Direct Contact?</h3>
          <p style={{marginBottom: '1rem'}}>
            Feel free to reach out to Sven directly:
          </p>
          <ul style={{listStyle: 'none', padding: '0'}}>
            <li style={{marginBottom: '0.5rem'}}>
              📧 Email: <a href="mailto:Svenhaltmann@gmail.com" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: '600'}}>Svenhaltmann@gmail.com</a>
            </li>
            <li>
              📱 Phone: <strong style={{color: '#f0f4f8'}}>907-355-7088</strong>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
