import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Title, Button,  Right, Body, Icon, Text, Tabs, Tab, TabHeading,Badge, ScrollableTab } from 'native-base';
import styles from './globalStyles';
import {colors} from './Source/Assets/globalColors'
import * as Font from 'expo-font';

import ChatScreen from './Source/Screens/Chat/chat'
import SettingsScreen from './Source/Screens/Settings/settings'
import StatusScreen from './Source/Screens/Status/status'
import CallScreen from './Source/Screens/Call/call'
import ContactsScreen from './Source/Screens/Contacts/contacts'




export default class App extends Component {


  constructor(props) {
    super(props);
    //For Android
    setTimeout(() => { StatusBar.setBackgroundColor(colors.TealGreen); }, 100)
  }

  async componentDidMount() {
    //For Warning
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
  }



  render() {
    return (
      <Container>
        <Header noLeft style={styles.header}>
          <Body>
            <Title style={styles.headerTitle}>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent><Icon type='MaterialIcons' name='search' style={styles.headerIcon} /></Button>
            <Button transparent><Icon type='MaterialIcons' name='more-vert' style={styles.headerIcon} /></Button>
          </Right>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab/>} initialPage={0} tabBarBackgroundColor={colors.BangladeshGreen} tabContainerStyle={{elevation:0}} tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
        <Tab heading={
            <TabHeading style={{backgroundColor:colors.BangladeshGreen}}>
              <Text style={styles.tabText}>Kişiler</Text>
            </TabHeading>}>
            <ContactsScreen/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:colors.BangladeshGreen}}>
              <Text style={styles.tabText}>Sohbetler</Text>
              <Badge style={styles.badge}>
                <Text style={styles.badgeText}>3</Text>
              </Badge>
            </TabHeading>}>
            <ChatScreen/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:colors.BangladeshGreen}}>
              <Text style={styles.tabText}>Durum</Text>
            </TabHeading>}>
            <StatusScreen/>
          </Tab>    
          <Tab heading={
            <TabHeading style={{backgroundColor:colors.BangladeshGreen}}>
              <Text style={styles.tabText}>Aramalar</Text>
            </TabHeading>}>
            <CallScreen/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:colors.BangladeshGreen}}>
              <Text style={styles.tabText}>Ayarlar</Text>
            </TabHeading>}>
            <SettingsScreen/>
          </Tab>  
        </Tabs>
      </Container>
    );
  }
}


