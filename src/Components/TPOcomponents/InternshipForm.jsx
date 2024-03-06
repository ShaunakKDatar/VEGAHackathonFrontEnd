import React, { useState } from 'react';

function InternshipForm({ onSubmit, onClose }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent component
    onSubmit({ title, company, location, description });
    // Reset form fields after submission
    setTitle('');
    setCompany('');
    setLocation('');
    setDescription('');
    // Call the onClose function passed from the parent component to close the modal
    onClose();
  };

  return (
    <div className="w-[300px]">
      <h2 className="text-lg font-semibold mb-4">Create New Internship Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-secondary text-white font-bold py-2 px-4 rounded">Create Internship</button>
        </div>
      </form>
    </div>
  );
}

export default InternshipForm;
