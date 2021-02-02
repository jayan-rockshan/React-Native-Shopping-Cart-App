/*import React from "react";
import { View,Text ,StyleSheet ,StatusBar} from "react-native";
import Welcome from "./src/pages/Welcome"
import Login from "./src/pages/Login" ;
import Signup from "./src/pages/Signup" ;


export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
        <Login/>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    container :{ backgroundColor :"#455a64" ,flex :1 ,alignItems:"center" ,justifyContent :"center"}

  }
);
*/



import React,{Component} from "react";
import { View,Text} from "react-native";
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import ListProducts from "./src/pages/ListProducts" ;
import ListOffers from "./src/pages/ListOffers" ;
import Contact from "./src/pages/Contact";
import Head from './src/components/Head';


  class ContactScreen extends React.Component{
    render(){return (
      <View style={{ flex: 1 }}>
        <Contact/>
      </View>
    );}
  }
  class CartScreen extends React.Component{
    render(){return (
      <View style={{ flex: 1 }}>
        <Head/>
      </View>
    );}
  }
  
  class ProductsScreen extends React.Component{
    render(){return (
      <View style={{ flex: 1 }}>
        <ListProducts/>
      </View>
    );}
  }
  
  class OffersScreen extends React.Component{
  render(){return (
        <View style={{ flex: 1 }}>
          <ListOffers/>
        </View>
      );}
  }




const TabNavigator = createMaterialBottomTabNavigator({
  Products:{screen:ProductsScreen,navigationOptions:{tabBarLabel:'products',activeColor:'white',inactiveColor:'black',barStyle:{backgroundColor:'#455a64'},tabBarIcon:()=>(<View><Icon name={'shop'} size={25} style={{color:'white'}} /></View>)}},
  Offers:{screen:OffersScreen,navigationOptions:{tabBarLabel:'Offers',activeColor:'white',inactiveColor:'black',barStyle:{backgroundColor:'#455a64'},tabBarIcon:()=>(<View><Icon name={'shop-two'} size={25} style={{color:'white'}} /></View>)}},
  Cart:{screen:CartScreen,navigationOptions:{tabBarLabel:'Cart',activeColor:'white',inactiveColor:'black',barStyle:{backgroundColor:'#455a64'},tabBarIcon:()=>(<View><Icon name={'add-shopping-cart'} size={25} style={{color:'white'}} /></View>)}},
  Contact1:{screen:ContactScreen,navigationOptions:{tabBarLabel:'Contact',activeColor:'white',inactiveColor:'black',barStyle:{backgroundColor:'#455a64'},tabBarIcon:()=>(<View><Icon name={'settings-phone'} size={25} style={{color:'white'}} /></View>)}},
});

export default createAppContainer(TabNavigator);
