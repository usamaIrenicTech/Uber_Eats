import { View, Text, StyleSheet, Image, TouchableOpacity, startsWith } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Order } from '../../models';

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"
export default function OrderItemList({order}) {
  const [orderRestaurant, setOrderRestaurant] = useState([])
  // setOrderRestaurant(order)
  console.log("OrderRestau-->", orderRestaurant)
  console.log("OrdersList-->", order);

  const navigation = useNavigation();

  const getRestaurant = async(order) => {
    
    const res = await order.map((item)=>item.Restaurants)
   await Promise.all(res).then((val)=>{
     return Promise.all(val.map((item)=>setOrderRestaurant(item)))
   }).catch((error) => console.log(error));
  };
  useEffect(()=>{
    getRestaurant(order);
  }, [])
  return (
    <TouchableOpacity style={styles.parent_view} activeOpacity={0.6} onPress={()=>navigation.navigate('Order Details', {id:order.id})}>
      <Image source={{uri:order?.image? order?.image:DEFAULT_IMAGE}} style={styles.image}/>
      <View>
        <Text style={styles.order_name}>{order?.name}</Text>
        <Text style={styles.order_quan_price}>Item 2 &#8226; ${order.total.toFixed(2)} </Text>
        <Text style={styles.order_status}> 2 days ago &#8226; {order?.status}</Text>
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
      marginRight:10,
      borderRadius:10
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