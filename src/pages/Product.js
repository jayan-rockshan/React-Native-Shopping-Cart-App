import React ,{useState} from 'react';
import { View, FlatList,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text ,Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from '../../navigation/AppStack' ;

import Head from '../components/Head';

const Product = ({navigation}) => {

  const [reviews, setReviews] = useState([
    { 
      title: 'Branded Head-set',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '1' ,
      image: require('../images/dot1.jpg'),
      discount:"20% Discount",
    },
    { 
      title: 'Red-cap',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '2' ,
      image: require('../images/dot2.jpg'),
      discount:"20% Discount",
    },
    { 
      title: 'Levis-T-shirt',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '3' ,
      image: require('../images/dot3.jpg'),
      discount:"20% Discount",
    },{ 
      title: 'Last-kings Pant',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '4' ,
      image: require('../images/dot4.jpeg'),
      discount:"20% Discount",
    },{ 
      title: 'High heal',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '5' ,
      image: require('../images/dot5.jpg'),
      discount:"20% Discount",
    },{ 
      title: 'Colored Old-tv',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '6' ,
      image: require('../images/dot6.png'),
      discount:"20% Discount",
    },{ 
      title: 'Shoes',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '7' ,
      image: require('../images/dot7.jpg'),
      discount:"20% Discount",
    },
    { 
      title: 'Cooling glasses',
      description: 'In here I am going to add few words about how i did this application',
      Price: 37.00, 
      key: '8' ,
      image: require('../images/dot8.jpg'),
      discount:"20% Discount",
    },
  ]);

  return (
    <View >
      <Head/>
      <FlatList
      data={reviews}
      renderItem={({item})=> (
              
              <ListItem avatar onPress={() => navigation.navigate('Product-Detail',item)}>
                  
                  <Left>
                    <Image style={{height:55,width:55}} source={item.image} />
                  </Left>

                  <Body>
                    <Text>{item.title}</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                  </Body>

                  <Right>
                    <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
                  </Right>

              </ListItem>

                 )} />
    </View>
);
}

export default Product ;