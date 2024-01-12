import React from 'react';



function Header({headerData}) {


    
  return (
    <div>
     {
        headerData?.map((item) => {
            return (
                <div key={item.id}>
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