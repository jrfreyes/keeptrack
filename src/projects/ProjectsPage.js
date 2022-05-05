import { MOCK_PROJECTS } from "./MockProjects";
import ProjectsList from "./ProjectsList";

export default function ProjectsPage() {
    return (
    <>
        <h1>Projects</h1>
        <ProjectsList projects={MOCK_PROJECTS} />
    </>
    )
}