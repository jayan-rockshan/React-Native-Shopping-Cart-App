import React ,{Component} from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default function DetailOffers ({ route, navigation }) {
    const { title,image,description ,Price,discount} = route.params;
    return (
        <View style={styles.Container}>
          <Image source={image} style={styles.ImgEdit} />
          <Text style={styles.titleedit}>{title}</Text>
          <Text style={styles.DescriptionEdit}>{description}</Text>
          <Text>$ {Price} ({discount})</Text>
          <TouchableOpacity style={styles.FixButton}>
            <Text style={styles.sendBtnTxt}>Add To_Cart</Text>
          </TouchableOpacity>
        </View>
      );
}
const styles = StyleSheet.create(
  {

    Container:{flex:1,alignItems:'center',justifyContent:'center'},

    ImgEdit :{ width:"90%" , height:300},

    titleedit:{textAlign:'auto', marginTop: 10,fontWeight: 'bold',fontSize:15},

    DescriptionEdit:{justifyContent: 'center',textAlign:'center'},

    FixButton: {
      width: 300,
      height: 40,
      justifyContent: 'center',
      marginTop: 10,
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