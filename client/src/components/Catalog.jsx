import React, { useState, useEffect } from 'react';
import { catalogData as apiCatalogData } from '../api/Api';  // Rename the imported function
import { Link } from 'react-router-dom';

function Catalog() {
  const [catalogDataState, setCatalogData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {  // Rename the local function
      try {
        const res = await apiCatalogData();  // Use the renamed imported function
        setCatalogData(res);
      } catch (error) {
        console.error('Error fetching catalog data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(catalogDataState);
  return (
    <div>
      {catalogDataState?.map((item) => (
        <div key={item.id}>
          <Link to={item.link}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
