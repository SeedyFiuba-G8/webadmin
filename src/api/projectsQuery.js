import apiProvider from './utilities/provider';

export async function getAllProjects() {
    try {
        const project = await apiProvider.get('projects');
        return project.projects;
    } catch (error) {
        console.error(error);
        console.log("Couldn't get projects.");
        return [];
    }
}

export function getProject(id) {
    try {
        return apiProvider.get('project', { params: id });
    } catch (error) {
        return {};
    }
}
