import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const logo = require("../assets/images/new.png");
const Input = () => {
    const navigation =  useNavigation();
  const handleRegister=() =>{
        navigation.navigate("Enter");
  };
  const handleForgotPassword = () => {
    navigation.navigate("Forgetpassword");
};
const handlelogin = () => {
    navigation.navigate("Test");
};
    

    return (
       <SafeAreaView style={styles.container}>
       

    
        <View style={styles.topImageContainer}>
            <Image source ={logo} style={styles.topImage}/>
        </View>
        <View style={styles.driftcontainer}>
            <Text style={styles.welcomecontainer}>WELCOME BACK</Text>
        
        </View>
        <View><Text style={styles.signInText}>Please log into your account</Text></View>
        <View style={styles.InputContainer} >
        
        <TextInput style={styles.textInput} color='#ffffff' placeholder='Email or Phonenumber' placeholderTextColor="gray"/></View>
        <View style={styles.InputContainer} >
        
        <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor="gray" secureTextEntry/></View>
       
        <TouchableOpacity><Text style={styles.forgotpasswordText}  onPress={handleForgotPassword}>Forgot your password?</Text></TouchableOpacity>
        <View style={styles.buttonContainer}>
        <Button title="LOG IN" color='#B96CB9' size={300} onPress={handlelogin} style={styles.button} />
        </View>
       
        <View style={styles.SignIn}></View>
        <TouchableOpacity >
            <Text style={styles.footerText} onPress={handleRegister}>
                Don't have an account?{" "}
                <Text style={{textDecorationLine:"underline"}}>SIGN-UP</Text>
            </Text>
        </TouchableOpacity>
<View style={styles.loginwithcontiner}>
    <Text style={styles.textcontainer}>Sign  In with </Text>
</View>
        <View style={styles.Iconcontainer}>
      <MaterialCommunityIcons name="google" size={30} color="#DB4437" />
      <MaterialCommunityIcons name="facebook" size={30} color="#3b5998" />
      <Icon name="apple" size={30} color="#000000" />
    </View>
      <View style={styles.termscontainer}>
        <Text style={styles.termstextcontainer}><Text style={styles.grayText}>By clicking continue, you agree to our  </Text><Text style={styles.boldcontainer}>Terms of Service{'\n'}</Text><Text style={styles.grayText}> and</Text><Text style={styles.boldcontainer}> Privacy Policy</Text></Text></View>
        </SafeAreaView>
      
    
    
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        backgroundColor:"ffffff",
        flex:1,

    },
    topImageContainer:{
        height:100,
        width:200,
        top:190,
        right:200,
        position:'absolute',
        justifyContent:'center'
        
        
    },
    topImage:{
        width:250,
        height:170,
        marginLeft: 90,
        Top:150,
        
        
       },
    

    
    signInText:{
        
        fontSize:12,
        color:"black",
        top:260,
        left:20,
        marginLeft:100,


        // marginBottom:100

    },
    InputContainer:
    {
        backgroundColor:'#1C05B3',
        flexDirection:"row",
        borderRadius:10,
        marginHorizontal:40,
        elevation:10,
        marginVertical:20,
        alignItems:'center',
        height:50,
        top:290,
        
        
        //marginTop:120

    },
    



    forgotpasswordText:{
        color:"black",
        textAlign:"right",
        marginRight:30,
        top:285,
        textDecorationLine:"underline"
        
        
        
    },
    textInput:{
        padding:1,
        marginLeft:15,
        color:'white',


    
    },
    footerText:{
        top:65,
        textAlign:'center',
        color:'#1C05B3',


    },
    drifttext:{
        fontSize:30,
        color:'#1C05B3',
        marginLeft:130,
        top:220,
    



    },
    driftcontainer:{
        
    },
    welcomecontainer:{
        marginLeft:120,
        top:250,
        color:'#1C05B3',
        fontSize:20,


    

    },
   

    
    buttonContainer: {
        width: 150,
        height: 70,
        marginHorizontal:150,
        marginTop:240,
        borderRadius:10,
        top:70
        

    
    
    },
    Iconcontainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        columnGap:6,
        top:710,
        position:'absolute',
        left:120,
        columnGap:12,



    },
    loginwithcontiner:{
        top:65,
        left:150
        

    },
    textcontainer:{
        alignContent:'center',
        justifyContent:'center',
        right:10,
        top:15

    },
    termscontainer:{
        top:140,
        
    },
    boldcontainer:{
        fontWeight:'bold'
    },
    termstextcontainer:{
        marginLeft:5,
        textAlign:'center',
        fontWeight:'gray',
        
        
    },
    grayText:{
        fontWeight:'#E2DEE2',
        color:'gray'
    },

    SignIn:{
        top:3,
    }
})