export default function AboutSvenPage() {
  return (
    <main>
      {/* Page Hero */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 2rem 4rem',
        position: 'relative',
        zIndex: '2',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(30, 90, 150, 0.2) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
      }}>
        <div>
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #00d4ff 0%, #f0f4f8 50%, #ffa500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Meet Sven
          </h1>
          <p style={{
            color: '#a8b8cc',
            fontSize: '1.1rem',
            maxWidth: '700px',
            lineHeight: '1.8',
            margin: '0 auto',
          }}>
            Your Arctic Expert & Commercial Pilot
          </p>
        </div>
      </section>

      {/* About Sven Section */}
      <section style={{
        padding: '6rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '2',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <div className="about-content">
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              marginBottom: '1.5rem',
              color: '#00d4ff',
            }}>
              Arctic Explorer & Commercial Pilot
            </h2>

            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.9',
              marginBottom: '1.5rem',
              fontSize: '1rem',
            }}>
              Born and raised in the Swiss Alps, Sven spent his youth exploring stunning mountain landscapes. In 2000, he moved to Alaska to embrace a more unconventional and adventurous lifestyle.
            </p>

            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.9',
              marginBottom: '1.5rem',
              fontSize: '1rem',
            }}>
              He's lived in Alaska for over two decades, spending summers fighting fires with Pioneer Peak Hotshots across the state and completing multiple Iditarod sled dog races. Today, he calls both Fairbanks and his Bettles cabin home.
            </p>

            <p style={{
              color: '#a8b8cc',
              lineHeight: '1.9',
              marginBottom: '1.5rem',
              fontSize: '1rem',
            }}>
              With his invaluable knowledge of Alaska's interior and arctic regions, Sven provides safe, reliable, and prompt flying services to adventurers, explorers, hunters, fishermen, and expedition teams. His passion for aviation and intimate knowledge of the Brooks Range make him the perfect guide for your Alaskan adventure.
            </p>

            <ul className="experience-list" style={{
              listStyle: 'none',
              margin: '2rem 0',
              padding: 0,
            }}>
              <li style={{
                color: '#a8b8cc',
                padding: '0.8rem 0 0.8rem 2rem',
                position: 'relative',
                fontSize: '0.95rem',
              }}>
                <span style={{position: 'absolute', left: '0', color: '#00d4ff', fontWeight: 'bold'}}>✓</span>
                25+ years living in Alaska
              </li>
              <li style={{
                color: '#a8b8cc',
                padding: '0.8rem 0 0.8rem 2rem',
                position: 'relative',
                fontSize: '0.95rem',
              }}>
                <span style={{position: 'absolute', left: '0', color: '#00d4ff', fontWeight: 'bold'}}>✓</span>
                Pioneer Peak Hotshots firefighter (multiple seasons)
              </li>
              <li style={{
                color: '#a8b8cc',
                padding: '0.8rem 0 0.8rem 2rem',
                position: 'relative',
                fontSize: '0.95rem',
              }}>
                <span style={{position: 'absolute', left: '0', color: '#00d4ff', fontWeight: 'bold'}}>✓</span>
                Iditarod sled dog race veteran
              </li>
              <li style={{
                color: '#a8b8cc',
                padding: '0.8rem 0 0.8rem 2rem',
                position: 'relative',
                fontSize: '0.95rem',
              }}>
                <span style={{position: 'absolute', left: '0', color: '#00d4ff', fontWeight: 'bold'}}>✓</span>
                Licensed commercial pilot
              </li>
              <li style={{
                color: '#a8b8cc',
                padding: '0.8rem 0 0.8rem 2rem',
                position: 'relative',
                fontSize: '0.95rem',
              }}>
                <span style={{position: 'absolute', left: '0', color: '#00d4ff', fontWeight: 'bold'}}>✓</span>
                Expert in remote landing sites
              </li>
              <li style={{
                color: '#a8b8cc',
                padding: '0.8rem 0 0.8rem 2rem',
                position: 'relative',
                fontSize: '0.95rem',
              }}>
                <span style={{position: 'absolute', left: '0', color: '#00d4ff', fontWeight: 'bold'}}>✓</span>
                Extensive Brooks Range knowledge
              </li>
            </ul>

            {/* Aircraft Showcase */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              borderRadius: '12px',
              padding: '3rem',
              marginTop: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{position: 'relative', zIndex: '1', marginBottom: '2rem'}}>
                <div style={{
                  color: '#ffa500',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  Your Aircraft
                </div>
                <h3 style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '2rem',
                  color: '#00d4ff',
                  marginBottom: '1rem',
                  letterSpacing: '-0.5px',
                }}>
                  1977 Cessna A185F
                </h3>
                <p style={{
                  color: '#a8b8cc',
                  lineHeight: '1.8',
                  marginBottom: '2rem',
                }}>
                  One of Alaska's most versatile and beloved aircraft. Purpose-built for remote exploration with comfortable cabin, maximum visibility, and proven reliability in extreme conditions.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                position: 'relative',
                zIndex: '1',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
                  color: '#a8b8cc',
                }}>
                  <span style={{fontWeight: '600', color: '#f0f4f8'}}>Seating Capacity:</span>
                  <span>4 passengers (including pilot)</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
                  color: '#a8b8cc',
                }}>
                  <span style={{fontWeight: '600', color: '#f0f4f8'}}>Window Seats:</span>
                  <span>100% — every passenger has a window</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
                  color: '#a8b8cc',
                }}>
                  <span style={{fontWeight: '600', color: '#f0f4f8'}}>Cargo Capacity:</span>
                  <span>Extensive—rafts, gear, expeditions</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
                  color: '#a8b8cc',
                }}>
                  <span style={{fontWeight: '600', color: '#f0f4f8'}}>Features:</span>
                  <span>Modified skylight for optimal viewing</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
                  color: '#a8b8cc',
                }}>
                  <span style={{fontWeight: '600', color: '#f0f4f8'}}>Communication:</span>
                  <span>Headsets for all passengers + pilot</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  color: '#a8b8cc',
                }}>
                  <span style={{fontWeight: '600', color: '#f0f4f8'}}>Safety:</span>
                  <span>Fully weight-loaded per FAA standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Aircraft Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              borderRadius: '12px',
              padding: '2.5rem',
              textAlign: 'center',
              maxWidth: '350px',
            }}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>✈️</div>
              <h3 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '1.5rem',
                color: '#00d4ff',
                marginBottom: '1rem',
                fontWeight: '700',
              }}>
                Cessna A185F
              </h3>
              <p style={{
                color: '#a8b8cc',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
              }}>
                One of Alaska's most versatile and beloved aircraft. Purpose-built for remote exploration, comfortable cabin, and maximum visibility.
              </p>
              <div style={{
                background: 'rgba(0, 212, 255, 0.1)',
                borderLeft: '3px solid #00d4ff',
                padding: '1rem',
                borderRadius: '6px',
                color: '#a8b8cc',
                fontSize: '0.9rem',
              }}>
                <p><strong style={{color: '#f0f4f8'}}>Charter Rate:</strong> You charter the aircraft, not individual seats. Rate depends on flight duration and current fuel prices. Contact for pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
