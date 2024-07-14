import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const About = () => {
  const navigation = useNavigation();
  const handlearrowback=()=>{
      navigation.navigate('MyTabs');
};
const handleR=()=>{
  navigation.navigate('MyTabs');
};
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={handlearrowback} >
        <MaterialIcon style={styles.icon} name="arrow-back" size={30} color='#1C05B3'  /></TouchableOpacity>
        <Text style={styles.About}>About</Text>
        <Text style={styles.Abouttext}>Version 1.0</Text>
        
        <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handleR}>
             <MaterialIcon style={styles.iconm} name="star-border" size={30} color='#1C05B3' />
            <Text style={styles.textp}>Rate the app</Text>
      </Pressable>
      </View>
      <View style={styles.separatord}></View>
      <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handleR}>
              <MaterialIcon name="description" size={30} color= '#1C05B3'/>
            <Text style={styles.textp}>Privacy</Text>
      </Pressable>
      </View>
      </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  About:{
    fontWeight:'bold',
    fontSize:25,
    paddingLeft:30,
    paddingTop:25

  },
  Abouttext:{
    paddingTop:14,
    paddingLeft:28,
    fontSize:16
  },
  icon:{
    paddingTop:14,
   left:10
  },
  wcontainer:{
    paddingTop:10,
    left:10
  },
  textp:{
    left:45,
    bottom:25,
    fontSize:15
  },
  separatord:{
    width:320,
    height:3,
    backgroundColor:'#CCCCCC',
    borderRadius:50,
    top:1,
    left:20
  },
  
})