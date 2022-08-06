import axios from 'axios';

const GITHUB_USERNAME = 'diegods-ferreira';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10_000,
  headers: {
    Accept: 'application/vnd.github+json'
  }
});

export const getRepoReadme = async (repoName: string) => {
  const response = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repoName}/readme`);
  return response.data;
};

export const getRepoReadmeHtml = async (repoName: string) => {
  const repoReadme = await getRepoReadme(repoName);

  console.log({ repoReadme });

  if (!repoReadme?.content) {
    return null;
  }

  const response = await githubApi.post('/markdown', { text: atob(repoReadme.content) });

  return response.data;
};
