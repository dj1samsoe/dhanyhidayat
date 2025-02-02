'use client';

import { useEffect, useState } from 'react';

import Breakline from '@/common/components/elements/Breakline';

import ProjectsTable from './ProjectTable';
import ProjectForm from './ProjectsForm';

// Definisi tipe data proyek
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string;
  link_github?: string;
  stacks: string;
  is_show: boolean;
  is_featured: boolean;
}

const ProjectManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch data proyek dari API
  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/crud');
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data: Project[] = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Tambahkan project baru ke state tanpa fetch ulang seluruh daftar
  const handleProjectAdded = (newProject: Project) => {
    setProjects(prevProjects => [newProject, ...prevProjects]);
  };

  return (
    <div>
      <ProjectForm onSuccess={handleProjectAdded} />
      <Breakline />
      <ProjectsTable projects={projects} onRefresh={fetchProjects} />
    </div>
  );
};

export default ProjectManager;
