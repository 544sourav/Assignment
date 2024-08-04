"use client";

import React, { useState } from 'react';

interface EditBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  onSave: (title: string, description: string, cta: string, image: string) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ title, description, cta, image, onSave, onClose }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCta, setNewCta] = useState(cta);
  const [newImage, setNewImage] = useState(image);
  

  const handleSave = () => {
    onSave(newTitle, newDescription, newCta, newImage, );
  };

  return (
    <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex justify-center items-end">
      <div className="bg-white p-4 w-full max-w-md rounded-t-lg">
        <h3 className="text-lg font-semibold mb-4">Edit Banner</h3>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <input 
            type="text" 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">CTA</label>
          <input 
            type="text" 
            value={newCta} 
            onChange={(e) => setNewCta(e.target.value)} 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Image URL</label>
          <input 
            type="text" 
            value={newImage} 
            onChange={(e) => setNewImage(e.target.value)} 
            className="w-full p-2 border rounded" 
          />
        </div>
        
        <div className="flex justify-end">
          <button 
            onClick={handleSave} 
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button 
            onClick={onClose} 
            className="bg-gray-300 py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
