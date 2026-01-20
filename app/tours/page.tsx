export default function ToursPage() {
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
      fullDescription: "Combine two of Alaska's most spectacular national parks in one unforgettable journey. Gates of the Arctic features towering peaks and pristine valleys with exclusive air access, while Kobuk Valley showcases the Great Kobuk Sand Dunes—the largest active sand dunes in the Arctic. This full-day adventure offers unmatched diversity in landscape and wildlife viewing opportunities."
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
      fullDescription: "One of the most iconic Arctic experiences! Cross the Arctic Circle and receive an official certificate commemorating your journey to 66°33' North. This scenic flight offers stunning views of the transition zone between subarctic and Arctic ecosystems."
    },
    {
      id: 3,
      name: "Remote Support / Logistics",
      duration: "Custom Duration • Expedition Support",
      description: "Professional aerial support for remote properties, mining operations, and wilderness access.",
      image: "/images/winter_flying/winter_flying1.jpeg",
      highlights: ["Remote property access", "Professional logistics"],
      passengers: 3,
      icon: "🚁",
      fullDescription: "Professional aerial support for remote properties, mining operations, and wilderness expeditions. Sven specializes in custom logistics coordination, landing site assessment, and full expedition planning. Full logistics and landing coordination for your unique needs."
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
      fullDescription: "Witness the majesty of Denali (Mount McKinley), North America's tallest peak at 20,310 feet. Our flight provides panoramic views of the Alaska Range and surrounding glaciers. Clear days offer breathtaking photo opportunities."
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
      fullDescription: "Experience the scenic White Mountains and access remote natural hotsprings. This tour combines stunning mountain views with the unique opportunity to relax in hot springs surrounded by pristine Arctic wilderness."
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
      fullDescription: "Every adventure is unique. Whether you want to fly in for fishing, hunting, photography, scientific research, or pure exploration, Sven will customize your flight to match your exact needs and timeline."
    },
  ];

  return (
    <main>
      <section className="tours" style={{ paddingTop: "200px" }}>
        <h2 className="section-title">2026 Tour Experiences</h2>
        <p className="section-subtitle">
          From scenic flightseeing to remote park expeditions, we offer unmatched access to Alaska's most pristine destinations
        </p>

        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} id={`tour-${tour.id}`} className="tour-card">
              <div
                className="tour-image"
                style={{ backgroundImage: `url('${tour.image}')` }}
              />
              <div className="tour-info">
                <div>
                  <h3>{tour.name}</h3>
                  <div className="tour-meta">
                    <span className="passengers-badge">
                      <strong>{tour.passengers}</strong> passengers
                    </span>
                    <span className="duration-badge">{tour.duration}</span>
                  </div>
                  <p className="tour-description">{tour.fullDescription}</p>
                  <ul className="tour-highlights">
                    {tour.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <a href="/inquiry" className="info-button">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
