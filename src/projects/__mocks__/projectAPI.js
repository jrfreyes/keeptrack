import { MOCK_PROJECTS } from "../MockProjects";
export const projectAPI = {
    get(page = 1, limit = 20) {
        return Promise.resolve(MOCK_PROJECTS);
    },
};