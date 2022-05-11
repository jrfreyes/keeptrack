import { useEffect, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { projectAPI } from "./projectAPI";
import { Project } from "./Project"
import ProjectsList from "./ProjectList";
import ProjectListSkeleton from "./ProjectListSkeleton";
import { useProjects } from "./projectHooks";
import ErrorCard from "./ErrorCard";

export default function ProjectsPage() {
    const {
        data,
        isLoading,
        error,
        isError,
        isFetching,
        page,
        setPage,
        isPreviousData,
    } = useProjects();

    return (
        <>
            <h1>Projects</h1>
            {data ? (
                <>
                    {isFetching && (
                        <>
                            <ProjectListSkeleton />
                            <span className="toast">Refreshing...</span>
                        </>
                    )}
                    <ProjectsList
                        projects={data}
                    />
                    <div className="row">
                        <div className="col-sm-4">Current page: {page + 1}</div>
                        <div className="col-sm-4">
                            <div className="button-group right">
                                <button
                                    className="button "
                                    onClick={() => setPage((oldPage) => oldPage - 1)}
                                    disabled={page === 0}
                                >
                                    Previous
                                </button>
                                <button
                                    className="button"
                                    onClick={() => {
                                        if (!isPreviousData) {
                                            setPage((oldPage) => oldPage + 1);
                                        }
                                    }}
                                    disabled={data.length != 10}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : isLoading ? (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            ) : (
                <ErrorCard isError={isError} error={error} />
            )
            }
        </>
    )
}