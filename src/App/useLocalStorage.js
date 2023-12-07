import React from "react";

// const article =[
//     {nombre: "Laptop", disponible:false},
//     {nombre: "Cell", disponible:true},
//     {nombre: "Motor", disponible:false},
//     {nombre: "Reloj", disponible:true},
//   ]

//   localStorage.setItem('LHAMS', JSON.stringify(article))

function useLocalStorage(itemName, initialValue){
const [item, setItem] = React.useState(initialValue)
const [loading, setLoading] = React.useState(true)
const [error, setError] = React.useState(false)

React.useEffect(()=>{
    setTimeout(()=>{
        try {
             const itemLocalStorage = localStorage.getItem(itemName);
            let parseItem;

            if (!itemLocalStorage) {
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parseItem = initialValue
                
            } else {
                parseItem = JSON.parse(itemLocalStorage)
                setItem(parseItem)
                setLoading(false)
            }  
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }, 3000)
}, [])

const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
}

    return {item, 
            saveItem,
            error,
            loading
            }
}

export { useLocalStorage }

