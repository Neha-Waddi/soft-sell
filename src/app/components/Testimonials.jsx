export default function Testimonials() {
    const testimonials = [
      {
        name: 'Shiva',
        role: 'IT Manager',
        company: 'TechCorp',
        quote: 'SoftSell made it easy to offload unused licenses.',
      },
      {
        name: 'Rohtih',
        role: 'CFO',
        company: 'SoftWave',
        quote: 'Quick, trustworthy, and highly recommended!',
      },
    ];
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-xl w-80">
              <p className="italic mb-4">“{t.quote}”</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-600">{t.role}, {t.company}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  