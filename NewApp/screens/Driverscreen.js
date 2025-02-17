import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Enter = () => {
  const navigation =  useNavigation();
  const handleRegister=() =>{
        navigation.navigate("Verifycode");
  };
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.driftcontainer}>
            <Text style={styles.welcomecontainer}>SIGN UP </Text></View>
         
        <View style={styles.signInText}><Text>Ready to hit the road? Sign up as a driver today!</Text></View>
        <View style={styles.InputContainer} >
        <Icon style={styles.iconstyle} name="user" size={30} color='#1C05B3' />
        <TextInput style={styles.textInput} color='black' placeholder='username' placeholderTextColor="gray"/></View>
        <View style={styles.InputContainer} >
        <Icon style={styles.iconstyle} name="envelope" size={30} color='#1C05B3' />
        <TextInput style={styles.textInput} placeholder='gmail' placeholderTextColor="gray" secureTextEntry/></View>
        <View style={styles.InputContainer} >
        <Icon style={styles.iconstyle} name="lock" size={30} color='#1C05B3' />
        <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor="gray" secureTextEntry/></View>
        <View style={styles.InputContainer} >
        <Icon style={styles.iconstyle} name="lock" size={30} color='#1C05B3' />
        <TextInput style={styles.textInput} placeholder='Confirm Password' placeholderTextColor="gray" secureTextEntry/></View>
        
        <View style={styles.buttonContainer}>
        
        
      <TouchableOpacity >
      <Button title="SIGN UP" color='#1C05B3' size={200} onPress={handleRegister} style={styles.button} />
      
          
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Enter

const styles = StyleSheet.create({
  container: {
    backgroundColor:"ffffff",
    flex:1,

},
welcomecontainer:{
  marginLeft:170,
  top:145,
  color:'#1C05B3',
  fontSize:20,
},
signInText:{
        
  fontSize:30,
  color:'#1C05B3',
  top:170,
  left:20,
  alignItems:'center',
  justifyContent:'center'


  // marginBottom:100

},
InputContainer:
{
  backgroundColor:'#ffffff',
  flexDirection:"row",
  borderRadius:10,
  marginHorizontal:40,
  elevation:10,
  marginVertical:20,
  alignItems:'center',
  height:40,
  top:190,
  
  
  
  
  //marginTop:120

},
textInput:{
  padding:1,
  marginLeft:15,
  color:'black',
  



},
footerText:{
  top:35,
  textAlign:'center',
  color:'#1C05B3',
},
buttonContainer: {
  width: 170,
  height: 40,
  marginLeft:100,
  marginTop:240,
  
  },
  iconstyle:{
    marginLeft:10
  }

})