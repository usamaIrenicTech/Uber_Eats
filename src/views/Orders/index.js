import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import OrderItemList from '../../componets/OrderItemList';
import orders from '../../data/orders.json'
const order = orders; 

export default function Orders() {
  return (
    <View style={styles.parent_view}>
        <Text style={styles.order_title}>Your Orders</Text>
        <FlatList 
        data={order}
        renderItem={({item, index})=>{
            return <OrderItemList order={item}/>
        }}
        />
      
    </View>
  )
}
const styles = StyleSheet.create({
    parent_view:{
        flex:1
    },
    order_title:{
        fontSize:20,
        fontWeight:'700',
        alignSelf:'center',
        marginVertical:10
    }
})