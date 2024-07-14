import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Paymentscreen = () => {
    const navigation = useNavigation();
    const handlearrowback=()=>{
        navigation.navigate('MyTabs');
  };
   
  const handledrift=() =>{
    navigation.navigate("Driftbalance");
};
const handletrans=() =>{
    navigation.navigate("Transaction");
};
const handlecash=() =>{
    navigation.navigate("Cash");
};
const handlecredit=() =>{
    navigation.navigate("Credit");
};
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={handlearrowback} >
        <MaterialIcon style={styles.icon} name="arrow-back" size={30} color='#1C05B3'  /></TouchableOpacity>
        <Text style={styles.payment}>Payment</Text>
        <View style={styles.balancecontainer}>
        <Text style={styles.balance}>Drift balance </Text> 
        <Text style={styles.cedis}>GH₵ 0</Text>
        <View style={styles.separator}></View>
        <Text style={styles.textbalance}>Drift Balance is not available with this payment method </Text>
         </View>
         
      <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handledrift}>
            <Icon style={styles.iconcontainer}name="question-circle" size={30} color="#1C05B3" />
            <Text style={styles.textp}>What is Driftbalance ?</Text>
      </Pressable>
      </View>
      <View style={styles.separatora}></View>
      <View style={styles.dcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.dcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handletrans}>
            <MaterialIcon style={styles.mcontainer} name="access-time" size={30} color="#1C05B3" />
            <Text style={styles.texts}>See Drift balance transactions</Text>
      </Pressable>
      </View>
      <View style={styles.separatord}></View>
      
      
      <Text style={styles.paymentd}>Payment Method</Text>
      <View style={styles.acontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlecash}>
            <MaterialIcon style={styles.aiconcontainer}name="attach-money" size={30} color="#1C05B3" />
            <Text style={styles.textd}>Cash</Text>
      </Pressable>
      </View>
      <View style={styles.separatorc}></View>
      <View style={styles.ncontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.dcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlecredit}>
            <MaterialIcon style={styles.mcontainer} name="credit-card" size={30} color="#1C05B3" />
            <Text style={styles.texta}>+ Add debit/credit card</Text>
      </Pressable>
      </View>
      <View style={styles.separatorw}></View>
        </SafeAreaView>
      
    
  )
}

export default Paymentscreen

const styles = StyleSheet.create({
    payment:{
        top:60,
        left:30,
        fontSize:25,
        fontWeight:'bold'
    },
    icon:{
        top:10,
        left:10
    },
    separator: {
        width:280,
        height:2,
        backgroundColor:'#CCCCCC',
        borderRadius:50,
        left:7,
        top:14
      },
      balancecontainer:{
        width:310,
        height:170,
        backgroundColor:'#E9E9E9',
        top:80,
        marginLeft:30,
        borderRadius:10,
        paddingTop:10,
        paddingLeft:10
      },
      balance:{
        fontSize:18,
        color:'#747474'
      },
      cedis:{
        fontSize:30,
        top:5,
        fontWeight:'bold',
         color:'#747474'
      },
      textbalance:{
        top:30
      },
      textp:{
        
      },
      pcontainer:{
        top:50,
        left:10,
      },
      iconcontainer:{
        top:18,
        left:5,
        width:50
      },
      textp:{
          left:40,
          bottom:9,
          fontWeight:'bold'
       
          
      },
      dcontainer:{
        top:55,
        
      },
      mcontainer:{
        top:20,
        left:25,

      },
      texts:{
        left:60,
        bottom:9,
        fontWeight:'bold'
      },
      separatord:{
        width:380,
        height:8,
        backgroundColor:'#CCCCCC',
        borderRadius:50,
        top:130
      },
      paymentd:{
        top:110,
        left:30,
        fontSize:25,
        fontWeight:'bold',
        marginTop:30
      },
      textd:{
        left:50,
        bottom:9,
        fontSize:18
     
        
    },
    texta:{
      left:60,
      bottom:9,
      fontSize:18
    },
      
    acontainer:{
      top:65,
      
    },
    aiconcontainer:{
      top:18,
      left:15,
      width:50
    },
    ncontainer:{
      top:75,
      
    },
    separatorc: {
      width:320,
      height:2,
      backgroundColor:'#CCCCCC',
      borderRadius:50,
      left:30,
      top:130
    },
    separatorw:{
      width:380,
      height:8,
      backgroundColor:'#CCCCCC',
      borderRadius:50,
      top:150
    },
})