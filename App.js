import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputText from './components/inputText';
import OutputText from './components/OutputText';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
  'ProductSans': require('./assets/fonts/ProductSans.ttf'),
  'ProductSansBold': require('./assets/fonts/ProductSansBold.ttf'),
  });
  };

export default function App() {    

  const [fontloaded,setfontloaded]=useState(false);
  const [Sentence, setSentence] = useState('Enter any character sequence')

  var morse={
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }
  var count = Object.keys(morse).length;
  var MorseMerge=""
  const changeHandler=(UpdatedSentence)=>{
    UpdatedSentence=UpdatedSentence.toLowerCase()
    for(var i=0;i<UpdatedSentence.length;i++){
      for(var j=0;j<count;j++){
        if(UpdatedSentence[i]==(Object.keys(morse))[j]){
          MorseMerge=MorseMerge+morse[UpdatedSentence[i]]+" "
        }
      }
    }
    setSentence(MorseMerge)
  }
  
  if(fontloaded){
  return (
    <View style={styles.container}>
      <OutputText
        Sentence={Sentence}
      />
      <InputText
        changeHandler={changeHandler}
      />
    </View>
  );
  }
  else {
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={()=>setfontloaded(true)}
    />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
