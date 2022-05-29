import React from "react"


const App = () =>{
    const name ='DIO';

    const handleChange = (e) =>{
    
    const {value} = e.target
    console.log(value)
    
    }

    const showEvent = (e) =>{
        console.log('Click')
        console.log(e)
        alert(name)
    
    } 
      
const Button = <button onClick={showEvent}>Mostra Evento</button>



    return (
        <div>
            <p>Hello Wolrd ,passa o zap</p>
            <input onChange={handleChange} />

            {Button}

        </div>
        
    )
}

export default App;