import { Project } from "./Project";
import PropTypes from "prop-types";
import { useState } from "react";

export default function ProjectForm({
        project, 
        onSave, 
        onCancel
    }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const change = Object.fromEntries(
            Array.from(formData.entries(), (entry) => {
                console.log(entry, Number(entry[1]))
                return entry[0] === 'budget' ? (
                    [entry[0], Number(entry[1])]
                ) : entry
            })
        )
        let updatedProject = new Project({...project, ...change})
        onSave(updatedProject)
    }

    return (
        <form 
            className="input-group vertical"
            onSubmit={handleSubmit}
        >
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
                <button 
                    type="button" 
                    className="bordered medium"
                    onClick={onCancel}
                >
                    cancel
                </button>
            </div>
        </form>
    );
}

ProjectForm.propTypes = {
    project: PropTypes.instanceOf(Project),
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}
