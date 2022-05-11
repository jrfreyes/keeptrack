import { projectAPI } from "../projectAPI";

import {
    LOAD_PROJECT_FAILURE,
    LOAD_PROJECT_REQUEST,
    LOAD_PROJECT_SUCCESS,
    SAVE_PROJECT_FAILURE,
    SAVE_PROJECT_REQUEST,
    SAVE_PROJECT_SUCCESS,
} from './projectTypes'

export function loadProjects(page) {
    return (dispatch) => {
        dispatch({ type: LOAD_PROJECT_REQUEST });
        return projectAPI
            .get(page)
            .then((data) => {
                dispatch({
                    type: LOAD_PROJECT_SUCCESS,
                    payload: {projects: data, page},
                });
            })
            .catch((error) => {
                dispatch({ type: LOAD_PROJECT_FAILURE, payload: error})
            })
    }
}

export function saveProjects(project) {
    return (dispatch) => {
        dispatch({ type: SAVE_PROJECT_REQUEST });
        return projectAPI
            .put(project)
            .then((data) => {
                dispatch({
                    type: SAVE_PROJECT_SUCCESS,
                    payload: data,
                });
            })
            .catch((error) => {
                dispatch({ type: SAVE_PROJECT_FAILURE, paySAVE: error})
            })
    }
}