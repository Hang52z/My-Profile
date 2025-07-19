// src/pages/About.jsx
import React from 'react';

const About = () => (
  <div className="container mx-auto px-6 py-16" id="about">
    <h2 className="text-4xl font-semibold mb-6">About Me</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      I’m a motivated and detail-oriented Software Engineer who thrives on building responsive and scalable applications. I’ve designed and shipped multiple full-stack projects using React, Spring Boot, Kafka, and RESTful/GraphQL APIs, and continuously explore cloud-native and DevOps best practices to streamline delivery.
    </p>
    <h3 className="text-2xl font-semibold mb-2">Education</h3>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li><strong>Master of Information Technology</strong>, University of Melbourne (Jul 2022 – Jul 2024)</li>
      <li><strong>Bachelor of Banking and Finance</strong>, Monash University (Oct 2019 – Jun 2022)</li>
    </ul>
    <h3 className="text-2xl font-semibold mb-2">Strengths</h3>
    <p className="text-gray-700 leading-relaxed">
      In agile collaboration, I’m accustomed to using Git flow and React Context for state management, closely coordinating with designers and backend teammates; passionate about UI/UX and performance optimization; continuously learning new technologies like React Native and cloud deployments.
    </p>
  </div>
);

export default About;