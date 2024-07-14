import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from "react-redux";
import Splashdrift from './components/Splashdrift';
import About from './screens/About';
import Accounts from './screens/Accounts';
import As from './screens/As';
import Cash from './screens/Cash';
import Chatscreen from './screens/Chatscreen';
import Credit from './screens/Credit';
import Drawerscreen from './screens/Drawerscreen';
import Driftbalance from './screens/Driftbalance';
import Driverscreen from './screens/Driverscreen';
import Enter from './screens/Enter';
import Forgetpassword from './screens/Forgetpassword';
import Info from './screens/Info';
import Input from './screens/Input';
import Letstart from './screens/Letstart';
import Letsupport from './screens/Letsupport';
import MapScreen from './screens/MapScreen';
import Me from './screens/Me';
import Paymentscreen from './screens/Paymentscreen';
import Promocode from './screens/Promocode';
import Promotions from './screens/Promotions';
import Signinas from './screens/Signinas';
import { store } from './screens/store';
import Support from './screens/Support';
import Test from './screens/Test';
import The from './screens/The';
import Them from './screens/Them';
import Transaction from './screens/Transaction';
import Us from './screens/Us';
import Verifycode from './screens/Verifycode';
import You from './screens/You';
const Tab = createBottomTabNavigator();
const Stack= createStackNavigator();
screenOptions={
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        backgroundColor:'#fff'
    }
}
function HomeScreen() {
    return (
      // Your HomeScreen component
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    );
  }
  
  function TripScreen() {
    return (
      // Your TripScreen component
      <SafeAreaView style={styles.container}>
        
      </SafeAreaView>
    );
  }
  
  function AccountScreen() {
    return (
      // Your AccountScreen component
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    );
  }
 
  
  function MyTabs() {
    return (
      <Tab.Navigator >
        <Tab.Screen name='home' component={Drawerscreen}  options={{
            headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#1C05B3'} size={30} />
        ),
    }}
  />
        <Tab.Screen name="Trip" component={TripScreen} options={{
            headerShown: false,
          tabBarLabel: 'Trip',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" size={30} color="#1C05B3" />
        ),
    }}
    />
    <Tab.Screen name="Account" component={AccountScreen} 
    ptions={{
        headerShown: false,
      tabBarLabel: 'Account',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="user" size={30} color="#1C05B3" />
    ),
}}/>
      </Tab.Navigator>
    );
  }



export default function App() {

    return (

       
         <Provider store={store}>
            <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator>
                <Stack.Screen
                    name="Splashdrift"  component={Splashdrift}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Input"  component={Input}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Signinas"  component={Signinas}
                    options={{
                        headerShown: false,
                    }}
                />
                
                 <Stack.Screen
                    name="Forgetpassword"  component={Forgetpassword}
                    options={{
                        headerShown: false,
                    }}
                />
                 <Stack.Screen
                    name="Enter"  component={Enter}
                    options={{
                        headerShown: false,
                    }}
                /><Stack.Screen
                name="Verifycode"  component={Verifycode}
                options={{
                    headerShown: false,
                }}
            />
                <Stack.Screen
                    name="Letstart"  component={Letstart}
                    options={{
                        headerShown: false,
                    }}
                />
                    <Stack.Screen
                    name="Test" component={Test}
                    options={{
                        headerShown: false,
                    }}
                    />
                      <Stack.Screen
              name="MyTabs"
              component={MyTabs}
              options={{
                headerShown: false,
              }}
            />
               
        <Stack.Screen
          name="Drawerscreen"
          component={Drawerscreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Driverscreen"
          component={Driverscreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Paymentscreen"
          component={Paymentscreen}
          options={{
            headerShown: false,
          }}
        /><Stack.Screen
        name="Promotions"
        component={Promotions}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        /><Stack.Screen
        name="TripScreen"
        component={TripScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Accounts"
        component={Accounts}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="Promocode"
        component={Promocode}
        options={{
          headerShown: false,
        }}/>
                <Stack.Screen
        name="Letsupport"
        component={Letsupport}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="Driftbalance"
        component={Driftbalance}
        options={{
          headerShown: false,
        }}/><Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{
          headerShown: false,
        }}/><Stack.Screen
        name="Cash"
        component={Cash}
        options={{
          headerShown: false,
        }}/><Stack.Screen
        name="Credit"
        component={Credit}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="Info"
        component={Info}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="The"
        component={The}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="You"
        component={You}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="Me"
        component={Me}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="Them"
        component={Them}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="As"
        component={As}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen
        name="Us"
        component={Us}
        options={{
          headerShown: false,
        }}/>
      <Stack.Screen name="Chatscreen" component={Chatscreen} options={{
          headerShown: false,
        }} />
                </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
            
         </Provider>
         
    
);
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});

