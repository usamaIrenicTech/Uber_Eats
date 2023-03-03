import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
    //   marginVertical: 5,
    },
    icon_view:{
        width:30,
        height:30,
        position:'absolute',
        top:40,
        left:10,
        backgroundColor:'#fff',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#000",
      // marginHorizontal: 5,
    },
    subTitle: {
      color: "#525252",
      fontSize: 15,
      // marginHorizontal: 5,
      marginBottom:5,
      marginTop:5
    },
    menuTitle:{
        fontSize:18,
        marginTop:20,
        letterSpacing:0.7,
        left:10,
        color:'#333'
    },
    row:{
      marginTop:10,
      paddingBottom:15,
      borderBottomWidth:1,
      borderColor:'lightgray',
      paddingLeft:10
    },
    rating:{
        marginRight:5
    },
    btn: {
      padding: 15,
      backgroundColor: "#000",
      margin: 10,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 5,
    },
    btn_text: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
    },
})