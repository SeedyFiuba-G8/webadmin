import apiProvider from './utilities/provider';

export async function getAllProjects(config) {
    try {
        const project = await apiProvider.get('projects', config);
        return project.projects;
    } catch (error) {
        return [];
    }
}

export async function getProject(id) {
    try {
        const project = await apiProvider.get(`projects/${id}`);
        return project;
    } catch (error) {
        return [];
    }
}

export async function blockProject(id) {
    try {
        const response = await apiProvider.post(`projects/${id}/block`);
        return response;
    } catch (error) {
        return [];
    }
}
export async function unBlockProject(id) {
    try {
        const response = await apiProvider.del(`projects/${id}/block`);
        return response;
    } catch (error) {
        return [];
    }
}
