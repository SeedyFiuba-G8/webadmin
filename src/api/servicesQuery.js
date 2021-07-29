import apiProvider from './utilities/provider';

export async function getServices(path) {
	return apiProvider.get(path).catch((err) => {
		console.error(err);
		console.log("Couldn't get services.");
		return;
	});
}
