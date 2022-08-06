import axios from 'axios';
import uft8 from 'utf8';

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

  return {
    ...response.data,
    content: response.data?.content ? uft8.decode(atob(response.data.content)) : ''
  };
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
