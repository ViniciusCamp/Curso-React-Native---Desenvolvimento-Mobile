import React from 'react'
import { Text } from  'react-native'
import Estilo from './estilo'

export default (props) => {
    console.warn(props); // usamos para ver os atributos e propriedades passadas
    return (
        <Text style={Estilo.txtG}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    )
}