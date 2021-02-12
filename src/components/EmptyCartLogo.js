import React ,{Component} from "react";
import { View,Text ,Image,StyleSheet,StatusBar} from "react-native";

export default class EmptyCartLogo extends React.Component{
    render(){
      return(
        <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
				<Image  style={{width:150, height: 150}}
          			source={require('../images/emptycart.png')}/>
          		<Text style={styles.logoText}>No Item in your Cart !!</Text>	
  			</View>
      );
    }
  }
  const styles = StyleSheet.create(
    {
      
      container : {
          marginTop:100,
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
      },
      logoText : {
     
        fontSize:18,
        color:'black',
        fontWeight:'500',

      }
  
    }
  );