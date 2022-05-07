import React from 'react'
import { View } from 'react-native'


export default props => {
    const lado = props.lado || 50
    return (
        <View style={{
            height: props.lado,
            width: props.lado,
            backgroundColor: props.cor || '#000'
        }} />
    )
}

