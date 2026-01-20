"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What experience do I need for a flight?",
      answer: "No prior flying or outdoor experience is necessary! Our flights are designed for everyone from first-time fliers to seasoned adventurers. Sven will brief you on safety procedures before every flight.",
    },
    {
      question: "What is the best time of year to fly?",
      answer: "Alaska offers different experiences throughout the year. Summer (June - August) offers 24 hour daylight, while fall (September) provides stunning colors. Winter (February - March) offers Wildlife opportunities for flights conducted from Bettles. All seasons are available weather permitting.",
    },
    {
      question: "How many passengers can fit in the aircraft?",
      answer: "The aircraft safely accommodates up to 3 passengers plus Sven as pilot. This intimate group size ensures personalized attention and flexibility to customize your route.",
    },
    {
      question: "What should I wear?",
      answer: "Dress in layers! Alaska's weather changes quickly. We recommend: thermal base layers, insulating mid-layer, waterproof jacket, warm hat, gloves, and sturdy boots. Sven will provide specific recommendations based on the season and tour.",
    },
    {
      question: "Can I bring camera equipment?",
      answer: "Absolutely! We encourage photography. Professional equipment is welcome. Sven can adjust flight plans to optimize views for photography. Let us know in advance if you're bringing large or specialized gear.",
    },
    {
      question: "Is the flight bumpy?",
      answer: "Modern aircraft are designed for smooth flight. While you may experience minor turbulence in certain conditions, Sven is an expert at avoiding rough air when possible. Most passengers find the ride comfortable and thrilling.",
    },
    {
      question: "What happens if weather is bad?",
      answer: "Safety is our top priority. If weather prevents flying on your scheduled date, Sven will reschedule your flight for the next available favorable weather window at no additional cost.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-4 weeks in advance, though Sven tries to accommodate last-minute requests when schedules allow. Contact us to discuss your ideal dates.",
    },
    {
      question: "Are there age restrictions?",
      answer: "Children of all ages are welcome! We recommend being comfortable sitting for extended periods. Infants and very young children may need booster seats. Discuss specific needs when booking.",
    },
    {
      question: "What is included in the tour cost?",
      answer: "Pricing includes aircraft, fuel, pilot expertise, safety equipment, and the complete flying experience. We'll discuss any additional costs (like special permits for certain parks) when you book.",
    },
    {
      question: "Can I do a fishing or hunting trip?",
      answer: "Yes! Sven specializes in custom fishing and hunting access flights. We can arrange drop-offs at remote locations and pick-up times that work for you. Discuss your specific needs when booking.",
    },
    {
      question: "What if I'm afraid of flying?",
      answer: "Many first-time fliers are nervous, and that's completely normal. Sven is experienced at helping anxious fliers feel comfortable. Be honest about your concerns when booking, and we'll do our best to make you feel safe and confident.",
    },
  ];

  return (
    <main>
      <section style={{ paddingTop: "200px", paddingBottom: "8rem", maxWidth: "1400px", margin: "0 auto", padding: "200px 2rem 8rem" }}>
        <h2 className="section-title" style={{marginBottom: "1rem"}}>Frequently Asked Questions</h2>
        <p className="section-subtitle" style={{marginBottom: "4rem"}}>
          Have questions about your Arctic adventure? Find answers below
        </p>

        <div style={{display: 'grid', gap: '1rem'}}>
          {faqs.map((faq, index) => (
            <div key={index} className="prep-item" style={{padding: '0'}}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  border: 'none',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#00d4ff',
                  fontFamily: '"Syne", sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  letterSpacing: '-0.5px',
                  textAlign: 'left'
                }}
              >
                {faq.question}
                <span style={{
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  marginLeft: '1rem',
                  flexShrink: 0
                }}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div style={{
                  padding: '1rem 1.5rem 1.5rem',
                  borderTop: '1px solid rgba(0, 212, 255, 0.15)',
                  color: '#a8b8cc',
                  lineHeight: '1.8'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          background: 'rgba(0, 212, 255, 0.1)',
          borderLeft: '3px solid #00d4ff',
          borderRadius: '8px',
          color: '#a8b8cc'
        }}>
          <h3 style={{color: '#00d4ff', marginBottom: '1rem', fontSize: '1.2rem'}}>Didn't find your answer?</h3>
          <p>
            <a href="/inquiry" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: '600'}}>
              Send us an inquiry
            </a>{" "}
            or call Sven directly at{" "}
            <a href="tel:907-355-7088" style={{color: '#f0f4f8', textDecoration: 'none', fontWeight: '600'}}>
              907-355-7088
            </a>
            . He's always happy to answer questions and discuss your custom adventure.
          </p>
        </div>
      </section>

    </main>
  );
}
