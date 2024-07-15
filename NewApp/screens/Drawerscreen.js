import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { DrawerLayoutAndroid, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Drawerscreen = () => {
    const navigation =  useNavigation();
const handlePayment=() =>{
      navigation.navigate("Paymentscreen");
};
const handlePromotions=() =>{
    navigation.navigate("Promotions");
};
const handleTrips=() =>{
    navigation.navigate("TripScreen");
};
const handleabout=() =>{
    navigation.navigate("About");
};
const handlesupport=() =>{
    navigation.navigate("Support");
};
const handlechatbot=() =>{
    navigation.navigate("Chatscreen");
};
const handleaccount=() =>{
    navigation.navigate("Accounts");
};

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
    const navigationView = () => (
        <SafeAreaView style={[styles.container, styles.navigationContainer]}>
            <View><Text style={styles.textg}>USER</Text></View>
            <View style={styles.acontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        onPress={handleaccount}]}
        >   
            <Icon style={styles.usercontainer}name="user" size={26} color="#1C05B3" />
            <Text style={styles.texta}>My Account</Text>
      </Pressable>
      </View>
      <View style={styles.separator}></View>
            <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlePayment}>
            <Icon style={styles.iconcontainer}name="credit-card" size={26} color="#1C05B3" />
            <Text style={styles.textp}>Payment</Text>
      </Pressable>
      </View>
       
            
           
            <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlePromotions}>
            <Icon style={styles.iconcontainer}name="gift" size={30} color="#1C05B3" />
            <Text style={styles.textp}>Promotions</Text>
      </Pressable>
      </View>
       
      <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={() => alert('We current have no registered drivers')}>
            <Icon style={styles.iconcontainer}name="suitcase" size={30} color="#1C05B3" />
            <Text style={styles.textp}>Expense your Trip</Text>
      </Pressable>
      </View>
       
      <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={() => alert('You currently have no trips')}>
            <Icon style={styles.iconcontainer}name="map-marker" size={30} color="#1C05B3" />
            <Text style={styles.textp}>My Trips</Text>
      </Pressable>
      </View>
       
      <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlesupport}>
            <Icon style={styles.iconcontainer}name="question-circle" size={30} color="#1C05B3" />
            <Text style={styles.textp}>Support</Text>
      </Pressable>
      </View>
      <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handleabout}>
            <Icon style={styles.iconcontainer}name="info-circle" size={30} color="#1C05B3" />
            <Text style={styles.textp}>About</Text>
      </Pressable>
      </View>
      <View style={styles.pcontainer}>
            <Pressable
        style={({ pressed }) => [
          styles.pcontainer,
          { backgroundColor: pressed ? '#E0E0E0' : 'transparent' },
        ]}
        onPress={handlechatbot}>
            <Icon style={styles.iconcontainer}name="info-circle" size={30} color="#1C05B3" />
            <Text style={styles.textp}>Drift bot</Text>
      </Pressable>
      </View>
    
         
        </SafeAreaView>
    );
  return (
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition={drawerPosition}
    renderNavigationView={navigationView}>
    <View style={styles.container}>
      <Icon style={styles.menucontainer} name='bars'size={30} color='#1C05B3'
          
        onPress={() => drawer.current.openDrawer()}/>
            
    </View>
  </DrawerLayoutAndroid>
);
};
    
  

export default Drawerscreen

const styles = StyleSheet.create({
    container:{
        top:50,
        left:20,
        height:50,
        width:50,
        backgroundColor:'#ffffff',
        borderRadius:20
    },
    menucontainer:{
        paddingTop:7,
        paddingLeft:10
    },
    paymentcontainer:{
        width:200,
        top:80,
        borderRadius:10,
        borderTopColor:'gray',
        borderTopLeftRadius:10
    },
    text:{
        left:50,
        top:43,
        fontSize:18,
        
    },
    iconpromo:{
        top:65,
        left:10
    },
    iconcontainer:{
        left:10,
        top:26
    },
    textp:{
        left:50,
        fontSize:18
    },
    pcontainer:{
        top:25,
        width:200,
        height:60,

    
    },

acontainer:{
    width:10,
    top:-30,
    
},
texta:{
    justifyContent:'center',
    alignItems:'center',
    left:50,
    top:-15,
},
usercontainer:{
    width:50,
    height:50,
    borderRadius:30,
    backgroundColor:'#E0E0E0',
    paddingLeft:15,
    paddingTop:10,
    top:5

},
separator: {
    width:300,
    height:10,
    backgroundColor:'#CCCCCC',
    borderRadius:50,
    right:20,
    top:10
  },
  textg:{
    left:60,
    top:30,
    fontSize:16,
    fontWeight:'bold',
    color:'#1C05B3'
  }
})