import React, { Component } from 'react';
import { Container, Content, Left, Body, Icon, Text, ListItem ,Thumbnail, Fab} from 'native-base';
import styles from './statusStyles';

export default class Status extends Component {
  render() {
    return (
      <Container>
         <Content>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/55.jpg'}}></Thumbnail>
                <Icon name='add-circle' type="MaterialIcons" style={styles.addStatusIcon}/>
            </Left>
            <Body>
                <Text>Durumum</Text>
                <Text note>Durum güncellemesi eklemek için dokunun</Text>
            </Body>
          </ListItem>   
          <ListItem itemDivider style={styles.listItemDivider}>
            <Text style={{fontSize:15}}>Eski Durumlar</Text>
          </ListItem> 
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/54.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Utku Gülseven</Text>
                <Text note>Bugün, 12:43</Text>
            </Body>
          </ListItem>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/women/52.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Seda Üçkül</Text>
                <Text note>Dün, 18:13</Text>
            </Body>
          </ListItem>
        </Content>
        <Fab position="bottomRight" style={styles.fab}>
            <Icon name='photo-camera' type='MaterialIcons'/>
        </Fab>
      </Container>
    );
  }
}