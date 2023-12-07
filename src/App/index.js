import React from 'react';
import './App.css';
import { Article } from '../Article';
import { ArticleList } from '../ArticleList';
import { Search  } from '../Search';
import { Button } from '../Button'
import { Tittle } from '../Tittle';
import { ArticleHeader } from '../ArticleHeader';
import { useArticle } from './useArticle';


function App() {

  const {
    deleted,
    completed,
    searchArt,
    value, 
    setValue,
    total,
    complet

 } = useArticle()

  
  return (
    <React.Fragment>
      <ArticleHeader>
        <Tittle 
        complet = {complet}
          total = {total}
        />

        <Search 
        value = {value}
        setValue = {setValue}
        />

      </ArticleHeader>

      
      <ArticleList>
        {searchArt.map((art)=>
        <Article 
        key={art.nombre}
        nombre = {art.nombre}
        disponible = { art.disponible}
        onCompleted = {()=>completed(art.nombre)}
        onDeleted = {() => deleted(art.nombre)}
        />
        )}
          
      </ArticleList>
      
      <Button />
    </React.Fragment>
  );
}

export default App;
