import "./Projects.css";
import Button from "./Button";


function Projects({ projects }) {
  return (
    <section className="Projects">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="projects-header">Projects</h2>
        <Button text="CONTACT ME" />
      </div>

      <div className="row">
        {projects.map((project, index) => {
          return (
            <div className="project-card col col-12 col-md-6" key={index}>
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="project-title my-3">{project.title}</h5>
                <p className="project-stack my-2">
                  {project.stack.map((tech) => {
                    return <span className="me-1"> {tech} </span>;
                  })}
                </p>
                <div className="d-flex w-75 justify-content-between project-buttons">
                  <Button text="VIEW PROJECT" url={project.liveUrl} />
                  <Button text="VIEW CODE" url={project.githubUrl} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
