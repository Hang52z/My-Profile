// src/pages/Projects.jsx
import React from 'react';
// 导入你项目的截图
import asxImg from '../assets/projects_ss/asx_analyzer.png';
import deliveryImg from '../assets/projects_ss/delivery.png';
// import foodImg from '../assets/projects/food-screenshot.png';

const projects = [
  {
    title: 'ASX Analyzer',
    period: 'May 2025 – Jul 2025',
    image: asxImg,
    link: 'https://asx-analysis-5l51.vercel.app/',
  },
  {
    title: 'Food Delivery App',
    period: 'Jul 2024 – Aug 2024',
    image: deliveryImg,
    link: 'https://food-delivery-chi-hazel.vercel.app/',
  },
  // {
  //   title: 'Food Ordering App',
  //   period: 'Nov 2024 – Feb 2025',
  //   image: foodImg,
  //   link: 'https://food-delivery-chi-hazel.vercel.app',
  // },
];

const Projects = () => (
  <div className="container mx-auto px-6 py-16" id="projects">
    <h2 className="text-4xl font-semibold mb-8">Projects</h2>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      {projects.map(({ title, period, image, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-64 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* 这里用渐变遮罩，底部深色，上面渐透明 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-2xl font-bold">{title}</h3>
            <p className="text-gray-200">{period}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Projects;
