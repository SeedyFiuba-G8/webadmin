export async function handleResponse(response) {
    if (response.data) {
        console.log(response.data);
        return response.data;
    }
    return response;
}

export async function handleError(error) {
    console.log(error.message);
    throw error;
}
