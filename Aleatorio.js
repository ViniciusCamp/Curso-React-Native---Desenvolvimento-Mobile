import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const aleatorio = parseInt((Math.random()*(props.max - props.min) + props.min))
    return (
        <Text style={Estilo.txtG}>
            Esse foi o número gerado aleatoriamente {aleatorio}
        </Text>
    )
} 