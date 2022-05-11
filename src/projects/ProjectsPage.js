import { useEffect, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { projectAPI } from "./projectAPI";
import { Project } from "./Project"
import ProjectsList from "./ProjectsList";
import ProjectListSkeleton from "./ProjectListSkeleton";
import { useProjects } from "./projectHooks";
import ErrorCard from "./ErrorCard";

export default function ProjectsPage() {
    const {
        projects,
        loading,
        error,
        setCurrentPage,
        saveProject,
        saving,
        savingError,
    } = useProjects();


    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1)
    }

    return (
        <>
            <h1>Projects</h1>
            {saving && <span className="toast">Saving...</span>}
            
            <ErrorCard message={error} />
            <ErrorCard message={savingError} />
            

            {loading && <ProjectListSkeleton />}
            <ProjectsList
                projects={projects}
                onSave={saveProject}
            />
            {!loading && !error && (
                <div className="row">
                    <div className="col-sm-12">
                        <div className="button-group fluid">
                            <button className="button default" onClick={handleMoreClick}>
                                More...
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}