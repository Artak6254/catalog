


export const headerData = async() => {
    const response = await fetch('http://10.111.111.190:3001/header');
    const data = await response.json();
    return data;
}

export const buttonData = async () =>{ 
  const response = await fetch('http://10.111.111.190:3001/buttons');
  const data = await response.json();
  return data;
}



export const updateButtonItem = async (itemId, newData) => {
  const response = await fetch(`http://10.111.111.190:3001/updateBtn/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
  const updatedBtnData = await response.json();
  return updatedBtnData;
};

export const addButtonItem = async (data) => {
  const response = await fetch('http://10.111.111.190:3001/addButton', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to add catalog item');
  }
};

export const deleteButtonItem = async (id) => {
  const response = await fetch(`http://10.111.111.190:3001/deleteBtn/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete button item');
  }
};

export const catalogData = async() => {
    const response = await fetch('http://10.111.111.190:3001/catalog');
    const data = await response.json();
    return data;
}


export const buttonsData = async() => {
    const response = await fetch('http://10.111.111.190:3001/buttons');
    const data = await response.json();
    return data;
}

export const updateCatalogItem = async (itemId, newData) => {
    const response = await fetch(`http://10.111.111.190:3001/update/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const updatedData = await response.json();
      return updatedData;
  };


  export const deleteCatalogItem = async (id) => {
    const response = await fetch(`http://10.111.111.190:3001/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete catalog item');
    }
  };
  export const addCatalogItem = async (data) => {
    const response = await fetch('http://10.111.111.190:3001/addCatalog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add catalog item');
    }
  };