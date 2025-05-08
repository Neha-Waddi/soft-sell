export default function WhyChooseUs() {
    const reasons = [
      { icon: '⚡', title: 'Fast Payouts' },
      { icon: '✅', title: 'Trusted by 500+ Clients' },
      { icon: '🔒', title: 'Secure Transactions' },
      { icon: '📈', title: 'Transparent Valuation' },
    ];
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="p-6 shadow-md rounded-lg">
              <div className="text-4xl mb-3">{reason.icon}</div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }