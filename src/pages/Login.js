import React ,{Component} from "react";
import { View,Text ,StatusBar,StyleSheet,SafeAreaView} from "react-native";
import LoginLogo from "../components/LoginLogo" ;
import FormLogin from "../components/FormLogin" ;

export default class Login extends React.Component{
    render(){
      return(
        <SafeAreaView><View >
          <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
            <LoginLogo/>
            <FormLogin/>
              <View style={styles.signupTextCont}>
                <Text style={styles.signupText} >Do not have an account yet?</Text>
                <Text style={styles.sign}> Sign up</Text>
              </View>
            </View>
        </SafeAreaView>
      );
    }
  }
  const styles = StyleSheet.create(
    {
      container :{ backgroundColor :"#455a64" ,flex :1 ,alignItems:"center" ,justifyContent :"center"},
      signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:12,
        flexDirection:'row'
      },
      signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
      },
      sign:{
        fontSize:16
      }

    }
  );