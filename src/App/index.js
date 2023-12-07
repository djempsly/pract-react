import React from 'react';
import './App.css';
import { Article } from '../Article';
import { ArticleList } from '../ArticleList';
import { Search  } from '../Search';
import { Button } from '../Button'
import { Tittle } from '../Tittle';
import { ArticleHeader } from '../ArticleHeader';
import { useArticle } from './useArticle';
import { Modal } from '../Modal';
import { NewArticle } from '../NewArticle';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { CreateArticle } from '../CreateArticle';


function App() {

  const {
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

      
      <ArticleList

      error = {error}
      loading = {loading}
      searchArt = {searchArt}
      total = {total}
      searchtext = {value}

      onError = {()=><Error />}
      onLoading = {()=><Loading />}
      onCreateArticle = {()=><CreateArticle />}
      onCreateArticleSearchResult = {(search) =>
      <p>Lo siento, no hay coincidencia con <strong>{search}</strong> </p>}

      // render={(art)=>
      // <Article 
      // key={art.nombre}
      // nombre = {art.nombre}
      // disponible = { art.disponible}
      // onCompleted = {()=>completed(art.nombre)}
      // onDeleted = {() => deleted(art.nombre)}
      // />
      // }
      
      >
        {(art)=>
      <Article 
      key={art.nombre}
      nombre = {art.nombre}
      disponible = { art.disponible}
      onCompleted = {()=>completed(art.nombre)}
      onDeleted = {() => deleted(art.nombre)}
      />
      }
          
      </ArticleList>
      
      <Button setOpenModal = {setOpenModal} />

      {openModal && (<Modal>
        <NewArticle 
        setOpenModal = {setOpenModal}
        addArticle={addArticle}
         />
        </Modal>)}

    </React.Fragment>
  );
}

export default App;
