import PropTypes from 'prop-types';
import { Project } from './Project';

function formatDescription(description) {
    return description.substring(0, 60) + '...';
}

export default function ProjectCard({ project }) {
    const handleEditClick = (projectBeingEdited) => {
        console.log(projectBeingEdited);
    }
    return (
        <div class="card">
            <img src={project.imageUrl} alt={project.name} />
            <section class="section dark">
                <h5 class="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
                <button class="bordered" onClick={() => handleEditClick(project)}>
                    <span class="icon-edit " />
                    Edit
                </button>
            </section>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.instanceOf(Project).isRequired
};
