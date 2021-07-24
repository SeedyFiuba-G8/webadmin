import apiProvider from './utilities/provider';

export async function getAllProjects(config) {
    try {
        const project = await apiProvider.get('projects', config);
        return project.projects;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get projects.");
        return [];
    }
}

export async function getProject(id) {
    try {
        const project = await apiProvider.get(`projects/${id}`);
        return project;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get project.");
        return [];
    }
}
