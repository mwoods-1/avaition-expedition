import Image from "next/image";

export default function Home() {
  const tours = [
    {
      id: 1,
      name: "Gates of the Arctic",
      duration: "Custom Duration • Alpine Adventure",
      description: "Remote alpine park with pristine peaks and untouched valleys.",
      image: "/aviation-expeditions-images/Tours/gates-of-the-arctic.jpg",
      highlights: ["National Park access", "Remote landing sites"],
      passengers: 3,
      icon: "🏔️",
    },
    {
      id: 2,
      name: "Kobuk Valley",
      duration: "Custom Duration • Remote Explorer",
      description: "Vast sand dunes and pristine valleys in a seldom-visited park.",
      image: "/aviation-expeditions-images/Tours/kobuk.jpg",
      highlights: ["Sand dunes & valleys", "Fishing/hunting access"],
      passengers: 3,
      icon: "🗻",
    },
    {
      id: 3,
      name: "Arctic Circle Flight",
      duration: "2-3 Hours • Bucket List",
      description: "Cross the Arctic Circle and earn an official certificate.",
      image: "/aviation-expeditions-images/Tours/arctic-circle.jpg",
      highlights: ["Arctic Circle crossing", "Official certificate"],
      passengers: 3,
      icon: "🎯",
    },
    {
      id: 4,
      name: "Denali Vista",
      duration: "3-4 Hours • Mountain Majesty",
      description: "View North America's tallest mountain from the air.",
      image: "/aviation-expeditions-images/Tours/denali.jpg",
      highlights: ["Mount Denali viewing", "Alaska Range scenery"],
      passengers: 3,
      icon: "⛰️",
    },
    {
      id: 5,
      name: "White Mountains & Hotsprings",
      duration: "2-3 Hours • Scenic Loop",
      description: "Scenic White Mountains with remote hotsprings access.",
      image: "/aviation-expeditions-images/Tours/hotsprings.jpg",
      highlights: ["Mountain views", "Hotsprings access"],
      passengers: 3,
      icon: "🏖️",
    },
    {
      id: 6,
      name: "Custom Adventures",
      duration: "Flexible • Your Vision",
      description: "Fully customized for your interests—fishing, hunting, expeditions & more.",
      image: "/aviation-expeditions-images/Tours/custom-trips.jpg",
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
          backgroundImage: "url('/aviation-expeditions-images/hero-image.jpg')",
        }}
      >
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
            <a href="/about-sven" className="cta-button cta-secondary">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="tours">
        <h2 className="section-title">2026 Tour Experiences</h2>
        <p className="section-subtitle">From scenic flightseeing to remote park expeditions...</p>

        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div
                className="tour-header"
                style={{ backgroundImage: `url('${tour.image}')` }}
              >
                <h3>{tour.name}</h3>
                <div className="tour-duration">{tour.duration}</div>
              </div>
              <div className="tour-body">
                <p className="tour-description">{tour.description}</p>
                <ul className="tour-highlights">
                  {tour.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tour-footer">
                  <span className="passengers">
                    <strong>{tour.passengers}</strong> passengers
                  </span>
                  <a href="/booking" className="tour-cta">
                    Inquire
                  </a>
                </div>
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
          <p className="section-subtitle">Contact Sven to plan your custom flight experience</p>
          <div className="book-cta">
            <a href="/booking" className="cta-button cta-primary">
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
