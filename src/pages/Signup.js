import React , {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../../navigation/AuthProvider';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const {register} =useContext(AuthContext);
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
        
        

        <FormInput
          placeholderText="Name"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          placeholderText="Phone-Number"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          placeholderText="Cart-number"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
      />
        <FormButton
          buttonTitle="Sign In"
          onPress={() => register(email , password)}
      />
       
       <TouchableOpacity
        style={styles.forgotButton}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#455a64',
  },
  
  navButton: {
    marginTop: 50,
  },
  forgotButton: {
    marginVertical: 35,
    marginTop: 120,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color:'rgba(255, 255, 255, 0.7)',
    
  },
});