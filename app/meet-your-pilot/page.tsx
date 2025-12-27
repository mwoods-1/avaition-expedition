"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSvenPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photos = [
    { src: '/images/meet_the_pilot/pilot01.jpeg', alt: 'Sven with Aircraft' },
    { src: '/images/meet_the_pilot/pilot02.jpeg', alt: 'Sven - Option 2' },
    { src: '/images/meet_the_pilot/pilot03.jpeg', alt: 'Sven - Option 3' },
    { src: '/images/meet_the_pilot/pilot04.jpeg', alt: 'Sven - Option 4' },
  ];

  return (
    <main>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
        }

        .pilot-gallery-wrapper {
          animation: slideInRight 0.8s ease-out;
        }

        .main-photo-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          aspect-ratio: 9/11;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5),
                      0 0 40px rgba(0, 212, 255, 0.15);
          border: 1px solid rgba(0, 212, 255, 0.3);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-photo-container:hover {
          box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6),
                      0 0 60px rgba(0, 212, 255, 0.3);
          border-color: rgba(0, 212, 255, 0.6);
        }

        .photo-thumbnail {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.7;
        }

        .photo-thumbnail:hover {
          opacity: 1;
          border-color: rgba(0, 212, 255, 0.5);
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.15);
        }

        .photo-thumbnail.active {
          opacity: 1;
          border-color: #00d4ff;
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.2),
                      0 15px 35px rgba(0, 212, 255, 0.3);
        }

        .bio-section {
          animation: fadeIn 1s ease-out;
        }

        .title-accent {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.8rem, 7vw, 4.5rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          letter-spacing: -1px;
          background: linear-gradient(135deg, #00d4ff 0%, #f0f4f8 50%, #ffa500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .subtitle-accent {
          font-family: 'Fraunces', serif;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          color: #00d4ff;
          font-weight: 300;
          letter-spacing: 0.05em;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
        }

        .bio-text {
          color: #a8b8cc;
          line-height: 1.85;
          margin-bottom: 1rem;
          font-size: 1rem;
          font-weight: 300;
        }

        .bio-text:last-of-type {
          margin-bottom: 0;
        }
      `}</style>

      {/* About Sven Section */}
      <section style={{
        padding: '180px 2rem 6rem',
        position: 'relative',
        zIndex: '2',
        background: 'linear-gradient(180deg, rgba(30, 90, 150, 0.15) 0%, transparent 100%)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
        {/* Hero Layout - Asymmetrical */}
        <div style={{
          marginBottom: '6rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '4rem',
          alignItems: 'stretch',
          paddingTop: '0',
        }} className="hero-grid-mobile">
          {/* Left Column - Bio + Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'flex-end' }}>
            {/* Bio Section */}
            <div className="bio-section" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="subtitle-accent">Meet Your Arctic Guide</div>
              <h1 className="title-accent">Sven Haltmann</h1>

              <p className="bio-text" style={{ marginTop: '2.5rem' }}>
                Born and raised in the Swiss Alps, Sven spent his youth exploring stunning mountain landscapes. In 2000, he moved to Alaska to embrace a more unconventional and adventurous lifestyle.
              </p>

              <p className="bio-text">
                He's lived in Alaska for over two decades, spending summers fighting fires with Pioneer Peak Hotshots across the state and completing multiple Iditarod sled dog races. Today, he calls both Fairbanks and his Bettles cabin home.
              </p>

              <p className="bio-text">
                With his invaluable knowledge of Alaska's interior and arctic regions, Sven provides safe, reliable, and prompt flying services to adventurers, explorers, hunters, fishermen, and expedition teams. His passion for aviation and intimate knowledge of the Brooks Range make him the perfect guide for your Alaskan adventure.
              </p>
            </div>

            {/* Quick Credentials */}
            <ul style={{
              listStyle: 'none',
              margin: '0',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              {[
                { title: '25+ Years in Alaska', desc: 'Extensive experience navigating Alaska\'s unique terrain and weather patterns' },
                { title: 'Pioneer Peak Hotshots', desc: 'Multiple seasons fighting wildfires across Alaska\'s interior' },
                { title: 'Iditarod Racer', desc: 'Veteran of multiple grueling sled dog race expeditions' },
                { title: 'Commercial Pilot License', desc: 'Licensed and skilled in operating bush aircraft in extreme conditions' },
                { title: 'Remote Landing Expert', desc: 'Master of unprepared airstrips and challenging terrain' },
                { title: 'Brooks Range Authority', desc: 'Intimate knowledge of one of Alaska\'s most spectacular regions' },
              ].map((item, idx) => (
                <li key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(255, 165, 0, 0.03) 100%)',
                  border: '1px solid rgba(0, 212, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '1rem',
                  color: '#a8b8cc',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(255, 165, 0, 0.06) 100%)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(255, 165, 0, 0.03) 100%)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <span style={{
                    color: '#00d4ff',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}>→</span>
                  <span>
                    <strong style={{color: '#f0f4f8', display: 'block', marginBottom: '0.2rem', fontSize: '0.9rem'}}>{item.title}</strong>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Photo Gallery */}
          <div className="pilot-gallery-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignSelf: 'end',
          }}>
            {/* Main Photo */}
            <div className="main-photo-container">
              <Image
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].alt}
                fill
                priority
                style={{
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 100%)',
                pointerEvents: 'none',
              }}></div>
            </div>

            {/* Thumbnail Gallery */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.75rem',
            }}>
              {photos.map((photo, idx) => (
                <div
                  key={idx}
                  className={`photo-thumbnail ${activePhotoIndex === idx ? 'active' : ''}`}
                  onClick={() => setActivePhotoIndex(idx)}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Aircraft Showcase */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(255, 165, 0, 0.04) 100%)',
          border: '1px solid rgba(0, 212, 255, 0.12)',
          borderRadius: '20px',
          padding: 'clamp(3rem, 5vw, 4.5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '-40%',
            right: '-20%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}></div>

          <div style={{position: 'relative', zIndex: '1'}}>
            <div style={{
              color: '#ffa500',
              fontSize: '0.9rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Your Aircraft
            </div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3rem)',
              color: '#00d4ff',
              marginBottom: '0.75rem',
              letterSpacing: '-0.5px',
              margin: 0,
              marginBottom: '0.75rem',
            }}>
              1977 Cessna A185F
            </h3>
            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.85',
              marginBottom: '3rem',
              fontSize: '1.05rem',
              maxWidth: '700px',
              fontWeight: '300',
            }}>
              One of Alaska's most versatile and beloved aircraft. Purpose-built for remote exploration with comfortable cabin, maximum visibility, and proven reliability in extreme conditions.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}>
              {[
                { label: 'Seating Capacity', value: '4 passengers (including pilot)' },
                { label: 'Window Seats', value: '100% — every passenger has a window' },
                { label: 'Cargo Capacity', value: 'Some room for gear and personal items' },
                { label: 'Features', value: 'Modified skylight for optimal viewing' },
                { label: 'Communication', value: 'Headsets for all passengers + pilot' },
                { label: 'Safety', value: 'Fully weight-loaded per FAA standards' },
              ].map((spec, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  padding: '1.5rem',
                  background: 'rgba(0, 212, 255, 0.04)',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 212, 255, 0.08)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.08)';
                }}>
                  <span style={{fontWeight: '600', color: '#00d4ff', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.4px'}}>{spec.label}</span>
                  <span style={{color: '#a8b8cc', fontSize: '1rem', fontWeight: '300'}}>{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Charter Info Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)',
              borderLeft: '3px solid #00d4ff',
              padding: '2rem',
              borderRadius: '14px',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              borderLeft: '3px solid #00d4ff',
            }}>
              <p style={{
                color: '#a8b8cc',
                fontSize: '1rem',
                lineHeight: '1.8',
                margin: '0',
                fontWeight: '300',
              }}>
                <strong style={{color: '#f0f4f8', fontWeight: '600'}}>Charter Rate:</strong> You charter the aircraft, not individual seats. Rate depends on flight duration and current fuel prices. <a href="/inquiry" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: '600', transition: 'all 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Inquire Now</a> for personalized pricing.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

    </main>
  );
}
