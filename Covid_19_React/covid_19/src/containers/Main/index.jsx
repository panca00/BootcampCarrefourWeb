import React,{memo, useCallback, useEffect, useState} from "react";
import { Container } from "../../../node_modules/@material-ui/core/index";
import api from "../../api";
import {ContainerStyled} from './style'
import Board from'./components/Board'
import Panel from'./components/Panel'


function Main(){
    const [data,setData]=useState({})
    const [country,setCountry]=useState('brazil')
    const updateAT=new Date().toLocaleString()
    
    const getCovidData=useCallback((country)=>{

        api.getCountry(country)
        .then(data => setData(data))
    },[])

    useEffect(()=>{
        getCovidData(country)
    },[getCovidData,country])
    
    const handleChange =({target}) =>{
        const country=target.value
        setCountry(country)

    }
    return(
        <ContainerStyled>
            <div className="mb-2">
            <Panel 
            data={data}
            updateAT={updateAT}
            onChange={handleChange}
            country={country}
            getCovidData={getCovidData}
            />
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main);