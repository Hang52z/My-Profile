// src/pages/Skills.jsx
import React from 'react';

const Skills = () => (
  <div className="container mx-auto px-6 py-16" id="skills">
    <h2 className="text-4xl font-semibold mb-6">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Front-End</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>React.js, JavaScript (ES6+), HTML5, CSS3</li>
          <li>Responsive Design</li>
          <li>TypeScript (Basic)</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Back-End</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Java, Spring Boot</li>
          <li>RESTful API, GraphQL</li>
          <li>.NET Core (Basic)</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Database</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>SQL Server</li>
          <li>Data Integration</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Tools & Platforms</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Git/GitHub, Vite</li>
          <li>AWS (Basic), Azure (Basic)</li>
          <li>CI/CD, React Testing Library</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-2">Practices</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Agile, API Documentation</li>
          <li>Testing & QA</li>
          <li>Accessibility & Security</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;