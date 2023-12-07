import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useArticle(){
const  {item:artic, 
        saveItem:saveArticle,
        error,
        loading
        }  = useLocalStorage('LHAMS', [])
const [value, setValue] = React.useState('')
const [openModal, setOpenModal] = useState(false)

const complet = artic.filter((art) =>
art.disponible).length
const total = artic.length

const searchArt = artic.filter((art)=>
{ const text = art.nombre.toLocaleLowerCase()
  const searchValue = value.toLocaleLowerCase()
  return text.includes(searchValue)
})

const addArticle = (nombre)=>{
    const newArticle = [...artic]
    newArticle.push({
        nombre,
        disponible:false
    })
    saveArticle(newArticle)
}

const completed = (nombre)=>{
const newArticle = [...artic]
const findIndex = newArticle
.findIndex((art) => art.nombre === nombre)
newArticle[findIndex].disponible = true;
saveArticle(newArticle)

}

const deleted = ()=>{
  const newArticle = [...artic]
  newArticle.splice(newArticle, 1)
  saveArticle(newArticle)
  
  }
 return {
    deleted,
    completed,
    searchArt,
    value, 
    setValue,
    total,
    complet,
    openModal, 
    setOpenModal,
    addArticle,
    error,
    loading

 }

}

export { useArticle }