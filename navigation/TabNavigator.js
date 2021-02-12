import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AppStack from './AppStack'
import HomeScreen from '../src/pages/HomeScreen';
import Contact from '../src/pages/Contact';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Product from '../src/pages/Product';

import Cart from '../src/pages/Cart';
import Offer from '../src/pages/Offer';


const Tab = createMaterialBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator 
        barStyle={{
            backgroundColor: '#455a64',
            margin: 0,
            padding: 3,
            
          }}>
            <Tab.Screen
                        name="Products"
                        component={AppStack}
                        options={{
                         
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5 name="shopify" color='black' size={20} />
                            ),
                        }} />
                    <Tab.Screen
                        name="Offers"
                        component={Offer}
                        options={{
                         
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5 name="shopware" color='black' size={20} />
                            ),
                        }} />

                        <Tab.Screen
                        name="Cart"
                        component={Cart}
                        options={{
                         
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5 name="cart-plus" color='black' size={20} />
                            ),
                        }} />
                
                    <Tab.Screen
                        name="Contact"
                        component={Contact}
                        options={{
                         
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5 name="phone-volume" color='black' size={20} />
                            ),
                        }} />
                        <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                     
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="user-circle" color='black' size={20} />
                        ),
                    }} />
                        
                        
        </Tab.Navigator>
    )
}
