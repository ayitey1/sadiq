import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signinas = () => {
    const navigation =  useNavigation();
    const handleDriverSignUp=() =>{
          navigation.navigate("Driverscreen");
    };
    const handleCustomerSignUp = () => {
      navigation.navigate("Enter");
  };
  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity
        style={styles.option} 
        onPress={handleDriverSignUp}
      >
        <Text style={styles.text}>Sign Up as Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.option} 
        onPress={handleCustomerSignUp}
      >
        <Text style={styles.text}>Sign Up as Customer</Text>
      </TouchableOpacity>
    
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  option: {
    width: '80%',
    padding: 20,
    margin: 10,
    backgroundColor: '#1C05B3',
    borderRadius: 10,
    alignItems: 'center',
    marginTop:100
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:170
  }
});

    


export default Signinas

