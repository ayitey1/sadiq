import { Image, StyleSheet, View } from 'react-native';

const logo = require("../assets/images/new.png");
export default function Whitescreen(){ return (
    <View style={styles.container}>
        <Image source={require("../assets/images/new.png")} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'
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
    marginLeft: 90,
    Top:150,
    
    
   }
});