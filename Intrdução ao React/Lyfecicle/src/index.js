import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.css"

//Classe com React
class App extends Component{
    
    constructor(props){
        super(props)

        this.state={
            clock:1000,
            copo:'agua'
        }
    }
    //ArrowFunciton para ter o "this"
    alterarCopo = () => {
        this.setState({
            copo:"refrigerante"
        })
    }
    //Função do ciclo de vida do react, ele é o construtor dos elementos apos a rendenização
    componentDidMount() {
        window.setTimeout (()=>
        
        {
            this.setState({
                copo:'suco'
            })
        }, 2000)
    }
    //obrigatorio o uso da render em classes, tudo no render é redenizado, logo precisa ser declarado
    //sempre usar "this" em funçoes dentro da classe
    render(){
        const {clock,copo} = this.state
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={()=> this.alterarCopo()}>{copo}</button>
            </div>
        )
    }    
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)
