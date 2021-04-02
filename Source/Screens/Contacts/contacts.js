import React, { Component } from 'react';
import { Container, Content, Left, Body, Icon, Text,ListItem ,Thumbnail, Fab} from 'native-base';
import appStyles from '../../../globalStyles';

export default class Contacts extends Component {
  render() {
    return (
      <Container>
         <Content>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/women/51.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Sevgi Aydın</Text>
                <Text note>Çalışıyor</Text>
            </Body>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/women/52.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Seda Üçkül</Text>
                <Text note>Müsaitim</Text>
            </Body>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/51.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Olcay Yasin</Text>
                <Text note>Sadece mesaj</Text>
            </Body>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/52.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Ali Türkkan</Text>
                <Text note>Dış hat</Text>
            </Body>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/53.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Yusuf Sönmez</Text>
                <Text note>Sadece arama</Text>
            </Body>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/54.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Utku Gülseven</Text>
                <Text note>Dışarıda</Text>
            </Body>
          </ListItem>
            
            
        </Content>
        <Fab position="bottomRight" style={appStyles.fab}>
            <Icon name='chat' type='MaterialIcons'/>
        </Fab>
      </Container>
    );
  }
}