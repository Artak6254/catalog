import React, { useState, useEffect } from "react";
import { buttonData } from "../api/Api";

function Header({ headerData }) {
  const [btn, setBtn] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await buttonData();
        setBtn(res);
        console.log("Button data:", res);
      } catch (error) {
        console.error("Error fetching button data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col justify-end items-center">
      <div className="w-full flex justify-center items-center">
        {headerData?.map((item) => {
          return (
            <div key={item.id} className="text-center">
              <h1 className="text-white">{item.title}</h1>
              <p className="text-white">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col  justify-center w-full md:w-auto mt-3">
        {btn?.map((item) => {
          return (
            <div key={item.id} className="text-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="w-[169px] border-2 border-purple-600 text-[13px] hover:bg-purple-600 text-white transition-all duration-300 mb-2 md:mb-2 md:mr-2">
                  {item.button}
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
