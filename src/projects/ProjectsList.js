import PropTypes from 'prop-types'
import { Project } from './Project';

export default function ProjectsList({ projects }) {
    return (
        <div className='row'>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    );
}

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

function ProjectCard({project}) {
    return (
        <div class="cols-sm">
            <div class="card">
                <img src={project.imageUrl} alt={project.name} />
                <section class="section dark">
                <h5 class="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{project.description}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
                </section>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.instanceOf(Project).isRequired
}