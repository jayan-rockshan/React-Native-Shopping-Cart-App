import React ,{Component} from "react";
import { View,Text ,StatusBar,StyleSheet,TouchableOpacity,Image} from "react-native";

const Welcome = ({navigation}) => {

    return(
      <View style={styles.container}>
        <Image  style={{width:100, height: 100}} source={require('../images/login.png')}/>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>
          Welcome to JSH
        </Text>
        </TouchableOpacity>
      </View>
    );
  
  }

  export default Welcome ;

  const styles = StyleSheet.create(
    {
      container :{ backgroundColor :"#455a64" ,flex :1 ,alignItems:"center" ,justifyContent :"center",},
      text :{fontSize:18 ,color :"white"},
  
    }
  );