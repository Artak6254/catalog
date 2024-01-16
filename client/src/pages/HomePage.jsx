import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { headerData } from "../api/Api";
import Catalog from "../components/Catalog";

function HomePage() {
  const [headerDataState, setHeaderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await headerData();
        setHeaderData(res);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-[100vh] bg-blue-800">
      <Header headerData={headerDataState} />
      <Catalog />
    </div>
  );
}

export default HomePage;
