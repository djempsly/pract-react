import React from "react";

function NewArticle({setOpenModal, addArticle}){
    const [article, setArticle] = React.useState('')

    const onChange = (event)=>
    {setArticle(event.target.value)}

    const onCancel = () =>{
        setOpenModal(false)
    }

   const  onSumit = (event) =>{
        event.preventDefault()
        addArticle(article)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSumit}>
            <label>Escribe tu Articulo</label>
            <textarea 
                placeholder="Escribe en este espacio"
                value={article}
                onChange={onChange}
            />
            <div>
                <button
                type="button"
                onClick={onCancel}
                >Cancelar</button>
                <button>Añadir</button>
            </div>
        </form>
    )
}
export { NewArticle }
