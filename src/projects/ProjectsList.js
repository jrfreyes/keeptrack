import PropTypes from 'prop-types'
import { Project } from './Project';

export default function ProjectsList({ projects }) {
    return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
}

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}