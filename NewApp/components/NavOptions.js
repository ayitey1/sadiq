import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";

const data =[
    {
        id:"123",
        title:"Get a ride",
        image: "https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"Go",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
      <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
        onPress={ () => navigation.navigate('MyTabs')} style={{paddingLeft:6,} }>
            <View>
                <Image
                style={{width:120, height:120,resizeMode:"center"}}
                source={{uri: item.image}} />
            <Text style={{margin:2,fontSize:10}}>{item.title}</Text>
            <Icon
            style={{padding:5,backgroundColor:'black',}}
             name="arrow-right" color="white"/>
            </View>
        </TouchableOpacity>
    )}
    />
    )};
export default NavOptions;