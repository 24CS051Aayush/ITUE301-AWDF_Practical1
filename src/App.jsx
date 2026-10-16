import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [themeColor, setThemeColor] = useState('#1d4ed8');

  // Student and portfolio data passed via props
  const studentInfo = {
    name: 'Aayush Malhotra',
    id: '24CS051',
    department: 'Department of Computer Science and Engineering',
    institution: 'Chandubhai S Patel Institute of Technology (CSPIT), CHARUSAT',
    academicYear: '2025-26',
    email: '24cs051@charusat.edu.in',
    githubUrl: 'https://github.com/24CS051Aayush',
    bio: 'Third-year B.Tech Computer Science and Engineering student at CSPIT, Charusat. Passionate about modern web architecture, component-driven design, and building scalable full-stack web applications. Currently mastering React, Vite, Node.js, and advanced development frameworks through hands-on coursework.',
  };

  // Skills array passed to Skills component via props
  const skills = [
    'React.js',
    'JavaScript (ES6+)',
    'JSX & Component Architecture',
    'HTML5 & Modern CSS3',
    'Vite Build Tool',
    'Node.js & npm',
    'Git & GitHub Workflow',
    'Responsive Web Design',
  ];

  // Projects list passed to Projects component via props
  const projects = [
    {
      title: 'Student Portfolio Platform',
      description: 'Component-based static portfolio built using Vite and React, demonstrating modular architecture and dynamic prop passing.',
      tech: ['React', 'Vite', 'CSS3', 'JSX'],
      status: 'Completed (Prac 1)',
    },
    {
      title: 'Interactive Task & LifeCycle Manager',
      description: 'Stateful React application demonstrating component lifecycles, state management, and real-time UI synchronization.',
      tech: ['React', 'State Hooks', 'Lifecycle Methods'],
      status: 'In Progress (Prac 2-3)',
    },
    {
      title: 'Full-Stack Developer Portal',
      description: 'Integrated multi-tier application with RESTful APIs, form validation, database connectivity, and secure authentication.',
      tech: ['MERN Stack', 'Express', 'MongoDB', 'REST API'],
      status: 'Planned (Full Project)',
    },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="portfolio-app">
      {/* Navigation Component */}
      <NavBar activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="portfolio-container">
        {/* Theme Picker elevation (demonstrating prop changes live) */}
        <div className="theme-bar">
          <span className="theme-label">Select Header Theme:</span>
          <button
            type="button"
            className={`color-dot blue ${themeColor === '#1d4ed8' ? 'selected' : ''}`}
            onClick={() => setThemeColor('#1d4ed8')}
            title="Royal Blue"
          />
          <button
            type="button"
            className={`color-dot teal ${themeColor === '#0f766e' ? 'selected' : ''}`}
            onClick={() => setThemeColor('#0f766e')}
            title="Teal"
          />
          <button
            type="button"
            className={`color-dot slate ${themeColor === '#334155' ? 'selected' : ''}`}
            onClick={() => setThemeColor('#334155')}
            title="Slate"
          />
        </div>

        {/* Header Component receiving name and themeColor props */}
        <Header
          title="Student Developer Portfolio"
          name={`${studentInfo.name} (${studentInfo.id})`}
          themeColor={themeColor}
        />

        {/* About Component */}
        <About
          bio={studentInfo.bio}
          department={studentInfo.department}
          institution={studentInfo.institution}
        />

        {/* Skills Component receiving skillList prop */}
        <Skills skillList={skills} />

        {/* Projects Component receiving projectList prop */}
        <Projects projectList={projects} />
      </main>

      {/* Footer Component receiving academic metadata props */}
      <Footer
        studentId={studentInfo.id}
        academicYear={studentInfo.academicYear}
        email={studentInfo.email}
        githubUrl={studentInfo.githubUrl}
      />
    </div>
  );
}

export default App;
