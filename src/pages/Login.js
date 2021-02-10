import React , {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../../navigation/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext)
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
        <Image style={styles.logo} source={require('../images/slogin.png')} />
        <Text style={styles.text}>Access Process</Text>

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
          onPress={() => login(email , password)}
      />

        <FormButton
          buttonTitle="Guest in"
          onPress={() => alert('hello')}
      />

        <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#455a64',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    marginBottom: 15,
    fontSize:18,
    color:'rgba(255, 255, 255, 0.7)',
  },
  navButton: {
    marginTop: 20,
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