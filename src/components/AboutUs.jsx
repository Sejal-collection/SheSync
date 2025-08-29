import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Moon, Sun } from "react-feather";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-between">
      {/* Glow + animations */}
      {/* Glow + animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(139, 92, 246, 0.4), 0 0 30px rgba(79, 70, 229, 0.3); }
          50% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.8), 0 0 30px rgba(139, 92, 246, 0.6), 0 0 40px rgba(79, 70, 229, 0.5); }
        }
        .glow-animate { animation: pulse-glow 2s infinite; }
        .hover-bounce:hover { transform: translateY(-4px); transition: transform 0.3s ease; }
        .fade-in { animation: fadeIn 1s ease-in-out; }
        .glow-animate { animation: pulse-glow 2s infinite; }
        .hover-bounce:hover { transform: translateY(-4px); transition: transform 0.3s ease; }
        .fade-in { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white dark:bg-gray-800 shadow">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Home className="w-6 h-6" /> <span>HealthMate</span>
        </Link>
        <button
          onClick={() => {
            setDarkMode((prevMode) => {
              const newMode = !prevMode;
              localStorage.setItem("darkMode", newMode);
              return newMode;
            });
          }}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-2 rounded-lg shadow-md hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 glow-animate"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          <span className="sr-only">Toggle dark mode</span>
        </button>
      </header>

      {/* Main */}
      {/* Main */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-center">About Us</h1>

        {/* Mission */}
        {/* Mission */}
        <section className="mb-16 fade-in">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-600 dark:via-purple-700 dark:to-indigo-800 text-center hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Our Mission
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              At <span className="font-semibold text-pink-600 dark:text-pink-300">HealthMate</span>, 
              our mission is to empower individuals to take charge of their health 
              with <span className="font-semibold">cutting-edge tools</span>, 
              <span className="font-semibold"> personalized insights</span>, and 
              <span className="font-semibold"> comprehensive support</span>. 
              We believe in building a healthier tomorrow, one step at a time.
            </p>
          </div>
        </section>


        {/* Key Benefits Section */}
        <section className="mb-20 fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center relative inline-block">
            Key Benefits
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Key Benefits Section */}
        <section className="mb-20 fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center relative inline-block">
            Key Benefits

        {/* ✨ Key Benefits */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-extrabold mb-10 text-center relative inline-block">
            ✨ Comprehensive Health Management

            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[

              { title: "Fitness Tracking", desc: "Monitor workouts, calories, and progress with smart insights.", icon: "💪" },
              { title: "Diet & Nutrition", desc: "Personalized diet plans with easy daily tracking.", icon: "🥗" },
              { title: "Mental Wellness", desc: "Mindfulness tools and stress relief resources.", icon: "🧘" },
              { title: "Sleep Analysis", desc: "Improve rest with AI-powered sleep patterns and tips.", icon: "😴" },
              { title: "Medical Records", desc: "Secure cloud storage for your health history.", icon: "📑" },
              { title: "Doctor Consultations", desc: "Instant online appointments with trusted experts.", icon: "👩‍⚕️" },
              { title: "Fitness Tracking", desc: "Monitor workouts, calories, and progress with smart insights.", icon: "💪" },
              { title: "Diet & Nutrition", desc: "Personalized diet plans with easy daily tracking.", icon: "🥗" },
              { title: "Mental Wellness", desc: "Mindfulness tools and stress relief resources.", icon: "🧘" },
              { title: "Sleep Analysis", desc: "Improve rest with AI-powered sleep patterns and tips.", icon: "😴" },
              { title: "Medical Records", desc: "Secure cloud storage for your health history.", icon: "📑" },
              { title: "Doctor Consultations", desc: "Instant online appointments with trusted experts.", icon: "👩‍⚕️" },
              { title: "Fitness Tracking", desc: "Monitor workouts, calories, and progress with smart insights.", icon: "💪" },
              { title: "Diet & Nutrition", desc: "Personalized diet plans with easy daily tracking.", icon: "🥗" },
              { title: "Mental Wellness", desc: "Mindfulness tools and stress relief resources.", icon: "🧘" },
              { title: "Sleep Analysis", desc: "Improve rest with AI-powered sleep patterns and tips.", icon: "😴" },
              { title: "Medical Records", desc: "Secure cloud storage for your health history.", icon: "📑" },
              { title: "Doctor Consultations", desc: "Instant online appointments with trusted experts.", icon: "👩‍⚕️" },

              { title: "Fitness Tracking", desc: "Monitor your workouts, calories, and progress effortlessly.", icon: "🏃‍♀️" },
              { title: "Diet & Nutrition", desc: "Get personalized diet plans and track your daily nutrition.", icon: "🥗" },
              { title: "Mental Wellness", desc: "Access mindfulness tools and resources for stress management.", icon: "🧘‍♂️" },
              { title: "Sleep Analysis", desc: "Improve your rest with detailed sleep tracking and tips.", icon: "😴" },
              { title: "Medical Records", desc: "Securely store and access your health records anywhere.", icon: "📂" },
              { title: "Doctor Consultations", desc: "Book online appointments and connect with healthcare providers.", icon: "👩‍⚕️" },

            ].map((item, index) => (
              <motion.div
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-8 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-center overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-2xl font-bold shadow-lg mb-6 glow-animate">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ Expert Insights Section */}
        <section className="mb-20 fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center relative inline-block">
            Expert Insights
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Dr. Aisha Khan", role: "Nutritionist", insight: "Balanced nutrition is not about restriction, but mindful choices every day.", avatar: "🥗" },
              { name: "Dr. Raj Malhotra", role: "Cardiologist", insight: "Consistent physical activity is the best gift you can give your heart.", avatar: "❤️" },
              { name: "Dr. Emily Chen", role: "Sleep Specialist", insight: "Quality sleep is the foundation for mental and physical well-being.", avatar: "😴" },
            ].map((expert, index) => (
              <div
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 relative"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-md glow-animate">
                  {expert.avatar}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{expert.name}</h3>
                <p className="text-sm text-indigo-500 dark:text-indigo-300 text-center mb-4">{expert.role}</p>
                <p className="text-gray-700 dark:text-gray-200 italic text-center">“{expert.insight}”</p>
                className="relative group bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-2xl font-bold shadow-lg mb-6 glow-animate">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 relative z-10">{item.desc}</p>
              </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur-2xl transition duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>

            ))}
          </div>
        </section>

        {/* ⭐ Expert Insights Section */}
        <section className="mb-20 fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center relative inline-block">
            Expert Insights
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Dr. Aisha Khan", role: "Nutritionist", insight: "Balanced nutrition is not about restriction, but mindful choices every day.", avatar: "🥗" },
              { name: "Dr. Raj Malhotra", role: "Cardiologist", insight: "Consistent physical activity is the best gift you can give your heart.", avatar: "❤️" },
              { name: "Dr. Emily Chen", role: "Sleep Specialist", insight: "Quality sleep is the foundation for mental and physical well-being.", avatar: "😴" },
            ].map((expert, index) => (
              <div
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 relative"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-md glow-animate">
                  {expert.avatar}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{expert.name}</h3>
                <p className="text-sm text-indigo-500 dark:text-indigo-300 text-center mb-4">{expert.role}</p>
                <p className="text-gray-700 dark:text-gray-200 italic text-center">“{expert.insight}”</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Users Say */}
        <section className="mb-16 fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sophia", feedback: "HealthMate completely changed how I track my fitness. The insights are spot on!", rating: 5 },
              { name: "Aarav", feedback: "I love the nutrition tracking feature. It's simple and effective!", rating: 4 },
              { name: "Emily", feedback: "The sleep analysis helped me improve my bedtime routine. Feeling more energetic now!", rating: 5 },
            ].map((user, index) => (
              <motion.div
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold glow-animate mb-4">
                  {user.name[0]}
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4 italic">“{user.feedback}”</p>
                <div className="flex justify-center mb-2">
                  {Array(user.rating).fill("⭐").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                  {Array(user.rating).fill("⭐").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <h4 className="font-semibold text-lg">{user.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🌟 Community Highlights */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-extrabold mb-10 text-center relative inline-block">
            🌟 Community Highlights
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "10k+ Active Members", desc: "A thriving community where members share tips, motivation, and daily success stories.", icon: "👥" },
              { title: "Global Challenges", desc: "Take part in exciting wellness & fitness challenges with people from around the world.", icon: "🌍" },
              { title: "Supportive Groups", desc: "Join safe, uplifting spaces where like-minded people support each other’s journeys.", icon: "💬" },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-8 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur-2xl transition duration-500"></div>
                <div className="relative text-center z-10">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{highlight.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 💡 Expert Insights */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-extrabold mb-10 text-center relative inline-block">
            💡 Expert Insights
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Meera Kapoor", field: "Nutritionist", insight: "Balanced nutrition is the foundation of long-term wellness." },
              { name: "Dr. James Smith", field: "Sleep Specialist", insight: "Quality sleep improves focus, mood, and overall health." },
              { name: "Dr. Aisha Khan", field: "Mental Health Expert", insight: "Mindfulness and stress management are key to resilience." },
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-8 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold glow-animate mb-4 shadow-lg">
                  {expert.name.split(" ")[1][0]}
                </div>
                <h3 className="text-xl font-semibold">{expert.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{expert.field}</p>
                <blockquote className="italic text-gray-700 dark:text-gray-200 relative">
                  <span className="text-3xl text-pink-500 absolute -top-4 left-4">“</span>
                  {expert.insight}
                  <span className="text-3xl text-pink-500 absolute -bottom-6 right-4">”</span>
                </blockquote>
              </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🌟 Community Highlights */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-extrabold mb-10 text-center relative inline-block">
            🌟 Community Highlights
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "10k+ Active Members", desc: "A thriving community where members share tips, motivation, and daily success stories.", icon: "👥" },
              { title: "Global Challenges", desc: "Take part in exciting wellness & fitness challenges with people from around the world.", icon: "🌍" },
              { title: "Supportive Groups", desc: "Join safe, uplifting spaces where like-minded people support each other’s journeys.", icon: "💬" },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-8 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur-2xl transition duration-500"></div>
                <div className="relative text-center z-10">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{highlight.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 💡 Expert Insights */}
        <section className="mb-16 fade-in">
          <h2 className="text-3xl font-extrabold mb-10 text-center relative inline-block">
            💡 Expert Insights
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Meera Kapoor", field: "Nutritionist", insight: "Balanced nutrition is the foundation of long-term wellness." },
              { name: "Dr. James Smith", field: "Sleep Specialist", insight: "Quality sleep improves focus, mood, and overall health." },
              { name: "Dr. Aisha Khan", field: "Mental Health Expert", insight: "Mindfulness and stress management are key to resilience." },
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-8 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold glow-animate mb-4 shadow-lg">
                  {expert.name.split(" ")[1][0]}
                </div>
                <h3 className="text-xl font-semibold">{expert.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{expert.field}</p>
                <blockquote className="italic text-gray-700 dark:text-gray-200 relative">
                  <span className="text-3xl text-pink-500 absolute -top-4 left-4">“</span>
                  {expert.insight}
                  <span className="text-3xl text-pink-500 absolute -bottom-6 right-4">”</span>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <a href="https://linkedin.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 glow-animate hover-bounce transition-all"><FaLinkedin /></a>
              <a href="https://twitter.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 glow-animate hover-bounce transition-all"><FaTwitter /></a>
              <a href="https://instagram.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 glow-animate hover-bounce transition-all"><FaInstagram /></a>
              <a href="https://facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 glow-animate hover-bounce transition-all"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} HealthMate. All rights reserved. <br />
          Empowering healthier lives every day.
        </div>
      </footer>
    </div>
  );
}
