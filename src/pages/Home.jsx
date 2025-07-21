// src/pages/Home.jsx
import React from 'react';
import bgImage from '../assets/home/Hang.jpg';

const Home = () => (
  <div
    id="home"
    className="relative flex items-center justify-center h-[40rem] bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* 遮罩层 */}
    <div className="absolute inset-0 bg-black/40" />

    {/* 内容层 */}
    <div className="relative z-10 max-w-2xl text-left px-4">
      <h1 className="text-5xl font-bold text-white mb-4">Hi, I’m Hang Zhao</h1>
      <p className="text-xl text-gray-200">
        Results-oriented and innovative Software Engineer with 1+ years of experience
        specializing in both front-end and back-end web application development.
        Proficient in JavaScript (React), Spring Boot, Kafka, RESTful API, and GraphQL.
        Extensive experience in CI/CD, DevOps, and Cloud. Demonstrated expertise in
        working within an agile development environment and delivering projects on time.
      </p>
    </div>
  </div>
);

export default Home;
