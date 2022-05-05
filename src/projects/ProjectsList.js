import PropTypes from 'prop-types'
import { Project } from './Project';
import ProjectCard from './ProjectCard';

export default function ProjectsList({ projects }) {
    const items = projects.map(project => (   
        <div key={project.id} class="cols-sm">
            <ProjectCard project={project}/>
        </div>
    ))
    
    return <div className='row'>{items}</div>;
}

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

