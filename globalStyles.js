import {StyleSheet } from "react-native";
import {colors} from './Source/Assets/globalColors'

export default StyleSheet.create({
    headerTitle: {
      color:colors.White
    },
    header: {
        backgroundColor:colors.BangladeshGreen
    },
    headerIcon:{
        color:colors.White
    },
    tabText:{
        color:colors.White
    },
    tabBarUnderlineStyle:{
        height:2,
        backgroundColor:colors.White,
    },
    badge:{
        transform: [{ scale: 0.7 }],
        backgroundColor:colors.WhiteChocolate,
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center'
    },
    badgeText:{
        fontWeight:'bold',
        fontSize:15,
        color:colors.BangladeshGreen
    },
    fab:{
        backgroundColor:colors.UFOGreen
    }
  });