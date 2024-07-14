import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Verifycode = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const handlearrowback=()=>{
  
  
  navigation.navigate('Enter');
  };
  const handleChangeText = (text) => {
    setCode(text);
    if (text.length === 6) {
      navigation.navigate('Test'); // Replace 'NextScreen' with the actual name of your next screen
    }
  };
  
  

  return (
    <KeyboardAwareScrollView  style={styles.container}>
      
    <View style={styles.bluecontainer}>
      <TouchableOpacity onPress={handlearrowback} >
        <Icon style={styles.icon} name="arrow-back" size={30} color="#ffffff"  /></TouchableOpacity>
      <Text style={styles.label}>Phone Verification</Text>
    <Text style={styles.code}>Enter your OTP code here</Text></View>
   
      <View style={styles.inputWrapper}>
        
      
      
      <TextInputMask style={styles.input}
        type={'custom'}
        options={{
          mask: '999999' // Example mask for a 6-digit code
        }}
        value={code}
        onChangeText={handleChangeText}
        keyboardType="numeric"
        placeholder=' _ _ _ _ _ _'
        placeholderTextColor='gray'
        secureTextEntry

      />
      </View>
      </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  
  input: {
    
 
  },
  bluecontainer:{
    height:230,
    width:'100%',
    backgroundColor:'#1C05B3',
    top:0
  
  
    
  },
  label:{
    fontSize:40,
    color:'#ffffff',
    top:70,
    marginLeft:12,
    
  
  },
  code:{
    color:'white',
    top:95,
    fontSize:17,
    marginLeft:12,
    
  },
  inputWrapper:{
  
    
    
  
  },
  icon:{
    top:60,
    left:7
  }



});

export default Verifycode;
