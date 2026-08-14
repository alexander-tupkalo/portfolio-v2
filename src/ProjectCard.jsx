import './ProjectCard.css';

function ProjectCard({ project, index }) {
  const projectNumber = String(project.id).padStart(2, '0');
  
  const layoutClass = index % 2 === 0 ? 'layout-left' : 'layout-right';

  return (
    <a 
      href={project.url} 
      className={`project-row ${layoutClass}`}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="row-content">
        <span className="row-number">{projectNumber}</span>
        <h3 className="row-title">{project.title}</h3>
        <span className="row-focus">{project.focus}</span>
        <p className="row-description">{project.description}</p>
        <div className="row-cta">
          <span className="row-link-text">VIEW PROJECT</span>
          <span className="row-arrow">→</span>
        </div>
      </div>

      <div className="row-image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
    </a>
  );
}

export default ProjectCard;