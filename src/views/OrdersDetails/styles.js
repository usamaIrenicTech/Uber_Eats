import { StyleSheet } from "react-native";
 export default StyleSheet.create({
     parent_view:{
         flexL:1,
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
        marginHorizontal: 8,
        marginTop:15
      },
      subTitle: {
        color: "#525252",
        fontSize: 15,
        marginHorizontal: 8,
       
        marginTop:5
      },
      orderTitle:{
        fontSize:18,
        marginTop:20,
        letterSpacing:0.7,
        left:10,
        color:'#000',
        fontWeight:'700'
    },
})