import apiProvider from './utilities/fakeProvider';

export function getAllProjects() {
  return apiProvider.get('project').projects;
}
