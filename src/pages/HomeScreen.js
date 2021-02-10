import React, {useContext} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import FormButton from '../components/FormButton';


const HomeScreen = () => {
    const {user,logout} = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <FormButton buttonTitle='Logout' onPress={()=>logout()} />
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{backgroundColor: 'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
},
text:{fontSize:20,color:'black'}
})