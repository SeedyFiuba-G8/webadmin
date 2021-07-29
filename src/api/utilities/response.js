export async function handleResponse(response) {
    if (response.data) {
        console.log(response.data);
        return response.data;
    }
    return response;
}

export async function handleError(error) {
    console.log('Response error: ', error.message);
    if (error.response && error.response.status === 403){
        //logout
    }
    throw error;
}
