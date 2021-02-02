import React ,{Component} from "react";
import { View,Text ,StatusBar,StyleSheet,SafeAreaView} from "react-native";
import FormSignup from "../components/FormSignup" ;

/*in here i remove logologin page because it's not user friendly*/
/*and if i want submit it again i can do passing this <LogoLogin> to in render method */

export default class Signup extends React.Component{
    render(){
      return(
        <SafeAreaView>
          <View >
            <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
            <FormSignup/>
              <View style={styles.signupTextCont}>
				      <Text style={styles.signupText} >Alredy have an account</Text>
              <Text style={styles.sign}> Log in</Text>
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