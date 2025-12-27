export default function Home() {
  const tours = [
    {
      id: 1,
      name: "Gates of the Arctic / Kobuk Valley Combo",
      duration: "Full Day Tour • Arctic Explorer",
      description: "Experience two pristine national parks in one adventure—remote alpine peaks and vast sand dunes.",
      image: "/images/national_park/gates_of_the_arctic2.jpeg",
      highlights: ["National Park access", "Alpine & dunes"],
      passengers: 3,
      icon: "🏔️",
    },
    {
      id: 2,
      name: "Arctic Circle Flight",
      duration: "2-3 Hours • Bucket List",
      description: "Cross the Arctic Circle and earn an official certificate.",
      image: "/images/winter_flying/winter_flying2.jpeg",
      highlights: ["Arctic Circle crossing", "Official certificate"],
      passengers: 3,
      icon: "🎯",
    },
    {
      id: 3,
      name: "Remote Support / Logistics",
      duration: "Custom Duration • Expedition Support",
      description: "Professional aerial support for remote properties, mining operations, and wilderness access. Full logistics and landing coordination.",
      image: "/images/winter_flying/winter_flying1.jpeg",
      highlights: ["Remote property access", "Professional logistics"],
      passengers: 3,
      icon: "🚁",
    },
    {
      id: 4,
      name: "Denali Vista",
      duration: "3-4 Hours • Mountain Majesty",
      description: "View North America's tallest mountain from the air.",
      image: "/images/winter_flying/winter_flying5.jpeg",
      highlights: ["Mount Denali viewing", "Alaska Range scenery"],
      passengers: 3,
      icon: "⛰️",
    },
    {
      id: 5,
      name: "White Mountains & Hotsprings",
      duration: "2-3 Hours • Scenic Loop",
      description: "Scenic White Mountains with remote hotsprings access.",
      image: "/images/winter_flying/winter_flying3.jpeg",
      highlights: ["Mountain views", "Hotsprings access"],
      passengers: 3,
      icon: "🏖️",
    },
    {
      id: 6,
      name: "Custom Adventures",
      duration: "Flexible • Your Vision",
      description: "Fully customized for your interests—fishing, hunting, expeditions & more.",
      image: "/images/winter_flying/winter_flying4.jpeg",
      highlights: ["Fishing & hunting", "Remote access"],
      passengers: 3,
      icon: "🎣",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/winter_flying/winter_flying6.jpeg')",
        }}
      >
        {/* Cloud Layers for Parallax Effect */}
        <div className="cloud-layer cloud-1"></div>
        <div className="cloud-layer cloud-2"></div>
        <div className="cloud-layer cloud-3"></div>

        <div className="hero-content">
          <div className="hero-tag">✈️ Flightseeing Tours - Departing Fairbanks</div>
          <h1>Fly Above the Arctic</h1>
          <p>
            Soar over the Brooks Range, Gates of the Arctic, Denali, and pristine Alaskan wilderness with a local pilot who knows every peak and valley.
          </p>
          <div className="cta-group">
            <a href="/tours" className="cta-button cta-primary">
              <span>Explore Tours</span>
            </a>
            <a href="/meet-your-pilot" className="cta-button cta-secondary">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="tours">
        <h2 className="section-title">2026 Flight/Tour Experiences</h2>
        <p className="section-subtitle">From scenic flightseeing to remote park expeditions...</p>

        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div
                className="tour-image"
                style={{ backgroundImage: `url('${tour.image}')` }}
              />
              <div className="tour-info">
                <h3>{tour.name}</h3>
                <div className="tour-meta">
                  <span className="passengers-badge">
                    <strong>{tour.passengers}</strong> passengers
                  </span>
                  <span className="duration-badge">{tour.duration}</span>
                </div>
                <a href="/tours" className="info-button">
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Now Section */}
      <section
        className="book-now"
        style={{
          backgroundImage:
            "url('/aviation-expeditions-images/book-now-planes.jpg')",
        }}
      >
        <div className="book-container">
          <h2 className="section-title">Ready to Book Your Arctic Adventure?</h2>
          <p className="section-subtitle" style={{ marginTop: "1.5rem" }}>Contact Sven to plan your custom flight experience</p>
          <div className="book-cta">
            <a href="/inquiry" className="cta-button cta-primary">
              <span>Inquire Now</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
