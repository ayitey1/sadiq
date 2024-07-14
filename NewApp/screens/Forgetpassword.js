import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Forgetpassword = () => {
  return (
    <SafeAreaView>
        <View style={styles.gmailcontainer}>
             <Text style={styles.gmailtext}>Enter Your Gmail</Text>
             </View>
             <View style={styles.InputContainer} >
        
        <TextInput style={styles.textInput} color='#ffffff' placeholder='Email or Phonenumber' placeholderTextColor="gray"/></View>

        </SafeAreaView>
      
    
  )
}

export default Forgetpassword

const styles = StyleSheet.create({
    gmailcontainer:{
        marginTop:75,
        marginLeft:10
    },
    gmailtext:{
        alignItems:"center",
        justifyContent:"center",
        fontSize:25,
        color:'#1C05B3'
    },
    InputContainer:
    {
        position:'absolute',
        backgroundColor:'#ffffff',
        flexDirection:"row",
        borderRadius:10,
        marginHorizontal:2,
        elevation:5,
        marginVertical:20,
        alignItems:'center',
        height:50,
        top:120,
        width:200,
        borderWidth:1,
        borderColor:'#1C05B3'
    },
    textInput:{
        padding:1,
        marginLeft:15,
        color:'white'
    }
})