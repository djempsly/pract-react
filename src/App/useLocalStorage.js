import React from "react";

// const article =[
//     {nombre: "Laptop", disponible:false},
//     {nombre: "Cell", disponible:true},
//     {nombre: "Motor", disponible:false},
//     {nombre: "Reloj", disponible:true},
//   ]

//   localStorage.setItem('LHAMS', JSON.stringify(article))

function useLocalStorage(itemName, initialValue){

const itemLocalStorage = localStorage.getItem(itemName);
let parseItem;

if (!itemLocalStorage) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parseItem = initialValue
    
} else {
    parseItem = JSON.parse(itemLocalStorage)

}

const [item, setItem] = React.useState(parseItem)

const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
}

    return [item, saveItem]
}

export { useLocalStorage }

