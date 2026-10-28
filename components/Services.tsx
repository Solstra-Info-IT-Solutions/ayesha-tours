const services = [
  { icon: "✈", title: "Flight Booking", description: "Book domestic and international flights at competitive prices." },
  { icon: "🏨", title: "Hotel Booking", description: "Find comfortable hotels and resorts for your perfect stay." },
  { icon: "🌍", title: "Tour Packages", description: "Customized tour packages designed according to your needs." },
  { icon: "🚗", title: "Transportation", description: "Reliable airport transfers and local transportation services." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#3f1152] uppercase tracking-[3px] text-sm">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-8 border border-gray-200 rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold text-[#3f1152]">{service.title}</h3>
              <p className="text-gray-600 mt-4 leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
