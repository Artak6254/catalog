import React from 'react';



function Header({ headerData }) {
  return (
    <div className='flex lg:flex-row md:flex-col sm:flex-col justify-end items-center'>
      <div className='w-full flex justify-center items-center'>
        {headerData?.map((item) => {
          return (
            <div key={item.id} className='text-center'>
              <h1 className='text-white'>{item.title}</h1>
              <p className='text-white'>{item.subtitle}</p>
            </div>
          );
        })}
      </div>
      <div className='flex lg:flex-col md:flex-row justify-center w-full md:w-auto mt-3'>
          <button className='w-[169px] border-2 border-purple-600 text-[13px] hover:bg-purple-600 text-white transition-all duration-300 mb-2 md:mb-2 md:mr-2'>
            հեռախոսային համակարգ
          </button>
          <button className='w-[169px] border-2 border-purple-600 text-[13px] hover:bg-purple-600 text-white transition-all duration-300 mb-2 md:mb-2 md:mr-2 '>
            Էելեկտրոնային Փոստ
          </button>
          <button className='w-[169px] border-2 border-purple-600 text-[13px] hover:bg-purple-600 text-white transition-all duration-300 mb-2 md:mb-2 md:mr-2'>
            Առացանց տեսկոնֆերանս
          </button>
          <button className='w-[169px] border-2 border-purple-600 text-[13px] hover:bg-purple-600 text-white transition-all duration-300 mb-2 md:mb-2 md:mr-2'>
            Ամպային տիրույթ
          </button>
          <button className='w-[169px] border-2 border-purple-600 text-[13px] hover:bg-purple-600 text-white transition-all duration-300 mb-2 md:mb-2 md:mr-2'>
            Աշխատանքային հարթակ
          </button>
          <button className='w-[169px] border-2 border-purple-600 text-[13px] hover:bg-purple-600 text-white transition-all duration-300 mb-2 md:mb-2 md:mr-2'>
            ՀԿԱԾ կաբինետ
          </button>
        </div>
    </div>
  );
}

export default Header;
