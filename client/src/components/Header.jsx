import React from 'react';



function Header({headerData}) {
  return (
    <div>
    {
        headerData.map((item, index) => {
            return (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                </div>
            )
        })
    }
    </div>
  );
}
export default Header