import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Promocode = () => {
    const navigation = useNavigation();
    const handlearrowback=()=>{
        navigation.navigate('Promotions');
  };
  return (
   <SafeAreaView>
    <TouchableOpacity onPress={handlearrowback} >
    <MaterialIcon style={styles.icon} name="arrow-back" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View>
      <Text style={styles.textContainer}>Enter promo code</Text>
 </View>     
 <View style={styles.InputContainer} >
 <TextInput style={styles.textInput} color='#ffffff' placeholder='Promo code' placeholderTextColor={'gray'}/><Text></Text></View>

   </SafeAreaView>
 
  )
}

export default Promocode

const styles = StyleSheet.create({
    InputContainer:
    {
        backgroundColor:'#ffffff',
        flexDirection:"row",
        borderRadius:10,
        marginHorizontal:40,
        marginVertical:20,
        alignItems:'center',
        height:60,
        top:50,
        paddingLeft:5,
        borderColor:'#1C05B3',
        borderWidth:2,
    
        
        
        //marginTop:120

    },
    textContainer:{
        fontSize:23,
        fontWeight:'bold',
        top:50,
        left:40,
    }

    
})