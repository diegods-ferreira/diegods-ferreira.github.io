import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/home/home.page';
import { ProjectsListPage } from '../pages/projects-list.page';
import { ProjectDetailsPage } from '../pages/project-details.page';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsListPage />} />
          <Route path="projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
