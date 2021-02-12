import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator' ;
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
    return (
    <NavigationContainer>
        {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );

};

export default Routes;