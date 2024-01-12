import React, { useState } from 'react';
import Header from '../components/Header';
import { headerData } from '../api/Api';


function HomePage() {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    headerData.then((res) => {
      setHeaderData(res)
    }) 
  }, []);

  return (
    <div>
      <Header headerData={headerData}/>
    </div>
  );
}

export default HomePage;
