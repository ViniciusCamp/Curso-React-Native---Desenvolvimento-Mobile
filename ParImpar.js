import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    // if ((props.num || 0) % 2 === 0){
    //     return (
    //         <View>
    //             <Text>O resultado é: </Text>
    //             <Text style={Estilo.txtG}>Par: {props.num}</Text>
    //         </View>
    //     )
    // } else {
    //     return (
    //         <View>
    //             <Text>O resultado é: </Text>
    //             <Text style={Estilo.txtG}>Impar: {props.num}</Text>
    //         </View>
    //     )
    // }

    return (
        <View>
            <Text style={Estilo.txtG}>O resultado é: </Text>
            {props.num % 2 === 0 
                ? <Text style={Estilo.txtG}>Par: {props.num}</Text>
                : <Text style={Estilo.txtG}>Impar: {props.num}</Text>
            }
        </View>
    )
}