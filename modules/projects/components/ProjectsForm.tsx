'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoEnterOutline } from 'react-icons/io5';

import Button from '@/common/components/elements/Button';

// Definisi tipe untuk project
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

// Tipe untuk FormData
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

// Props untuk mengupdate daftar proyek setelah tambah data
interface ProjectFormProps {
  onSuccess: (newProject: Project) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async formData => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/crud', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create project');
      }

      const newProject: Project = await response.json();

      // Tambahkan project ke list tanpa reload
      onSuccess(newProject);

      alert('Project created successfully!');
      reset();
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 pb-5">
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <input
          type="text"
          {...register('title')}
          placeholder="Title"
          required
          className="w-full py-2 px-4 rounded-md border dark:border-neutral-600"
        />
        <input
          type="text"
          {...register('slug')}
          placeholder="Slug"
          required
          className="w-full py-2 px-4 rounded-md border dark:border-neutral-600"
        />
      </div>
      <textarea
        {...register('description')}
        placeholder="Description"
        required
        rows={5}
        className="w-full py-2 px-4 rounded-md border dark:border-neutral-600"
      />
      <input
        type="text"
        {...register('image')}
        placeholder="Image URL"
        required
        className="w-full py-2 px-4 rounded-md border dark:border-neutral-600"
      />
      <input
        type="text"
        {...register('link_demo')}
        placeholder="Demo Link"
        className="w-full py-2 px-4 rounded-md border dark:border-neutral-600"
      />
      <input
        type="text"
        {...register('link_github')}
        placeholder="GitHub Link"
        className="w-full py-2 px-4 rounded-md border dark:border-neutral-600"
      />
      <input
        type="text"
        {...register('stacks')}
        placeholder="Stacks"
        required
        className="w-full py-2 px-4 rounded-md border dark:border-neutral-600"
      />
      <div className="flex gap-2 items-center">
        <input type="checkbox" {...register('is_show')} />
        <label htmlFor="is_show">Show Project</label>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" {...register('is_featured')} />
        <label htmlFor="is_featured">Featured Project</label>
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        icon={
          <>
            <IoEnterOutline size={20} />
          </>
        }
        className={clsx('py-2.5 flex justify-center hover:bg-neutral-900 hover:gap-3')}
      >
        {isLoading ? 'Creating Projects...' : 'Submit'}
      </Button>
    </form>
  );
};

export default ProjectForm;
