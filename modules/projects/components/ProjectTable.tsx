'use client';

import { Projects } from '@prisma/client';
import React, { useState } from 'react';

import Button from '@/common/components/elements/Button';
import DeleteModals from '@/common/components/elements/DeleteModals';
import EditModal from '@/common/components/elements/EditModals';

const ProjectsTable = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<number | null>(null);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false); // State for Edit Modal
  const [editProjectId, setEditProjectId] = useState<number | null>(null); // State for the project being edited

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

  const handleEdit = (projectId: number) => {
    setEditProjectId(projectId);
    setEditModalOpen(true);
  };

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
              <td className="p-2">{project.id}</td>
              <td className="p-2 truncate">{project.title}</td>
              <td className="p-2 truncate">{project.slug}</td>
              <td className="p-2">{project.is_show ? 'True' : 'False'}</td>
              <td className="p-2">{project.is_featured ? 'True' : 'False'}</td>
              <td className="p-2 flex justify-center">
                <Button
                  onClick={() => handleEdit(project.id)} // Call handleEdit function
                  className="text-sky-500 !bg-transparent hover:underline"
                >
                  Edit
                </Button>
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
      <EditModal isOpen={editModalOpen} onCancel={() => setEditModalOpen(false)} projectId={editProjectId || 0} />
    </div>
  );
};

export default ProjectsTable;
