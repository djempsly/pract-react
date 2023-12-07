import React from "react";
import './Article.css'
import { GrCheckmark } from "react-icons/gr";
import { GrClose } from "react-icons/gr";


function Article(props){
    return (
        <li className="articulos">
            <GrCheckmark 
            className="complete"
            onClick={props.onCompleted}
            /> 
            <p> {props.nombre} </p>
             <GrClose 
             className="delete"
             onClick={props.onDeleted}
             /> 
        </li>
    )
}

export { Article }