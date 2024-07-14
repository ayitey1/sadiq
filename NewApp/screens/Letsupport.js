import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Letsupport = () => {
        const navigation = useNavigation();
        const handlec=()=>{
            navigation.navigate('Info');
      };
      const handled=()=>{
        navigation.navigate('The');
  };
  const handlef=()=>{
    navigation.navigate('You');
};
const handleg=()=>{
  navigation.navigate('Me');
};
const handleh=()=>{
  navigation.navigate('Them');
};
const handlej=()=>{
  navigation.navigate('As');
};
const handlek=()=>{
  navigation.navigate('Us');
};
  return (
    <SafeAreaView>
        <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlec}>
            <Text style={styles.textp}>How to contact my driver</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handlec} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handled}>
            <Text style={styles.textp}>I can't request a ride</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handled} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlef}>
            <Text style={styles.textp}>My driver's vehicle was in poor condition</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handlef} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handleg}>
            <Text style={styles.textp}>Pickup longer than expected</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handleg} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handleh}>
            <Text style={styles.textp}>Ride did not happen</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handleh} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlej}>
            <Text style={styles.textp}>Using emergency assists</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handlej} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
      <View style={styles.wcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.wcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlek}>
            <Text style={styles.textp}>Recovering a lost item</Text>
      </Pressable>
      </View>
      <TouchableOpacity onPress={handlek} >
      <MaterialIcon style={styles.icond} name="arrow-forward" size={30} color='#1C05B3'  /></TouchableOpacity>
    </SafeAreaView>
  )
}

export default Letsupport

const styles = StyleSheet.create({
  wcontainer:{
    marginTop:30

  }
})