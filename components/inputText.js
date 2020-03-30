import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const InputText = ({changeHandler}) => {
    return (
        <View style={styles.inputTextContainer}>
            <TextInput
            style={styles.inputTextStyle}
            placeholder="Enter Text Here ..."
            onChangeText={(val)=>changeHandler(val)}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    inputTextContainer:{
        backgroundColor:'#362c28',
        flex:1,
        justifyContent:"flex-start",
        padding:20
    },
    inputTextStyle:{
        textAlign:"center",
        color:'#fff',
        fontSize:28,
        fontFamily:'ProductSans',
    }
})
