import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Support = () => {
  const navigation = useNavigation();
  const handlearrowback=()=>{
      navigation.navigate('MyTabs');
};
const handleR=()=>{
  navigation.navigate('Letsupport');
};
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handlearrowback} >
      <MaterialIcon style={styles.icon} name="arrow-back" size={30} color='#1C05B3'  /></TouchableOpacity>
    <Text style={styles.textn}>How Can We Help You </Text>
   
    <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handleR}>
            <Text style={styles.textp}>Using Drift</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handleR} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
  </SafeAreaView>
   
  )
}

export default Support

const styles = StyleSheet.create({
  textn: {
    fontSize: 25,
    fontWeight: 'bold',
    top:50,
    marginLeft:20
  },
  wcontainer:{
    top:40,
    left:10,
    height:20
  },
  textp:{
  
  },icond:{
top:50,
left:300
  }
})