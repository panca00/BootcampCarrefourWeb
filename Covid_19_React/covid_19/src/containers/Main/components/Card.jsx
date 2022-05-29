import React,{memo} from "react";
import { PropTypes } from "prop-types";
import {Card as CardUI} from '../../../components'
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'
import { valueToNode } from "../../../../../../../../../Users/hugoh/AppData/Local/Microsoft/TypeScript/4.6/node_modules/@babel/types/lib/index";


function Card  ({value,label,color}){
    return(
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)