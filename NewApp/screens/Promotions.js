import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Promotions = () => {
  const navigation = useNavigation();
  const handleP=()=>{
    navigation.navigate('Promocode');
  };
  const handlearrowback=()=>{
    navigation.navigate('MyTabs');
};
  return (
    <SafeAreaView>
       <TouchableOpacity onPress={handlearrowback} >
       <MaterialIcon style={styles.icon} name="arrow-back" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View style={styles.promocontainer}>
      <Text style={styles.promo}>Promotions</Text>
    </View>
    <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handleP}>
             <MaterialIcon style={styles.icona} name="local-offer" size={30} color='#1C05B3' />
            <Text style={styles.textp}>Enter promo code</Text>
      </Pressable>
      </View>
      <View style={styles.separatord}></View>
    </SafeAreaView>
    
  )
}

export default Promotions

const styles = StyleSheet.create({
  promo: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop:80,
    paddingLeft:30
  },
  separatord:{
    width:380,
    height:8,
    backgroundColor:'#CCCCCC',
    top:40,
    
  },
  textp:{
    bottom:5,
    left:50,
  },
  icona:{
    top:20,
    left:10
  },
  promocontainer:{
  
  }
})