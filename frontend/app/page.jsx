'use client'
import { useState } from 'react';

export default function SubmitFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    size: '',
    shape: '',
    weight: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the submission, e.g., sending data to a backend server
    console.log(formData);
    alert('Form submitted. Check the console for the form data.');
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-semibold text-center mb-6">Submit Your Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product:</label>
          <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size:</label>
          <input type="text" id="size" name="size" value={formData.size} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="shape" className="block text-sm font-medium text-gray-700">Shape:</label>
          <input type="text" id="shape" name="shape" value={formData.shape} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight:</label>
          <input type="text" id="weight" name="weight" value={formData.weight} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    </div>
  );
}

