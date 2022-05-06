import { MOCK_PROJECTS } from "./MockProjects";
import ProjectsList from "./ProjectsList";

export default function ProjectsPage() {
    const saveProject = (project) => {
        console.log('Saving Project: ', project)
    }
    return (
    <>
        <h1>Projects</h1>
        <ProjectsList 
            projects={MOCK_PROJECTS}
            onSave={saveProject} 
        />
    </>
    )
}