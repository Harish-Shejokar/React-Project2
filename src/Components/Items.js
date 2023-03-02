import React from "react";
import ListItems from './ListItems';

const Items = (props) => {
    return (
        <div>
            {props.items.map(item => {
                return(
                    <ListItems key={Math.random()} name={item.name} age={item.age} />
                )
            })}

        </div>
    )
 }

export default Items;