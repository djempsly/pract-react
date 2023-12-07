import React from "react";

function Search({value, setValue}){
    return (
        <input className="input/search"
            placeholder="Busca en el Buscador"
            value={value}
            onChange={(event)=>setValue(event.target.value)}
        />
    );
}

export { Search }


