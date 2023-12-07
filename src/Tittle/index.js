import React from "react";
import './Tittle.css'

function Tittle({total, complet, loading}){
    return(
        <h1 className={`{titulo ${!!loading &&"titulo-loading"}`}>
            Has elegido <span>{complet}</span> de <span>{total}</span>  Articulos
        </h1>
    );
}

export { Tittle }
