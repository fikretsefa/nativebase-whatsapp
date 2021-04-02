import React, { Component } from 'react';
import { View } from 'react-native';
import { Container,  Content,  Left,  Right,  Body,  Icon,  Text,  ListItem,  Thumbnail,  Fab} from 'native-base';
import styles from '../../../globalStyles';
import {colors} from '../../Assets/globalColors'

export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
         <Content>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/51.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Olcay Yasin</Text>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                <Icon name='call-made' type='MaterialIcons' style={{color:colors.UFOGreen,marginRight:5,fontSize:18}}/>
                <Text note>Bugün, 16:30</Text>
                </View>
            </Body>
            <Right>
                <Icon style={{color:colors.UFOGreen}} name='call' type='MaterialIcons'/>
            </Right>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/women/51.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Sevgi Aydın</Text>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                <Icon name='call-received' type='MaterialIcons' style={{color:colors.RoseRed,marginRight:5,fontSize:18}}/>
                <Text note>Dün, 08:30</Text>
                </View>
            </Body>
            <Right>
                <Icon style={{color:colors.UFOGreen}} name='videocam' type='MaterialIcons'/>
            </Right>
          </ListItem>       
        </Content>
        <Fab position="bottomRight" style={styles.fab}>
            <Icon name='phone-in-talk' type='MaterialIcons'/>
        </Fab>
      </Container>
    );
  }
}