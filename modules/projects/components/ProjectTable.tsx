'use client';

import { PrismaClient, Projects } from '@prisma/client';
import React, { useState } from 'react';

import Button from '@/common/components/elements/Button';
import DeleteModals from '@/common/components/elements/DeleteModals';

const prisma = new PrismaClient();

const ProjectsTable = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<number | null>(null);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/crud', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (projectId: number) => {
    try {
      await fetch(`/api/crud`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ projectId })
      });

      alert('Project deleted successfully.');
      await fetchProjects(); // Refresh projects list after deletion
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setDeleteConfirmationId(null);
    }
  };

  return (
    <div className="w-full py-5">
      <h2 className="text-2xl font-bold text-center">Project Lists</h2>
      <table className="w-full mt-4 border-collapse">
        <thead className="dark:bg-neutral-800 bg-neutral-400">
          <tr>
            <th className="p-2">No.</th>
            <th className="p-2">Title</th>
            <th className="p-2">Slug</th>
            <th className="p-2">Show</th>
            <th className="p-2">Featured</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project: Projects) => (
            <tr key={project.id} className="border-t dark:border-neutral-700 border-neutral-200 text-center">
              <td className="p-2">{project.id - 5}</td>
              <td className="p-2 truncate">{project.title}</td>
              <td className="p-2 truncate">{project.slug}</td>
              <td className="p-2">{project.is_show ? 'True' : 'False'}</td>
              <td className="p-2">{project.is_featured ? 'True' : 'False'}</td>
              <td className="p-2 flex justify-center">
                <Button
                  onClick={() => setDeleteConfirmationId(project.id)}
                  className="text-red-500 !bg-transparent hover:underline"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModals
        isOpen={!!deleteConfirmationId}
        onCancel={() => setDeleteConfirmationId(null)}
        onConfirm={() => {
          if (deleteConfirmationId) {
            handleDelete(deleteConfirmationId);
          }
        }}
      />
    </div>
  );
};

export default ProjectsTable;
