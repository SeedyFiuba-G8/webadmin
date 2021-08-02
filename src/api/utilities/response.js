export async function handleResponse(response) {
    if (response.data) {
        return response.data;
    }
    return response;
}

export async function handleError(error) {
    if (error.response && error.response.status === 403) {
        //logout
    }
    throw error;
}
