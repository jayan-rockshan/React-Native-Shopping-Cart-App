import React ,{Component} from "react";
import { View,Text ,StatusBar,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,ScrollView} from "react-native";
import { Header} from 'native-base';
import Head from "../components/Head";
/*if i want i can  native base <header/> for <Head/> */
export default class Contact extends React.Component{
    render(){
      return(
        <View >
              <Head/>
              <ScrollView>
            <View>
                <Text style={styles.containertitle}>Contact Us</Text>
                <Text style={styles.containerdescription}>Do you have any issues with this app Contact us anytime </Text>
            
                  <View style={styles.contactUsForm}>

                      <Text style={{fontSize: 18}}>Name  :</Text>
                      <TextInput 
                          style={styles.contactUsInput}
                          autoCompleteType="name"
                          placeholder="eg: Jayan Rockshan">
                      </TextInput>
                  
                      <Text style={{fontSize: 18}}>Email :</Text>
                      <TextInput
                          style={styles.contactUsInput}
                          autoCompleteType="email"
                          placeholder="eg: jeisonrockexx@gmail.com"></TextInput>
                      
                      <Text style={{fontSize: 18}}>Message :</Text>
                      <TextInput
                          style={styles.contactUsInputArea}
                          placeholder="Enter your message here..."></TextInput>
                      
                      <TouchableOpacity style={styles.sendBtn}>
                          <Text style={styles.sendBtnTxt}>Send</Text>
                      </TouchableOpacity>
                  </View>
            </View></ScrollView>
        </View>
      );
    }
  }
  const styles = StyleSheet.create(
    {
      
      containertitle : {
        fontSize: 22,
        textAlign:"center",
        marginTop: 10,
        fontWeight: 'bold',
      },
      containerdescription : {
        fontSize: 18,
        textAlign: 'center',
        
        
      },
      contactUsForm: {
        alignSelf: 'center',
        marginTop: 10,
      },
      contactUsInput: {
        fontSize: 16,
        width: 300,
        height: 50,
        
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 10,
        marginBottom: 10,
      },
      contactUsInputArea: {
        fontSize: 16,
        width: 300,
        height: 100,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 25,
      },
      sendBtn: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 2.3,
        backgroundColor:'#1c313a',
        borderRadius: 12,
        marginVertical: 30,
        paddingVertical: 13,
        borderColor:'#1c313a'
      },
      sendBtnTxt: {
        textAlign: 'center',
        fontSize: 20,
        color:'white'
    
      }
    }
  );
  