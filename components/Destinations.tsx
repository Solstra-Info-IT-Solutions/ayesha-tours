const destinations = [
  { name: "Paris", country: "France", image: "/images/paris.jpg" },
  { name: "Dubai", country: "UAE", image: "/images/dubai.jpg" },
  { name: "Bali", country: "Indonesia", image: "/images/bali.jpg" },
  { name: "London", country: "United Kingdom", image: "/images/london.jpg" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-[#f9f7f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#3f1152] uppercase tracking-[3px] text-sm">Discover</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
            Popular Destinations
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore some of the world's most beautiful destinations with carefully planned travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.name} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="h-72 overflow-hidden">
                <img src={destination.image} alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-serif font-bold text-[#3f1152]">{destination.name}</h3>
                <p className="text-gray-500 mt-1">{destination.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
