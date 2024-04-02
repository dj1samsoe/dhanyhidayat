'use client';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
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

type EditModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  // onSave: (projectId: number, updatedData: any) => void; // Updated onSave function
  projectId: number;
};

const EditModal = ({ isOpen, onCancel, projectId }: EditModalProps) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`/api/crud?id=${projectId}`, {
          method: 'GET', // Menggunakan metode GET untuk mengambil data proyek
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }

        const projectData = await response.json();
        setProjectData(projectData);
        // Set default values for form inputs
        Object.entries(projectData).forEach(([key, value]) => {
          setValue(key as keyof FormData, value as string);
        });
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    if (isOpen && projectId) {
      fetchProjectData();
    }
  }, [isOpen, projectId, setValue]);

  const onSubmit: SubmitHandler<FormData> = async formData => {
    try {
      const response = await fetch('/api/crud', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Project updated successfully!');
        window.location.reload();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update project');
      }
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Failed to update project.');
    }
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ${isOpen ? '' : 'hidden'}`}
    >
      <div className="bg-white dark:bg-neutral-800 dark:text-white p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Edit Project</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex sm:flex-row flex-col gap-4 items-center">
            <input
              type="text"
              {...register('title', { required: true })}
              defaultValue={projectData?.title || ''}
              onChange={e => setValue('title', e.target.value)}
              placeholder="Title"
              required
              className="w-full py-2 px-4 rounded-md"
            />
            <input
              type="text"
              {...register('slug', { required: true })}
              defaultValue={projectData?.slug || ''}
              onChange={e => setValue('slug', e.target.value)}
              placeholder="Slug"
              required
              className="w-full py-2 px-4 rounded-md"
            />
          </div>
          <textarea
            {...register('description', { required: true })}
            defaultValue={projectData?.description || ''}
            onChange={e => setValue('description', e.target.value)}
            placeholder="Description"
            required
            rows={5}
            className="w-full py-2 px-4 rounded-md"
          />
          <input
            type="text"
            {...register('image', { required: true })}
            defaultValue={projectData?.image || ''}
            onChange={e => setValue('image', e.target.value)}
            placeholder="Image URL"
            required
            className="w-full py-2 px-4 rounded-md"
          />
          <input
            type="text"
            {...register('link_demo')}
            defaultValue={projectData?.link_demo || ''}
            onChange={e => setValue('link_demo', e.target.value)}
            placeholder="Demo Link"
            className="w-full py-2 px-4 rounded-md"
          />
          <input
            type="text"
            {...register('link_github')}
            defaultValue={projectData?.link_github || ''}
            onChange={e => setValue('link_github', e.target.value)}
            placeholder="GitHub Link"
            className="w-full py-2 px-4 rounded-md"
          />
          <input
            type="text"
            {...register('stacks', { required: true })}
            defaultValue={projectData?.stacks || ''}
            onChange={e => setValue('stacks', e.target.value)}
            placeholder="Stacks"
            required
            className="w-full py-2 px-4 rounded-md"
          />
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              {...register('is_show')}
              defaultChecked={projectData?.is_show}
              onChange={e => setValue('is_show', e.target.checked)}
            />
            <label htmlFor="is_show">Show Project</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              {...register('is_featured')}
              defaultChecked={projectData?.is_featured}
              onChange={e => setValue('is_featured', e.target.checked)}
            />
            <label htmlFor="is_featured">Featured Project</label>
          </div>
          <div className="flex justify-end gap-2 items-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Save
            </button>
            <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
