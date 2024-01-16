import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addButtonItem } from '../api/Api';

export default function AddAddminBtn() {
  const navigate = useNavigate();

  // State to track input values
  const [formData, setFormData] = useState({
    button: '',
    link: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.button || !formData.link) {
      alert('Please fill in all the fields');
      return;
    }

    try {
      // Make a POST request to your server
      await addButtonItem(formData);

      // Redirect or perform any other action after successful submission
      navigate('/admin');
    } catch (error) {
      console.error('Error adding catalog item:', error);
    }
  };

  return (
    <div>
    <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif]">
      <button
        className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600"
        onClick={() => navigate('/admin')}
      >
        Ելք
      </button>
      <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
        <div>
          <label className="text-sm font-semibold block mb-2">կոճակի անունը</label>
          <input
            type="text"
            name="button"
            placeholder="կոճակի անունը"
            value={formData.button}
            onChange={handleInputChange}
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold block mb-2">կոճակի լինկը</label>
          <input
            type="text"
            name="link"
            placeholder="լինկ"
            value={formData.link}
            onChange={handleInputChange}
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          Ավելացնել
        </button>
      </form>
    </div>
    </div>
  );
}
