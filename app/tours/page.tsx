export default function ToursPage() {
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
      fullDescription: "Gates of the Arctic is one of Alaska's most pristine and remote national parks. With no roads accessing the park, our flights provide exclusive access to its untouched wilderness. Experience towering peaks, pristine valleys, and abundant wildlife from the sky."
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
      fullDescription: "Kobuk Valley National Park features some of Alaska's most unique landscapes, including the Great Kobuk Sand Dunes—the largest active sand dunes in the Arctic. Perfect for explorers seeking remote, untouched wilderness with excellent wildlife viewing opportunities."
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
      fullDescription: "One of the most iconic Arctic experiences! Cross the Arctic Circle and receive an official certificate commemorating your journey to 66°33' North. This scenic flight offers stunning views of the transition zone between subarctic and Arctic ecosystems."
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
      fullDescription: "Witness the majesty of Denali (Mount McKinley), North America's tallest peak at 20,310 feet. Our flight provides panoramic views of the Alaska Range and surrounding glaciers. Clear days offer breathtaking photo opportunities."
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
      fullDescription: "Experience the scenic White Mountains and access remote natural hotsprings. This tour combines stunning mountain views with the unique opportunity to relax in hot springs surrounded by pristine Arctic wilderness."
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
      fullDescription: "Every adventure is unique. Whether you want to fly in for fishing, hunting, photography, scientific research, or pure exploration, Sven will customize your flight to match your exact needs and timeline."
    },
  ];

  return (
    <main>
      <section className="tours" style={{ paddingTop: "120px" }}>
        <h2 className="section-title">2026 Tour Experiences</h2>
        <p className="section-subtitle">
          From scenic flightseeing to remote park expeditions, we offer unmatched access to Alaska's most pristine destinations
        </p>

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
                <p className="tour-description">{tour.fullDescription}</p>
                <ul className="tour-highlights">
                  {tour.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tour-footer">
                  <span className="passengers">
                    <strong>{tour.passengers}</strong> passengers
                  </span>
                  <a href="mailto:Svenhaltmann@gmail.com" className="tour-cta">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding: '8rem 2rem', background: 'linear-gradient(135deg, rgba(15, 31, 53, 0.6) 0%, rgba(10, 20, 40, 0.8) 100%)', borderTop: '1px solid rgba(0, 212, 255, 0.15)'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 className="section-title">Booking Your Flight</h2>
          <p className="section-subtitle" style={{marginBottom: '2rem'}}>
            Contact Sven directly to discuss your adventure, dates, and custom requirements
          </p>
          <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
            <div style={{flex: '1', minWidth: '250px'}}>
              <h3 style={{color: '#00d4ff', marginBottom: '1rem', fontSize: '1.3rem'}}>Email</h3>
              <a href="mailto:Svenhaltmann@gmail.com" style={{color: '#a8b8cc', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>
                Svenhaltmann@gmail.com
              </a>
            </div>
            <div style={{flex: '1', minWidth: '250px'}}>
              <h3 style={{color: '#00d4ff', marginBottom: '1rem', fontSize: '1.3rem'}}>Phone</h3>
              <p style={{color: '#a8b8cc', fontSize: '1.1rem', fontWeight: '600'}}>907-355-7088</p>
            </div>
            <div style={{flex: '1', minWidth: '250px'}}>
              <h3 style={{color: '#00d4ff', marginBottom: '1rem', fontSize: '1.3rem'}}>Location</h3>
              <p style={{color: '#a8b8cc', fontSize: '1.1rem', fontWeight: '600'}}>Fairbanks & Bettles, Alaska</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
