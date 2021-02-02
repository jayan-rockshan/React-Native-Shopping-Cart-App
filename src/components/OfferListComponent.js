import React, { Component } from 'react';
import {Image} from 'react-native' ;
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text ,Icon} from 'native-base';
import Head from './Head';
/*if i want i can  native base <header/> for <Head/> */
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Head/>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot1.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot2.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot3.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot4.jpeg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon  style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot5.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot6.png')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot7.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Image style={{height:55,width:55}} source={require('../images/dot8.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Icon style={{color:'black' ,marginTop: 17}} name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}