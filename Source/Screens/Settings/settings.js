import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Left, Body, Icon, Text,ListItem ,Thumbnail, Separator} from 'native-base';
import {colors} from '../../Assets/globalColors'

export default class Settings extends Component {
  render() {
    return (
      <Container>
         <Content>
          <ListItem avatar noBorder style={{marginBottom:5}}>
            <Left>
                <Thumbnail source={{uri:'https://randomuser.me/api/portraits/med/men/55.jpg'}}></Thumbnail>
            </Left>
            <Body>
                <Text>Fikret Sefa Çakır</Text>
                <Text note>Müsaitim</Text>
            </Body>
          </ListItem>
          <Separator style={{marginTop:15,height:1}} />
          <ListItem icon noBorder style={{marginTop:15}}>
            <Left>
               <Button transparent><Icon name='vpn-key' type='MaterialIcons'style={{color:colors.TealGreen,opacity:0.7}}/></Button> 
            </Left>
            <Body>
                <Text>Hesap</Text>
                <Text note>Gizlilik, Güvenlik ve Şifre Değiştirme</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{marginTop:15}}>
            <Left>
               <Button transparent><Icon name='chat' type='MaterialIcons'style={{color:colors.TealGreen,opacity:0.7}}/></Button> 
            </Left>
            <Body>
                <Text>Sohbet</Text>
                <Text note>Tema, Arka Plan, Geçmiş</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{marginTop:15}}>
            <Left>
               <Button transparent><Icon name='notifications' type='MaterialIcons'style={{color:colors.TealGreen,opacity:0.7}}/></Button> 
            </Left>
            <Body>
                <Text>Bildirim</Text>
                <Text note>Bildirim Ayarları</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{marginTop:15}}>
            <Left>
               <Button transparent><Icon name='data-usage' type='MaterialIcons'style={{color:colors.TealGreen,opacity:0.7}}/></Button> 
            </Left>
            <Body>
                <Text>Veri Kullanımı</Text>
                <Text note>Veri kullanımı, otomatik indirme</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{marginTop:15}}>
            <Left>
               <Button transparent><Icon name='help-outline' type='MaterialIcons'style={{color:colors.TealGreen,opacity:0.7}}/></Button> 
            </Left>
            <Body>
                <Text>Yardım</Text>
                <Text note>S.S.S , Gizlilik Sözleşmesi</Text>
            </Body>
          </ListItem>
          <View style={{flex:1,alignSelf:'center',marginTop:20}}>            
          <Text note style={{textAlign:'center',marginTop:20}}>from</Text>
          <Text style={{textAlign:'center',fontWeight:'bold',color:colors.BangladeshGreen}}>Facebook</Text>
          </View>
        </Content>
      </Container>
    );
  }
}