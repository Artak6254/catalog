


export const headerData = async() => {
    const response = await fetch('http://localhost:3001/header');
    const data = await response.json();
    return data;
}


export const catalogData = async() => {
    const response = await fetch('http://localhost:3001/catalog');
    const data = await response.json();
    return data;
}