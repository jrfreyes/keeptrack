import PropTypes from 'prop-types';
import { Project } from './Project';

function formatDescription(description) {
    return description.substring(0, 60) + '...';
}

export default function ProjectCard({ project, onEdit }) {
    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }
    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
                <button className="bordered" onClick={() => handleEditClick(project)}>
                    <span className="icon-edit " />
                    Edit
                </button>
            </section>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.instanceOf(Project).isRequired,
    onEdit: PropTypes.func.isRequired
};
