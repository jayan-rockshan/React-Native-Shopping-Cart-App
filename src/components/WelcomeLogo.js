import React ,{Component} from "react";
import { View,Text ,Image,StyleSheet} from "react-native";

export default class WelcomeLogo extends React.Component{
    render(){
      return(
        <View style={styles.container}>
            <Image  style={{width:100, height: 100}} source={require('../images/login.png')}/>
            <Text style={styles.logotext}>Welcome to JSH</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create(
    {
      container :{ flex :1 ,justifyContent:"center",alignItems:"center" },
      logotext :{fontSize:18 ,color :"white"},
    }
  );