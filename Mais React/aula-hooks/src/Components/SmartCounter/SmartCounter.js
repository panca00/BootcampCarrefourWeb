import {useState} from 'react';

function SmartCounter (){
    const [quantity, upQuantity] = useState(1);

    return(

        <>
            <div>{quantity}</div>
            <button onClick={()=> upQuantity(quantity+1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;