import {StyleSheet } from "react-native";
import {colors} from '../../Assets/globalColors';

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
        color:'#fff'
    },
    addStatusIcon:{
        color:colors.UFOGreen,
        alignSelf:'flex-end',
        position:'absolute',
        marginLeft:40,
        bottom:-5,
        width:20,
        fontSize:20,        
    },
    listItemDivider:{
        marginTop:10
    },       
    fab:{
        backgroundColor:colors.UFOGreen
    }
  });