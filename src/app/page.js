// App.jsx
import Hero from './components/Hero';
import HowItWorks from './components/HowItworks';
import WhyChooseUs from './components/Whychooseus';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <main className="font-sans text-gray-800">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  );
}