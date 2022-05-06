import PropTypes from 'prop-types'
import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

export default function ProjectsList({ projects }) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({})
    const handleEdit = (project) => {
        setProjectBeingEdited(project)
    }

    const items = projects.map(project => (   
        <div key={project.id} className="cols-sm">
            {projectBeingEdited === project ? (
                <ProjectForm project={project} />
            ) : (
                <ProjectCard 
                project={project}
                onEdit={handleEdit} 
                />
            )}
        </div>
    ))
    
    return <div className='row'>{items}</div>;
}

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

