import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function sum(a,b){
    return a+b
}
//Toda função JavaScript se usa {}
function primeiroJSX () {
    return(
        <div className="teste">
            Hugo Henrique - Introdução ao React
            <h1> Soma: {sum(10,20)}</h1>
        </div>
    )
}

const App = () =>{
    return (
        <div className="App">
           {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
