// src/components/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Integrate with EmailJS or backend)");
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-8">CONTACT ME </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded border dark:bg-gray-700 dark:text-white"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded border dark:bg-gray-700 dark:text-white"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded border dark:bg-gray-700 dark:text-white"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-sky-600 text-white p-3 rounded-xl hover:bg-green-400 text-2xl">
          Send Message
        </button>
      </form>
    </section>
  );
}
