export default function HowItWorks() {
    const steps = [
      { icon: '📤', title: 'Upload License' },
      { icon: '📊', title: 'Get Valuation' },
      { icon: '💵', title: 'Get Paid' },
    ];
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {steps.map((step, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-xl w-60">
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }