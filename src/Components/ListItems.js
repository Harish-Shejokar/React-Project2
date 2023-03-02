import React from "react";
import './ListItems.css'

const ListItems = (props) => {
    
    
    return (
        <li className="list">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
        </li>
    );
      

}

export default ListItems;