import React ,{Component} from "react";
import { View,Text ,Image,StyleSheet} from "react-native";

export default class LoginLogo extends React.Component{
    render(){
      return(
        <View style={styles.container}>
				<Image  style={{width:150, height: 150}}
          			source={require('../images/slogin.png')}/>
          		<Text style={styles.logoText}>Access Process</Text>	
  			</View>
      );
    }
  }
  const styles = StyleSheet.create(
    {
      
      container : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
      },
      logoText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
      }
  
    }
  );