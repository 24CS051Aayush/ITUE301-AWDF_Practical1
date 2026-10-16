import React from 'react';

function Projects({ projectList }) {
  return (
    <section id="projects" className="section-card">
      <h2 className="section-heading">Featured Projects</h2>
      <p className="section-subtext">Connected modules developed as part of the Full Stack Development curriculum:</p>
      <div className="projects-grid">
        {projectList && projectList.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className={`status-tag status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.status}
              </span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
