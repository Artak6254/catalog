import React, { useState, useEffect } from 'react';
import { catalogData as apiCatalogData } from '../api/Api';
import { Link } from 'react-router-dom';

function Catalog() {
  const [catalogDataState, setCatalogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiCatalogData();
        setCatalogData(res);
      } catch (error) {
        console.error('Error fetching catalog data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='flex justify-center items-center'>
    <div className='max-w-[1600px] mx-auto grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 place-content-center gap-12'>
    {catalogDataState?.map((item) => (
      <div key={item.id} className='text-center'>
        <Link to={item.link}>
          <img src={item?.image} alt="Catalog item" className='w-full mx-auto max-w-[60px] bg-white rounded-[20px] p-2' />
          <p className='mt-2 text-white'>{item.title}</p>
        </Link>
      </div>
    ))}
  </div>
  </div>
  );
}

export default Catalog;
