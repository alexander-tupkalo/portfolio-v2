import { projects } from '../data/projects';
import ProjectCard from '../ProjectCard';
import './WorkSection.css';

function WorkSection() {
  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <span className="work-label">SELECTED WORK</span>
        <h2 className="work-title">Selected projects</h2>
        <p className="work-description">
          A collection of interfaces, products and experiments built across frontend development, product thinking and interactive design.
        </p>
      </div>

      {}
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;