"use client";

import { useState } from "react";
import DatePicker from "@/components/DatePicker";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourType: "",
    preferredDate: "",
    passengers: "1",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionError(null);

    // Validate required date field
    if (!formData.preferredDate) {
      setSubmissionError("Please select a preferred date for your flight.");
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      // Send form data to backend API
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tourType: formData.tourType,
          preferredDate: formData.preferredDate,
          passengers: formData.passengers,
          specialRequests: formData.specialRequests,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          tourType: "",
          preferredDate: "",
          passengers: "1",
          specialRequests: "",
        });

        // Scroll to top to see success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmissionError(data.error || "Failed to submit form. Please try again.");
        console.error("Form submission error:", data);

        // Scroll to top to see error message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      setSubmissionError("An error occurred. Please check your connection and try again.");
      console.error("Form submission error:", error);

      // Scroll to top to see error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section style={{paddingTop: '200px', paddingBottom: '8rem', maxWidth: '1000px', margin: '0 auto', padding: '200px 2rem 8rem'}}>
        <h2 className="section-title" style={{marginBottom: '1rem'}}>Book Your Arctic Adventure</h2>
        <p className="section-subtitle" style={{marginBottom: '2rem'}}>
          Fill out the form below to inquire about your flight.
        </p>
        <p style={{color: '#ef4444', fontSize: '0.9rem', marginBottom: '2rem'}}>
          <span style={{color: '#ef4444'}}>*</span> Required fields
        </p>

        {submitted && (
          <div style={{
            padding: '2rem',
            background: 'rgba(0, 212, 255, 0.15)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '8px',
            color: '#00d4ff',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{marginBottom: '0.5rem', fontSize: '1.3rem'}}>✓ Thank You!</h3>
            <p style={{color: '#a8b8cc', marginBottom: '0.5rem'}}>
              Your inquiry has been received. Sven will get back to you as soon as possible.
            </p>
            <p style={{color: '#a8b8cc', fontSize: '0.9rem'}}>
              Make sure to check your spam folder if you don't hear back soon.
            </p>
          </div>
        )}

        {submissionError && (
          <div style={{
            padding: '2rem',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            color: '#ef4444',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{marginBottom: '0.5rem', fontSize: '1.3rem'}}>⚠️ Error</h3>
            <p style={{color: '#fca5a5', marginBottom: '0.5rem'}}>
              {submissionError}
            </p>
            <p style={{color: '#fca5a5', fontSize: '0.9rem'}}>
              Please check all required fields and try again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{display: 'grid', gap: '1.5rem'}}>
          {/* Name */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Full Name <span style={{color: '#ef4444'}}>*</span>
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
              Email Address <span style={{color: '#ef4444'}}>*</span>
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
              Phone Number <span style={{color: '#ef4444'}}>*</span>
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
              Tour Type <span style={{color: '#ef4444'}}>*</span>
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
            <DatePicker
              label="Preferred Date (Approximate)"
              value={formData.preferredDate}
              onChange={(date) =>
                setFormData((prev) => ({
                  ...prev,
                  preferredDate: date,
                }))
              }
              required
            />
          </div>

          {/* Passengers */}
          <div>
            <label style={{display: 'block', color: '#00d4ff', marginBottom: '0.5rem', fontWeight: '600'}}>
              Number of Passengers <span style={{color: '#ef4444'}}>*</span>
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
            disabled={isLoading}
            style={{
              padding: '1rem 2rem',
              background: isLoading ? 'rgba(0, 212, 255, 0.5)' : 'linear-gradient(135deg, #00d4ff 0%, #00a8d4 100%)',
              color: '#0a1428',
              border: '2px solid #00d4ff',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              marginTop: '1rem',
              opacity: isLoading ? 0.7 : 1
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                (e.target as HTMLButtonElement).style.transform = 'translateY(-5px)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 20px 50px rgba(0, 212, 255, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.2)';
              }
            }}
          >
            {isLoading ? 'Sending...' : 'Submit Inquiry'}
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
            Feel free to reach out directly:
          </p>
          <ul style={{listStyle: 'none', padding: '0'}}>
            <li style={{marginBottom: '0.5rem'}}>
              📧 Email: <a href="mailto:inquiries@aviation-expeditions.com" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: '600'}}>inquiries@aviation-expeditions.com</a>
            </li>
            <li>
              📱 Phone: <a href="tel:907-355-7088" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: '600'}}>907-355-7088</a>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
