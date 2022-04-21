import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import ComponenteA from "./ComponeteA"
import ComponenteB from "./ComponenteB"
import "./style.css"

function soma (a,b){

    alert(a+b)
}

function App() { 

    return(
    <div className="App">
        Hello World
        <Button onClick={() => soma(10,20)} name="Hugo" />
        <ComponenteA> 
            <ComponenteB>
                <Button onClick={ () => soma(40,20)} name="Henrique" />
            </ComponenteB>
        </ComponenteA>
    </div>
    )   
}
//Componentes são elementos/funçoes que compomentes nossa pagina
//Entretanto eles se sobrepoem para utilizar precisamos das propriedade de herdar "Children"
const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)
