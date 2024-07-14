import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mapses from '../components/Mapses';

const  MapScreen =() => {
  return (
    
      <View>
        <Text style={styles.maptext}>MapScreen</Text>
        <View style={{height:'50%'}}>
          <Mapses />
        </View>
        <View style={{height:'50%'}} ></View>
        </View>

  );
};
export default MapScreen;
const styles = StyleSheet.create({
  maptext:{
    marginTop:20
  }
})