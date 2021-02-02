import React ,{Component} from "react";
import { View,Text ,StatusBar,StyleSheet} from "react-native";
import WelcomeLogo from "../components/WelcomeLogo" ;

export default class Welcome extends React.Component{
    render(){
      return(
        <View >
          <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
          <Text style={styles.text}>
          <WelcomeLogo/> 
          </Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create(
    {
      container :{ backgroundColor :"#455a64" ,flex :1 ,alignItems:"center" ,justifyContent :"center"},
      text :{color:"white",fontSize:18}
  
    }
  );