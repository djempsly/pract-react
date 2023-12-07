import React from "react";

function Button({setOpenModal}){
   
    return(
        <button className="boton"
        onClick={()=>setOpenModal(state=>!state)}
        > 
            + 
        </button>
    );
}

export { Button }