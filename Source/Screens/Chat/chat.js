import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Left, Right, Body, Icon, Text,ListItem ,Thumbnail, Badge,Fab} from 'native-base';
import styles from './chatStyles';
import { colors } from '../../Assets/globalColors';

export default class Chat extends Component {
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
                <Text note>Evin önüne geldim kapıyı aç</Text>
            </Body>
            <Right>
                <Text note>18:58</Text>
                <Badge style={styles.badge}><Text style={styles.badgeText}>2</Text></Badge>
            </Right>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/women/51.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Sevgi Aydın</Text>
                <Text note>Gelirken ne alalım?</Text>
            </Body>
            <Right>
                <Text note>18:45</Text>                
                <Badge style={styles.badge}><Text style={styles.badgeText}>3</Text></Badge>
            </Right>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/women/52.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Seda Üçkül</Text>
                <Text note>Olcay geldi mi?</Text>
            </Body>
            <Right>
                <Text note>16:44</Text>
                <Badge style={styles.badge}><Text style={styles.badgeText}>2</Text></Badge>
            </Right>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/52.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Ali Türkkan</Text>
                <View style={{flexDirection:'row'}}>
                <Icon name='image' type='MaterialIcons' style={{color:colors.LightGray,marginTop:1,fontSize:16}} />
                <Text note>Fotoğraf </Text>
                </View>
            </Body>
            <Right>
                <Text note>11:25</Text>
            </Right>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/54.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Utku Gülseven</Text>
                <View style={{flexDirection:'row'}}>
                <Icon name='attachment' type='MaterialIcons' style={{color:colors.LightGray,marginTop:1,fontSize:16}} />
                <Text note>Ders.pdf </Text>
                </View>
            </Body>
            <Right>
                <Text note>09:45</Text>
            </Right>
          </ListItem>    
        </Content>
        <Fab position="bottomRight" style={styles.fab}>
            <Icon name='chat' type='MaterialIcons'/>
        </Fab>
      </Container>
    );
  }
}