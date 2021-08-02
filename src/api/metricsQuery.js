import apiProvider from './utilities/provider';
import metricsApiProvider from './utilities/metricsProvider';

export async function getBasicUsersMetric() {
    try {
        const response = await apiProvider.get('metrics/users');
        return response;
    } catch (error) {
        return [];
    }
}

export async function getBasicProjectsMetric() {
    try {
        const response = await apiProvider.get('metrics/projects');
        return response;
    } catch (error) {
        return [];
    }
}

export async function getEventsUsersMetric(config) {
    try {
        const response = await metricsApiProvider.get(
            'metrics/events/users',
            config
        );
        return response;
    } catch (error) {
        return [];
    }
}

export async function getEventsProjectsMetric(config) {
    try {
        const response = await metricsApiProvider.get(
            'metrics/events/projects',
            config
        );
        return response;
    } catch (error) {
        return error.response.data;
    }
}
