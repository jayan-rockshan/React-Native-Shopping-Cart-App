import { Text } from "native-base";
import React ,{Component} from "react";
import {View, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';



export default class Head extends React.Component {
    render(){
  return (
    <View style={styles.topBar}>
     <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#455a64',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    height:60
  }
});

/*backgroundColor: '#1c313a', */