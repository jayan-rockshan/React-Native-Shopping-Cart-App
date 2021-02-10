import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/pages/HomeScreen';


const Stack = createStackNavigator();


const AppStack = () => {
    
return(
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
    );

};

export default AppStack;