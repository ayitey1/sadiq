import React from 'react';
import { MapView, StyleSheet } from 'react-native';
const Mapses = () => {
  return (
   
    <MapView style={{ flex: 1 }}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
  );
};

export default Mapses

const styles = StyleSheet.create({})