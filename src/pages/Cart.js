import React ,{Component} from "react";
import { View,Text ,StatusBar,StyleSheet} from "react-native";
import EmptyCartLogo from "../components/EmptyCartLogo";
import Head from '../components/Head'

export default class Welcome extends React.Component{
    render(){
      return(
        <View>  
          <Head/>
        <View >
          
        <EmptyCartLogo/>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create(
    {
      container :{ flex :1 ,alignItems:"center" ,justifyContent :"center"},
      text :{color:"white",fontSize:18}
  
    }
  );