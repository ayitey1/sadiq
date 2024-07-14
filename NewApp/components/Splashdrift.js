import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

const logo = require("../assets/images/new.png");
export default function Splashdrift(){
    const moveAnim = useRef(new Animated.Value(-200)).current; // Initial position
    const [bgColor, setBgColor] = useState('#1C05B3');
    const navigation = useNavigation();
    useEffect(() => {
   
      
          Animated.timing(moveAnim, {
            toValue: 5, // Move to the right (adjust as necessary)
            duration: 2000, // Duration of animation (in milliseconds)
            useNativeDriver: false, // Set to true if you use transform for better performance
          }).start(() => {
            // Change background color after animation ends
            setBgColor('#ffffff'); // Change to your desired color
            setTimeout(() => {
            navigation.replace('Input');
          },2000);
    });
  }, [moveAnim,navigation]);
    
  
    return (
      
        <View style={[styles.container, { backgroundColor: bgColor }]}>
          <Animated.View style={[styles.logo, { left: moveAnim }]}>
            <Image source={require("../assets/images/new.png")} style={styles.topImage} />
          </Animated.View>
        </View>
      );

  };
 


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1C05B3'
},
topImageContainer:{
    height:250,
    width:300,
    position:'absolute',
    justifyContent:'center',

    
    
},
topImage:{
    width:300,
    height:200,
    Top:150,
    
    
   }
});