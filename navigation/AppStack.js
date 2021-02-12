import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/pages/HomeScreen';
import Cart from '../src/pages/Cart';
import Contact from '../src/pages/Contact';
import Product from '../src/pages/Product';
import Offer from '../src/pages/Offer';
import ProductPass from '../src/pages/ProductPass' ;
import OfferPass from '../src/pages/OfferPass';


const Stack = createStackNavigator();


const AppStack = () => {
    
return(
    <Stack.Navigator>
        <Stack.Screen name="Products" component={Product} options={{ headerShown: false }} />
        <Stack.Screen name="Offers" component={Offer} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductPass" component={ProductPass} />
        <Stack.Screen name="OfferPass" component={OfferPass} />
    </Stack.Navigator>
    );

};

export default AppStack;

