import React from "react";
import './Search.css'

function Search({value, setValue, loading}){
    return (
        <input className="input-search"
            placeholder="Busca en el Buscador"
            value={value}
            onChange={(event)=>setValue(event.target.value)}
            disabled = {loading}
        />
    );
}

export { Search }


