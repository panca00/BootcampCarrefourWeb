import React from "react";

function ComponenteA(props){
   //ou const name = props.name
    return(
        <div >
            Componente A =D
            <div >{props.children}</div>
        </div>
    )
}

export default ComponenteA