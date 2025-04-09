// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for contacting CineMate! We'll get back to you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-6">
//       <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-xl">
//         <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
//           Contact <span className="text-blue-600">CineMate</span>
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           Have questions, feedback, or suggestions? Drop a message below!
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Backend not connected)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* 🧾 Left Section: Info */}
        <div className="p-10 bg-gray-900 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Have a suggestion, feedback, or question about CineCraft? I&apos;m always open to connect!
            </p>

            <div className="space-y-4 text-sm">
              <p><span className="font-semibold">📍 Location:</span> Ghaziabad, Uttar Pradesh, India</p>
              <p><span className="font-semibold">📧 Email:</span> <a href="mailto:lovekumar714283@gmail.com" className="text-blue-300">lovekumar714283@gmail.com</a></p>
              <p><span className="font-semibold">📞 Phone:</span> <a href="tel:+919958029853" className="text-blue-300">+91 99580 29853</a></p>
              <p><span className="font-semibold">⏰ Working Hours:</span> Mon - Sat, 10AM - 6PM</p>
            </div>
          </div>

          {/* 🌐 Social Links */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-2">Connect with me:</h3>
            <div className="flex gap-4 text-xl">
              <a href="https://github.com/LoveKumar7142" target="_blank" className="hover:text-blue-400">🐱</a>
              <a href="https://www.linkedin.com/in/love-kumar-327299212/" target="_blank" className="hover:text-blue-400">💼</a>
              <a href="mailto:lovekumar714283@gmail.com" className="hover:text-blue-400">📧</a>
            </div>
          </div>
        </div>

        {/* 📬 Right Section: Form */}
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            🚀 Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
