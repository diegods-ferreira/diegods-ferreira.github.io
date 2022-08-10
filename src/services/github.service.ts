import axios from 'axios';
import uft8 from 'utf8';

import { GithubRepo } from '../models/github-repo.model';
import { GithubRepoReadme } from '../models/github-repo-readme.model';

import { GITHUB_USERNAME } from '../constants/projects.constant';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10_000,
  headers: {
    Accept: 'application/vnd.github+json'
  }
});

export const getRepo = async (repoName: string): Promise<GithubRepo> => {
  const response = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repoName}`);
  return response.data;
};

export const getRepoReadme = async (repoName: string): Promise<GithubRepoReadme> => {
  const response = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repoName}/readme`);

  return {
    ...response.data,
    content: response.data?.content ? uft8.decode(atob(response.data.content)) : ''
  };
};
