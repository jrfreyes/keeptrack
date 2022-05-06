import { Project } from "./Project";
import PropTypes from "prop-types";

export default function ProjectForm({project}) {
    return (
        <form className="input-group vertical">
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="enter name" defaultValue={project.name} />
            <label htmlFor="description">Project Description</label>

            <textarea name="description" placeholder="enter description" defaultValue={project.description} />
            <label htmlFor="budget">Project Budget</label>

            <input type="number" name="budget" placeholder="enter budget" defaultValue={project.budget} />
            <label htmlFor="isActive">Active?</label>
            <input type="checkbox" name="isActive" defaultChecked={project.isActive} />

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span></span>
                <button type="button" className="bordered medium">cancel</button>
            </div>
        </form>
    );
}

ProjectForm.propTypes = {
    project: PropTypes.instanceOf(Project)
}
