import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useArticle(){
    const  [artic, saveArticle]  = useLocalStorage('LHAMS', [])
const [value, setValue] = React.useState('')

const complet = artic.filter((art) =>
art.disponible).length
const total = artic.length

const searchArt = artic.filter((art)=>
{ const text = art.nombre.toLocaleLowerCase()
  const searchValue = value.toLocaleLowerCase()
  return text.includes(searchValue)
})

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
    complet

 }

}

export { useArticle }