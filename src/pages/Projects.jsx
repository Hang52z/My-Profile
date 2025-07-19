// src/pages/Projects.jsx
import React from 'react';

const Projects = () => (
  <div className="container mx-auto px-6 py-16" id="projects">
    <h2 className="text-4xl font-semibold mb-6">Projects</h2>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Hospital Appointment System</h3>
        <p className="text-gray-700 mb-2"><strong>Jun 2023 – Nov 2023</strong></p>
        <p className="text-gray-700 mb-4">Built with ASP.NET MVC, C#, Entity Framework. Features patient registration, appointment scheduling, hospital locator, and email notifications.</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Diabetes Awareness App</h3>
        <p className="text-gray-700 mb-2"><strong>Mar 2024 – Jun 2024</strong></p>
        <p className="text-gray-700 mb-4">Monash Capstone project using React and Spring Boot with WebSocket real-time synchronization. Includes knowledge base, BMI calculator, and blood test tracking.</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Food Ordering App</h3>
        <p className="text-gray-700 mb-2"><strong>Nov 2024 – Feb 2025</strong></p>
        <p className="text-gray-700 mb-4">Deployed at <a href="https://food-delivery-chi-hazel.vercel.app" className="text-blue-500 hover:underline">food-delivery-chi-hazel.vercel.app</a>. Built with React, Vite, and Context API. Features user authentication, dynamic menu filtering, cart logic, and price calculation.</p>
      </div>
    </div>
  </div>
);

export default Projects;