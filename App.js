
import React from 'react';
import Providers from './navigation';

const App = () => {

  return <Providers/>

}

export default App;


/*******************************home screen **********************************/
/*
import React,{Component} from "react";
import { View,Text} from "react-native";
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import ListProducts from "./src/pages/ListProducts" ;
import ListOffers from "./src/pages/ListOffers" ;
import Contact from "./src/pages/Contact";
import Head from './src/components/Head';
import Cart from './src/pages/Cart'

  class ContactScreen extends React.Component{
    render(){return (
      <View style={{ flex: 1 }}>
        <Contact/>
      </View>
    );}
  }
  class CartScreen extends React.Component{
    render(){return (
      
      <View style={{ flex: 1}}>
        <Cart/>
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

export default createAppContainer(TabNavigator);*/

