import React from 'react';

type DeleteModalsProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteModals = ({ isOpen, onCancel, onConfirm }: DeleteModalsProps) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ${isOpen ? '' : 'hidden'}`}
    >
      <div className="bg-white dark:bg-neutral-800 dark:text-white p-4 rounded-md">
        <p className="text-lg font-semibold">Are you sure you want to delete this project?</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-md mr-2">
            Delete
          </button>
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModals;
