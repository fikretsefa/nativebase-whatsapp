import {StyleSheet } from "react-native";
import {colors} from '../../Assets/globalColors';

export default StyleSheet.create({
    headerTitle: {
        color:colors.White
    },
    header: {
        backgroundColor: colors.BangladeshGreen
    },
    headerIcon:{
        color:colors.White
    },
    tabText:{
        color:colors.White
    },
    tabBarUnderlineStyle:{
        height:2,
        backgroundColor:colors.White
    },
    badge:{
        transform: [{ scale: 0.8 }],
        backgroundColor:colors.UFOGreen,
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center',
        marginTop:3
    },
    badgeText:{
        fontWeight:'bold',
        fontSize:15,
        color:colors.White
    },    
    fab:{
        backgroundColor:colors.UFOGreen
    }
  });