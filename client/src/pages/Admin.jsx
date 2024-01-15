import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { catalogData as apiCatalogData, updateCatalogItem, deleteCatalogItem } from '../api/Api';

const Admin = () => {
    const [catalogDataApi, setCatalogDataApi] = useState([]);
    const [editedItem, setEditedItem] = useState(null);

    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await apiCatalogData();
          setCatalogDataApi(res);
        } catch (error) {
          console.error('Error fetching catalog data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleEditClick = (item) => {
      setEditedItem(item);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await updateCatalogItem(editedItem.id, editedItem);
        // Refresh the data after the update
        const updatedData = await apiCatalogData();
        setCatalogDataApi(updatedData);
        // Reset the edited item state
        setEditedItem(null);
      } catch (error) {
        console.error('Error updating catalog item:', error);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    };
  
    const handleDeleteClick = async (id) => {
        try {
          // Make a DELETE request to your server
          await deleteCatalogItem(id);
    
          // Refresh the data after the deletion
          const updatedData = await apiCatalogData();
          setCatalogDataApi(updatedData);
        } catch (error) {
          console.error('Error deleting catalog item:', error);
        }
      };

  return (
    <div className="overflow-x-auto">
      <div className='flex justify-between'>
      <button className='px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600' onClick={() => navigate('/')}>Ելք</button>
      <button className='px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600' onClick={() => navigate('adminadd')}>Ավելացնել նոր տվյալ</button>
      </div>
      <table className="min-w-full bg-white font-[sans-serif]">
        <thead className="bg-gray-800 whitespace-nowrap">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white">image url</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white">title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white">link</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap divide-y divide-gray-200">
          {catalogDataApi?.map((item) => (
            <tr className="hover:bg-blue-50" key={item.id}>
              <td className="px-6 py-4 text-sm">
                <img src={`${item.image}`} alt="/" className="w-[12%]" />
              </td>
              <td className="px-6 py-4 text-sm">{item.title}</td>
              <td className="px-6 py-4 text-sm">{item.link}</td>
              <td className="px-6 py-4">
                <button className="mr-4" title="Edit" onClick={() => handleEditClick(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-blue-500 hover:fill-blue-700"
              viewBox="0 0 348.882 348.882">
              <path
                d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                data-original="#000000" />
              <path
                d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                data-original="#000000" />
            </svg>
                </button>
                <button className="mr-4" title="Delete" onClick={() => handleDeleteClick(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000" />
              <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000" />
            </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editedItem && (
         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className='flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]'>
         <form
           onSubmit={handleFormSubmit}
           className="flex flex-col bg-white p-6 rounded shadow-md"
         >
           {/* Input fields for editing */}
           <label htmlFor="image" className='mb-2 text-lg block text-md'>
             Image URL:
             <input
               type="text"
               id="image"
               name="image"
               value={editedItem.image}
               onChange={handleInputChange}
               className='px-4 py-2.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500'
             />
           </label>
           <label htmlFor="title" className='mb-2 text-lg block text-md'>
             Title:
             <input
               type="text"
               id="title"
               name="title"
               value={editedItem.title}
               onChange={handleInputChange}
               className='px-4 py-2.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500'
             />
           </label>
           <label htmlFor="link" className='mb-2 text-lg block text-md'>
             Link:
             <input
               type="text"
               id="link"
               name="link"
               value={editedItem.link}
               onChange={handleInputChange}
               className='px-4 py-2.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500'
             />
           </label>
           <button type="submit" className='px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600'>Save Changes</button>
         </form>
       </div>
       </div>
     )}
    </div>
  );
};

export default Admin;
