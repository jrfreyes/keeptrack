import { projectAPI } from "../projectAPI";

import {
    LOAD_PROJECTS_FAILURE,
    LOAD_PROJECTS_REQUEST,
    LOAD_PROJECTS_SUCCESS,
    SAVE_PROJECTS_FAILURE,
    SAVE_PROJECTS_REQUEST,
    SAVE_PROJECTS_SUCCESS,
} from './projectTypes'

export function loadProjects(page) {
    return (dispatch) => {
        dispatch({ type: LOAD_PROJECTS_REQUEST });
        return projectAPI
            .get(page)
            .then((data) => {
                dispatch({
                    type: LOAD_PROJECTS_SUCCESS,
                    payload: {projects: data, page},
                });
            })
            .catch((error) => {
                dispatch({ type: LOAD_PROJECTS_FAILURE, payload: error})
            })
    }
}

export function saveProject(project) {
    return (dispatch) => {
        dispatch({ type: SAVE_PROJECTS_REQUEST });
        return projectAPI
            .put(project)
            .then((data) => {
                dispatch({
                    type: SAVE_PROJECTS_SUCCESS,
                    payload: data,
                });
            })
            .catch((error) => {
                dispatch({ type: SAVE_PROJECTS_FAILURE, paySAVE: error})
            })
    }
}