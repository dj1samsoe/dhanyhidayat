'use client';

import { Projects } from '@prisma/client';
import React, { useEffect, useState } from 'react';

import Button from '@/common/components/elements/Button';
import DeleteModals from '@/common/components/elements/DeleteModals';
import EditModal from '@/common/components/elements/EditModals';

import { Project } from './ProjectsForm';

interface ProjectsTableProps {
  projects: Project[];
  onRefresh: () => void; // Fungsi untuk me-refresh data setelah CRUD
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects, onRefresh }) => {
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<number | null>(null);
  const [editProjectId, setEditProjectId] = useState<number | null>(null);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const handleEdit = (projectId: number) => {
    setEditProjectId(projectId);
    setEditModalOpen(true);
  };

  const handleDelete = async () => {
    if (!deleteConfirmationId) return;

    try {
      await fetch(`/api/crud`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: deleteConfirmationId })
      });

      alert('Project deleted successfully.');
      onRefresh(); // Refresh daftar proyek setelah delete
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
          {projects.map((project, index) => (
            <tr key={project.id} className="border-t dark:border-neutral-700 border-neutral-200 text-center">
              <td className="p-2">{index + 1}</td>
              <td className="p-2 truncate">{project.title}</td>
              <td className="p-2 truncate">{project.slug}</td>
              <td className="p-2">{project.is_show ? 'True' : 'False'}</td>
              <td className="p-2">{project.is_featured ? 'True' : 'False'}</td>
              <td className="p-2 flex justify-center space-x-2">
                <Button onClick={() => handleEdit(project.id)} className="text-sky-500 !bg-transparent hover:underline">
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

      {/* Modal Delete */}
      <DeleteModals
        isOpen={!!deleteConfirmationId}
        onCancel={() => setDeleteConfirmationId(null)}
        onConfirm={handleDelete}
      />

      {/* Modal Edit */}
      <EditModal
        isOpen={editModalOpen}
        onCancel={() => setEditModalOpen(false)}
        projectId={editProjectId || 0}
        onSuccess={onRefresh} // Refresh data setelah edit
      />
    </div>
  );
};

export default ProjectsTable;
