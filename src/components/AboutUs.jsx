import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Moon, Sun } from "react-feather";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  const benefits = [
    { title: "Fitness Tracking", desc: "Track workouts, calories and progress.", icon: "💪" },
    { title: "Diet & Nutrition", desc: "Personalized diet plans and logging.", icon: "🥗" },
    { title: "Mental Wellness", desc: "Mindfulness tools and resources.", icon: "🧘" },
    { title: "Sleep Analysis", desc: "Improve rest with helpful insights.", icon: "😴" },
    { title: "Medical Records", desc: "Secure cloud health records.", icon: "📑" },
    { title: "Consultations", desc: "Book appointments with doctors.", icon: "👩‍⚕️" }
  ];

  const testimonials = [
    { name: "Sophia", feedback: "The insights are spot on!", rating: 5 },
    { name: "Aarav", feedback: "Nutrition tracking is simple and effective.", rating: 4 },
    { name: "Emily", feedback: "Better sleep after using the tips.", rating: 5 }
  ];

  const experts = [
    { name: "Dr. Meera Kapoor", field: "Nutritionist", insight: "Balanced nutrition builds long‑term wellness." },
    { name: "Dr. James Smith", field: "Sleep Specialist", insight: "Quality sleep improves focus and mood." },
    { name: "Dr. Aisha Khan", field: "Mental Health Expert", insight: "Mindfulness is key to resilience." }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-between">
      <header className="p-6 flex justify-between items-center bg-white dark:bg-gray-800 shadow">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Home className="w-6 h-6" /> <span>HealthMate</span>
        </Link>
        <button
          onClick={() => setIsDarkMode(prev => !prev)}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-2 rounded-lg shadow-md transition-colors"
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          <span className="sr-only">Toggle dark mode</span>
        </button>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-10 text-center">About Us</h1>

        <section className="mb-16">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-600 dark:via-purple-700 dark:to-indigo-800 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
              At <span className="font-semibold text-pink-600 dark:text-pink-300">HealthMate</span>, we empower individuals to
              take charge of their health with cutting‑edge tools, personalized insights, and comprehensive support.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700 dark:text-gray-200">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((user, index) => (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                  {user.name[0]}
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4 italic">“{user.feedback}”</p>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: user.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <h4 className="font-semibold text-lg">{user.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Expert Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
                  {expert.name.split(" ")[1][0]}
                </div>
                <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
                <p className="text-sm text-indigo-500 dark:text-indigo-300 mb-3">{expert.field}</p>
                <p className="text-gray-700 dark:text-gray-200 italic">“{expert.insight}”</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-500">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-500">Press</a></li>
              <li><a href="#" className="hover:text-indigo-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-500">Community</a></li>
              <li><a href="#" className="hover:text-indigo-500">Events</a></li>
              <li><a href="#" className="hover:text-indigo-500">Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-500">Disclaimer</a></li>
              <li><a href="#" className="hover:text-indigo-500">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all"><FaLinkedin /></a>
              <a href="https://twitter.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all"><FaTwitter /></a>
              <a href="https://instagram.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all"><FaInstagram /></a>
              <a href="https://facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} HealthMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}


