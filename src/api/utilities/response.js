export async function handleResponse(response) {
  if (response.data) {
    return response.data;
  }
  return response;
}

export async function handleError(error) {
  throw error;
}
