import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function OrderItemList({order}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.parent_view} activeOpacity={0.6} onPress={()=>navigation.navigate('Order Details')}>
      <Image source={{uri:order.Restaurant.image}} style={styles.image}/>
      <View>
        <Text style={styles.order_name}>{order.Restaurant.name}</Text>
        <Text style={styles.order_quan_price}>Item 2 &#8226; $38.45 </Text>
        <Text style={styles.order_status}>2 days ago &#8226; {order.status}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  parent_view:{
  //  borderWidth:1,
   width:'100%',
  flexDirection:'row',
    alignItems:'center',
    // margin:10,
    // backgroundColor:'#eee',
    borderBottomWidth:1,
    borderColor:'lightgray',
    padding:10
  },
    image:{
      width:75,
      height:75,
      marginRight:10
    },
    order_name:{
      fontWeight:'700',
      fontSize:16,
    },
    order_quan_price:{
      marginVertical:5,
      color:'#525252'
    },
    order_status:{
      color:'#525252'
    }

})