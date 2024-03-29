'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoEnterOutline } from 'react-icons/io5';

import Button from '@/common/components/elements/Button';

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

const ProjectForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async formData => {
    try {
      const response = await fetch('/api/crud', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Project created successfully!');
        window.location.reload();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create project');
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project.');
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
          className="w-full py-2 px-4 rounded-md"
        />
        <input type="text" {...register('slug')} placeholder="Slug" required className="w-full py-2 px-4 rounded-md" />
      </div>
      <textarea
        {...register('description')}
        placeholder="Description"
        required
        rows={5}
        className="w-full py-2 px-4 rounded-md"
      />
      <input
        type="text"
        {...register('image')}
        placeholder="Image URL"
        required
        className="w-full py-2 px-4 rounded-md"
      />
      <input type="text" {...register('link_demo')} placeholder="Demo Link" className="w-full py-2 px-4 rounded-md" />
      <input
        type="text"
        {...register('link_github')}
        placeholder="GitHub Link"
        className="w-full py-2 px-4 rounded-md"
      />
      <input
        type="text"
        {...register('stacks')}
        placeholder="Stacks"
        required
        className="w-full py-2 px-4 rounded-md"
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
