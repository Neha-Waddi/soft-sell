"use client"
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl text-center font-bold mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <input className="w-full p-3 border rounded" name="name" placeholder="Name" required onChange={handleChange} />
        <input className="w-full p-3 border rounded" name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input className="w-full p-3 border rounded" name="company" placeholder="Company" required onChange={handleChange} />
        <select className="w-full p-3 border rounded" name="type" required onChange={handleChange}>
          <option value="">Select License Type</option>
          <option value="OS">Operating System</option>
          <option value="App">Application Software</option>
          <option value="Other">Other</option>
        </select>
        <textarea className="w-full p-3 border rounded" name="message" rows="4" placeholder="Message" required onChange={handleChange}></textarea>
        <button className="bg-cyan-600 text-white px-6 py-3 rounded hover:bg-cyan-700">Submit</button>
      </form>
    </section>
  );
}