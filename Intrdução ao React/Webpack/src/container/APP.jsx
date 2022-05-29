import React from "react"
import mock from '../mock.js'
import Button from "../components/Button.jsx"

const buttonA = <button> Históricos dos clientes</button>
const buttonB = <button> Cadastrar Cliente</button>

const hasCustomer =false;



const App = () =>{

    const handleClick = (id) =>{
        console.log('deletar cliente')
        alert(`ID do cliente:${id}`)
    }

    
    const renderCustomers = (customer,index) =>{
        return (
            <div key={`customer-${customer.id}`}>
                <li >
                    {customer.name} 
                    <Button onClick={()=> handleClick(customer.id)}> X </Button> 
                </li>
            {customer.skills.map(renderSkiils)}
            </div>
        )
    }

    const renderSkiils = (skill,index) =>{
        return(
            <div style={{paddingLeft: '30px'}}  key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }
    
    const renderShowHistory = () => {
       return(
       <div>
            Clique no botõe abaixo para acessar o historico dos clientes
            <br />
            {buttonA}
         </div>
       )
    }

    const renderAddCustomer = () =>{ 
        return(
        <div>
            Clique no botão abaixo para cadastrar o cliente
            <br />
            {buttonB}
        </div>)
    }


    const showCustomer = () =>{
        if(!hasCustomer) return null

        return(
            <div>
                 <h1> Nome do Cliente: Hugo Henrique</h1>
            </div>
        )
    }

    return (
        <div>
            <p>Hello Wolrd ,passa o zap</p>
           
            {hasCustomer ? renderShowHistory() : renderAddCustomer() }
            
            <div>
                {showCustomer ()}
            </div>

            <div>
                <ul>
                {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
        
    )
}

export default App;