import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OutputText = ({Sentence}) => {
    return (
        <View style={styles.outputTextContainer}>
            <Text style={styles.outputTextStyle}>{Sentence}</Text>
        </View>
    )
}

export default OutputText

const styles = StyleSheet.create({
    outputTextContainer:{
        backgroundColor:'#d4fcc3',
        flex:1,
        justifyContent:"center",
        padding:20
    },
    outputTextStyle:{
        textAlign:'center',
        color:'brown',
        fontFamily:'ProductSans',
        fontSize:28,
    }
})
