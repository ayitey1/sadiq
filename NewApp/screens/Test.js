//import { GOOGLE_MAPS_APIKEY } from "@env";

import React from "react";
import { Image, SafeAreaView, View } from "react-native";

//import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
//import { useDispatch } from "react-redux";
import NavOptions from "../components/NavOptions";
const Test = () => {
  
    
    return(
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View>
                <Image
                style ={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{
                    uri:"../assets/images/new.png"
                }}
                />

        
         
        
            
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
};

export default Test